import { endPoints } from "@/shared/constants/api-endpoints"
import HTTPMethods from "@/shared/constants/http-methods"
import { Eye } from "lucide-react"
import useFetch from "@/shared/hooks/use-fetch"
import { UseQueryResult } from "@tanstack/react-query"
import { ActivityTrends } from "@/shared/types"

export default function ActivityLog({ keyword }: { keyword: string }) {
  const activityCount: UseQueryResult<ActivityTrends, any> = useFetch({
    queryKey: ["activity-search", keyword],
    queryUrl: endPoints.activityTrends,
    method: HTTPMethods.POST,
    requestBody: { searchKeyword: keyword },
  })

  return (
    <div className="flex gap-4">
      <div className="flex items-center text-zinc-100 text-sm">
        <Eye className="w-3 h-3 mr-1 text-lime-300" />
        {activityCount?.data?.totalUsage ?? "..."}
      </div>
    </div>
  )
}
