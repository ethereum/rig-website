import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

import {
  formatTeamNames,
  getContributorsFromIDs,
  getFallbackInitials,
  listNames,
} from "@/lib/contributors"

import { members, vips } from "@/data/profiles"
import { cn } from "@/lib/utils"
import { Contributor } from "@/lib/types"
import Link from "./ui/link"
import { Fragment } from "react"

type ContributorsProps = {
  names: string[]
  avatarClass?: string
  etAl?: boolean
  skipLinks?: boolean
  enableAllWorksLinks?: boolean
}

export const Contributors = ({
  names,
  avatarClass,
  etAl,
  skipLinks,
  enableAllWorksLinks,
}: ContributorsProps) => {
  // Get all contributors based on the provided names
  const contributors = getContributorsFromIDs(names)

  // Separate contributors into team members, VIPs, and others
  const teamMembers = contributors.filter((contributor) =>
    members.some(
      (member) => member.id.toLowerCase() === contributor.id.toLowerCase()
    )
  )

  const vipContributors = contributors.filter((contributor) =>
    vips.some((vip) => vip.id.toLowerCase() === contributor.id.toLowerCase())
  )

  // Get all non-team and non-VIP contributors
  const otherContributors = contributors.filter(
    (contributor) =>
      !teamMembers.includes(contributor) &&
      !vipContributors.includes(contributor)
  )

  // Check if we have external contributors
  const hasOtherContributors = otherContributors.length > 0

  // Create ordered contributors list
  // When etAl is true (landing page): maintain original order for members and vips, exclude externals from avatars
  // When etAl is false (individual pages): maintain exact original order for all authors
  const orderedContributors: Contributor[] = etAl
    ? contributors.filter(
        (contributor) =>
          teamMembers.includes(contributor) ||
          vipContributors.includes(contributor)
      )
    : contributors

  const getContributorList = () => {
    // Get names in original order from the contributors array (which preserves .md order)
    const orderedNames = contributors.map(({ name }) => name)
    
    // For landing page with etAl: show members and vips in original order, then "et al." for externals
    // For individual pages: show all authors in original order
    const displayNames = etAl
      ? orderedContributors.map(({ name }) => name)
      : orderedNames

    if (!enableAllWorksLinks) {
      // Original string-based behavior
      if (etAl && hasOtherContributors) {
        return `${formatTeamNames(displayNames, true)}, et al.`
      }
      return listNames(displayNames)
    }

    // JSX-based behavior with links
    const renderNameWithLink = (
      name: string,
      index: number,
      array: string[]
    ) => {
      const isLast = index === array.length - 1
      const isSecondToLast = index === array.length - 2

      const member = members.find((m) => m.name === name)
      const nameElement = member ? (
        <Link
          key={name}
          href={`/all-works/${member.id}`}
          className="text-card-foreground hover:text-card-foreground hover:underline"
          hideArrow
        >
          {name}
        </Link>
      ) : (
        <span key={name} className="text-card-foreground">
          {name}
        </span>
      )

      if (array.length === 1) return nameElement
      if (array.length === 2) {
        return (
          <Fragment key={name}>
            {nameElement}
            {isSecondToLast ? " and " : ""}
          </Fragment>
        )
      }

      // More than 2 names - use Oxford comma
      return (
        <Fragment key={name}>
          {nameElement}
          {isLast ? "" : isSecondToLast ? ", and " : ", "}
        </Fragment>
      )
    }

    return (
      <>
        {displayNames.map(renderNameWithLink)}
        {etAl && hasOtherContributors && ", et al."}
      </>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      {/* Only display avatars if there are team members or VIPs */}
      {orderedContributors.length > 0 && (
        <div className="flex flex-nowrap -space-x-1">
          {orderedContributors.map(({ id, name, avatar, twitter }) => {
            const avatarContent = (
              <Avatar
                className={cn("border-background size-6 border-2", avatarClass)}
              >
                <AvatarImage
                  src={avatar?.replace(/^public/, "")}
                  alt={`${name} avatar`}
                />
                <AvatarFallback className="font-sans text-xs">
                  {getFallbackInitials(name)}
                </AvatarFallback>
              </Avatar>
            )

            return twitter && !skipLinks ? (
              <Link
                key={id}
                href={new URL(twitter, "https://x.com").toString()}
                hideArrow
                title={`@${twitter}`}
                className="hover:-outline-offset-//0 rounded-full hover:z-10 hover:outline"
              >
                {avatarContent}
              </Link>
            ) : (
              <Fragment key={id}>{avatarContent}</Fragment>
            )
          })}
        </div>
      )}
      <p className="text-card-foreground font-sans text-sm">
        {getContributorList()}
      </p>
    </div>
  )
}
