import type { IFilterT, IFilterWeapon } from "@/lib/interface"
import { cn } from "@/lib/utils"

interface FilterButtonProps {
    readonly active: boolean
    readonly onClick: () => void
    readonly className?: string
    readonly children: React.ReactNode
    readonly baseColor?: string
    readonly activeColor?: string
    readonly fixedWidth?: string
    readonly fixedHeight?: string
}


export function FilterButton({
    active,
    onClick,
    className,
    children,
    baseColor = "#334d6c",
    activeColor = "#4d647e",
    fixedWidth,
    fixedHeight
}: FilterButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center cursor-pointer pointer-events-auto ${fixedWidth ? fixedWidth + ' justify-center' : ''} ${fixedHeight ? ' ' + fixedHeight + ' items-center' : ''}`,
                active
                    ? `bg-[${activeColor}] text-white bg-[#667a91]`
                    : `bg-[${baseColor}] text-white/90 hover:bg-[#4d647e]`,
                className,
            )}
        >
            {children}
        </button>
    )
}


export function FilterAllButton({
    active,
    onClick,
    className,
    children,
    baseColor = "#334d6c",
    activeColor = "#4d647e",
    fixedWidth,
    fixedHeight
}: FilterButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "px-3 py-[2px] rounded-lg text-sm font-medium transition-all duration-200 flex items-center cursor-pointer pointer-events-auto",
                active
                    ? `bg-[${activeColor}] text-white bg-[#667a91]`
                    : `bg-[${baseColor}] text-white/90 hover:bg-[#4d647e]`,
                className,
            )}
        >
            {children}
        </button>
    )
}


interface FilterSectionProps {
    readonly title: string
    readonly keyFilter: keyof IFilterT
    readonly children: React.ReactNode
    readonly handleFilterChange: (valueOne: keyof IFilterT, value: IFilterT[typeof valueOne][]) => void
    readonly filters: IFilterT
    readonly maxLength: number
    readonly notMb?: boolean
}

export function FilterSection({ title, keyFilter, children, filters, notMb, handleFilterChange, maxLength }: FilterSectionProps) {
    return (
        <div className={notMb ? '': "mb-6"}>
            <div className="flex items-center gap-[10px] mb-2">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <FilterAllButton
                    active={filters[keyFilter].length === maxLength || filters[keyFilter].length === 0}
                    onClick={() => handleFilterChange(keyFilter, [])}
                    baseColor="#334d6c"
                    activeColor="#4d647e"
                >
                    All
                </FilterAllButton>
            </div>
            <div className="flex flex-wrap gap-2">{children}</div>
        </div>
    )
}
