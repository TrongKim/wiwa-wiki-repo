export default function EchoDetailsSkeleton() {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      {/* Character Header Skeleton */}
      <div className="bg-[#1a2233] rounded-lg overflow-hidden border border-[#2d3748] p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Character Image Skeleton */}
          <div className="w-48 h-48 bg-[#2d3748] rounded-md flex-shrink-0"></div>

          {/* Character Info Skeleton */}
          <div className="flex-1 space-y-4">
            <div className="h-8 bg-[#2d3748] rounded w-3/4 mx-auto md:mx-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-[#2d3748] rounded p-3">
                <div className="h-4 bg-[#374151] rounded w-1/4 mb-2"></div>
                <div className="h-5 bg-[#374151] rounded w-1/2"></div>
              </div>
              <div className="bg-[#2d3748] rounded p-3">
                <div className="h-4 bg-[#374151] rounded w-1/4 mb-2"></div>
                <div className="h-5 bg-[#374151] rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Echo Skill Skeleton */}
      <div className="bg-[#1a2233] rounded-lg overflow-hidden border border-[#2d3748] p-6">
        <div className="h-6 bg-[#2d3748] rounded w-1/4 mb-4"></div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 flex items-start">
            <div className="w-12 h-12 bg-[#2d3748] rounded-full"></div>
          </div>

          <div className="flex-1">
            <div className="h-6 bg-[#2d3748] rounded w-1/2 mb-3"></div>

            <div className="space-y-4">
              <div className="h-4 bg-[#2d3748] rounded w-full"></div>
              <div className="h-4 bg-[#2d3748] rounded w-full"></div>
              <div className="h-4 bg-[#2d3748] rounded w-full"></div>
              <div className="h-4 bg-[#2d3748] rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Echo Sets Skeleton */}
      <div className="bg-[#1a2233] rounded-lg overflow-hidden border border-[#2d3748] p-6">
        <div className="h-6 bg-[#2d3748] rounded w-1/4 mb-4"></div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#2d3748] rounded-full"></div>
            </div>

            <div className="flex-1">
              <div className="h-6 bg-[#2d3748] rounded w-1/3 mb-3"></div>

              <div className="space-y-4">
                <div>
                  <div className="h-4 bg-[#2d3748] rounded w-1/6 mb-1"></div>
                  <div className="h-4 bg-[#2d3748] rounded w-1/3"></div>
                </div>

                <div>
                  <div className="h-4 bg-[#2d3748] rounded w-1/6 mb-1"></div>
                  <div className="h-4 bg-[#2d3748] rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Skeleton */}
      <div className="bg-[#1a2233] rounded-lg overflow-hidden border border-[#2d3748] p-6">
        <div className="h-6 bg-[#2d3748] rounded w-1/4 mb-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-[#2d3748]">
              <div className="h-5 bg-[#2d3748] rounded w-1/3"></div>
              <div className="h-5 bg-[#2d3748] rounded w-16"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
