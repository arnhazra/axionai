"use client"
import { cn } from "@/shared/lib/utils"
import { LoaderCircle } from "lucide-react"

export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-background">
        <LoaderCircle
          width="48"
          height="48"
          className={cn("animate-spin", "text-white")}
          style={{ animation: "spin 1s linear infinite" }}
        />
      </div>
    </>
  )
}
