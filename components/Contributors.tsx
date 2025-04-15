import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

import {
  formatTeamNames,
  getContributorsFromIDs,
  getFallbackInitials,
  listNames,
} from "@/lib/contributors"

import { members } from "@/data/profiles"
import { cn } from "@/lib/utils"

type ContributorsProps = {
  names: string[]
  avatarClass?: string
  etAl?: boolean
}

export const Contributors = ({
  names,
  avatarClass,
  etAl,
}: ContributorsProps) => {
  const contributors = getContributorsFromIDs(names)
  const teamMembers = contributors.filter((contributor) =>
    members.some((member) => member.id === contributor.id)
  )

  // Get names of team members only
  const teamMemberNames = teamMembers.map(({ name }) => name)
  // Check if we have non-team contributors
  const hasOtherContributors = contributors.length > teamMembers.length
  // Get all non-team contributors
  const nonTeamContributors = contributors.filter(
    (contributor) => !members.some((member) => member.id === contributor.id)
  )
  const nonTeamNames = nonTeamContributors.map(({ name }) => name)

  const getContributorList = () => {
    if (!teamMembers.length) return listNames(nonTeamNames)

    if (!etAl) return listNames([...teamMemberNames, ...nonTeamNames])

    return `${formatTeamNames(teamMemberNames, hasOtherContributors)}${
      hasOtherContributors ? ", et al." : ""
    }`
  }

  return (
    <div className="flex items-center space-x-2">
      {/* Only display avatars if there are team members */}
      {teamMembers.length > 0 && (
        <div className="flex flex-nowrap -space-x-1">
          {teamMembers.map(({ id, name, avatar }) => (
            <Avatar
              key={id}
              className={cn("border-background size-6 border-1", avatarClass)}
            >
              <AvatarImage
                src={avatar?.replace(/^public/, "")}
                alt={`${name} avatar`}
              />
              <AvatarFallback className="font-sans text-xs">
                {getFallbackInitials(name)}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      )}
      <p className="text-card-foreground font-sans text-sm">
        {getContributorList()}
      </p>
    </div>
  )
}
