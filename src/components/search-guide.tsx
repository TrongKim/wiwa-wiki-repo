"use client";

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

export default function SearchGuide() {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Searching for:", query)
    }

    return (
        <div className="relative w-full mx-auto h-[200px] flex items-center">
            {/* Background image container */}
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-[20px] flex items-center">
                <div
                    className="w-full bg-cover bg-center h-[635.32px] mt-[100px]"
                    style={{
                        backgroundImage: "url('/search-bg.jpg')",
                    }}
                />
                <div className="bg-[#00000078] absolute z-1 top-0 left-0 w-full h-full"></div>
            </div>

            {/* Search form */}
            <form onSubmit={handleSearch} className="relative p-4 outline-0 w-full flex justify-center">
                <div className="relative flex items-center justify-center bg-black/90 rounded-full w-[60%] px-2 pr-4 max-[600px]:w-full">
                    <div className="text-gray-400">
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                        className="flex-1 py-3 pl-2 pr-1 text-white border-none focus:outline-none"
                    />
                </div>
            </form>
        </div>
    )
}
