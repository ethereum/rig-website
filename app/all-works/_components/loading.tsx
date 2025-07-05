import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => (
  <div className="flex flex-col items-center gap-12 md:gap-16">
    <div className="flex w-full gap-2 border-b py-4 max-md:flex-col md:gap-8 md:p-8">
      <Skeleton className="h-8 w-24" />
      <Skeleton className="h-8 w-1/2 md:w-32" />
    </div>
    <Skeleton className="w-48" />
  </div>
)

export default Loading
