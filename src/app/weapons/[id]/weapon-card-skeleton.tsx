export default function WeaponDetailsSkeleton() {
  return (
    <div className="bg-[#0d0d0d] rounded-lg overflow-hidden border border-[#374151] p-6 md:p-8 animate-pulse">
      <div className="flex justify-between items-center mb-6">
        <div className="h-8 bg-[#374151] rounded w-1/3"></div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-5 h-5 bg-[#374151] rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - Weapon Image */}
        <div className="flex justify-center items-center">
          <div className="h-80 w-40 bg-[#374151] rounded"></div>
        </div>

        {/* Right column - Stats */}
        <div className="md:col-span-2 space-y-6">
          {/* Level */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="h-6 bg-[#374151] rounded w-1/4"></div>
              <div className="h-7 bg-[#374151] rounded w-12"></div>
            </div>
            <div className="bg-[#1f293780] h-2 rounded-full overflow-hidden">
              <div className="bg-[#374151] h-full rounded-full w-3/4"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-3 bg-[#1f293780] rounded-lg p-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-[#374151]">
                <div className="h-5 bg-[#374151] rounded w-1/4"></div>
                <div className="h-5 bg-[#374151] rounded w-16"></div>
              </div>
            ))}
          </div>

          {/* Materials */}
          <div>
            <div className="h-6 bg-[#374151] rounded w-1/3 mb-3"></div>
            <div className="flex gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#374151] rounded-full mb-1"></div>
                  <div className="h-4 bg-[#374151] rounded w-8"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Swordsworn */}
          <div>
            <div className="h-6 bg-[#374151] rounded w-1/3 mb-2"></div>
            <div className="space-y-2">
              <div className="h-4 bg-[#374151] rounded w-full"></div>
              <div className="h-4 bg-[#374151] rounded w-full"></div>
              <div className="h-4 bg-[#374151] rounded w-3/4"></div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 bg-[#374151] rounded w-full"></div>
            <div className="h-4 bg-[#374151] rounded w-full"></div>
            <div className="h-4 bg-[#374151] rounded w-full"></div>
            <div className="h-4 bg-[#374151] rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
