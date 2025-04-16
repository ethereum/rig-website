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
}

export const Contributors = ({
  names,
  avatarClass,
  etAl,
  skipLinks,
}: ContributorsProps) => {
  // Get all contributors based on the provided names
  const contributors = getContributorsFromIDs(names)

  // Separate contributors into team members, VIPs, and others
  const teamMembers = contributors.filter((contributor) =>
    members.some((member) => member.id === contributor.id)
  )

  const vipContributors = contributors.filter((contributor) =>
    vips.some((vip) => vip.id === contributor.id)
  )

  // Get all non-team and non-VIP contributors
  const otherContributors = contributors.filter(
    (contributor) =>
      !teamMembers.includes(contributor) &&
      !vipContributors.includes(contributor)
  )

  // Get names for each category
  const teamMemberNames = teamMembers.map(({ name }) => name)
  const vipNames = vipContributors.map(({ name }) => name)
  const otherNames = otherContributors.map(({ name }) => name)

  // Check if we have external contributors
  const hasOtherContributors = otherContributors.length > 0

  // Create ordered contributors list maintaining the original order from names
  // but prioritizing team members, then VIPs, then others
  const orderedContributors: Contributor[] = [
    // First add team members in the order they appear in original names array
    ...names
      .map((id) =>
        teamMembers.find((member) => member.id === id || member.name === id)
      )
      .filter((contributor): contributor is Contributor =>
        Boolean(contributor)
      ),
    // Then add VIPs in the order they appear in original names array
    ...names
      .map((id) =>
        vipContributors.find((vip) => vip.id === id || vip.name === id)
      )
      .filter((contributor): contributor is Contributor =>
        Boolean(contributor)
      ),
  ]

  const getContributorList = () => {
    const allNames = [...teamMemberNames, ...vipNames, ...otherNames]
    if (!orderedContributors.length) return listNames(otherNames)
    if (!etAl) return listNames(allNames)
    return `${formatTeamNames([...teamMemberNames, ...vipNames], hasOtherContributors)}${
      hasOtherContributors ? ", et al." : ""
    }`
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
