import {
  getContributorsFromIDs,
  getFallbackInitials,
  listNames,
} from "@/lib/contributors"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export const Contributors = ({ names }: { names: string[] }) => {
  const contributors = getContributorsFromIDs(names)
  const contributorNames = contributors.map(({ name }) => name)

  return (
    <div className="flex items-center space-x-2">
      <div className="flex flex-nowrap -space-x-1">
        {contributors.map(({ id, name, avatar }) => (
          <Avatar key={id} className="border-background size-4 border-1">
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
      <p className="text-card-foreground font-sans text-sm">
        {listNames(contributorNames)}
      </p>
    </div>
  )
}
