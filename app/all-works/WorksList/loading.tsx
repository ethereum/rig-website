import { Skeleton, SkeletonLines } from "@/components/ui/skeleton"

const Loading = () => (
  <div className="space-y-4">
    <Skeleton className="w-32" />
    {Array.from({ length: 3 }).map((_, index) => (
      <div key={"fake-card-" + index} className="border-b py-6">
        <SkeletonLines noOfLines={4} />
      </div>
    ))}
  </div>
)

export default Loading
