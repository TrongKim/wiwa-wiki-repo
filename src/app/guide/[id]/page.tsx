import { guides } from "@/data/guides"
import GuideDetail from "./guide-detail"

export default function Home() {
    const guide = guides;
    return (
        <main className="min-h-screen bg-[#0d0d0d] text-white">
            <GuideDetail guide={guide} />
        </main>
    )
}
