'use client'
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function WeaponHeader() {
    const [isOpenFilterPopup, setIsOpenFilterPopup] = useState<boolean>(false);

    const onClickChangeStateFilterPopup = (value: boolean) => {
        setIsOpenFilterPopup(value);
    }

    return (
        <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Archive / Weapons</h1>
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex">

                    <Button
                        onClick={() => onClickChangeStateFilterPopup(true)}
                        variant="outline"
                        className="rounded-l-none flex gap-2 bg-slate-800 border-slate-700 hover:bg-slate-700 hover:text-white cursor-pointer pointer-events-auto"
                    >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Filter
                    </Button>
                </div>
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search..."
                        className="pl-10 bg-slate-800 border-slate-700 focus-visible:ring-slate-500 h-10"
                    />
                </div>
            </div>
        </div>
    )
}
