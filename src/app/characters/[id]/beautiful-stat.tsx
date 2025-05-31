import React from 'react'
import Image from 'next/image'
import type { IStatCharacter } from '@/lib/interface'

interface Props {
    readonly stat?: IStatCharacter;
}

export function BeautifulStat({ stat }: Props) {
    return (
        <div className="space-y-3">
            <StatItem icon={<Image src="/stats/heart.png" alt="icon" width={20} height={20} className="w-5 h-5" />} label="Base HP" value={Math.floor(stat?.Life ?? 0).toString()} />
            <StatItem icon={<Image src="/stats/atk.png" alt="icon" width={20} height={20} className="w-5 h-5" />} label="Base ATK" value={Math.floor(stat?.Atk ?? 0).toString()} />
            <StatItem icon={<Image src="/stats/def.png" alt="icon" width={20} height={20} className="w-5 h-5" />} label="Base DEF" value={Math.floor(stat?.Def ?? 0).toString()} />
            <StatItem icon={<Image src="/stats/crit_rate.png" alt="icon" width={20} height={20} className="w-5 h-5" />} label="Base Crit. Rate" value="5.0%" />
            <StatItem icon={<Image src="/stats/crit_dmg.png" alt="icon" width={20} height={20} className="w-5 h-5" />} label="Base Crit. DMG" value="150.0%" />
            <StatItem icon={<Image src="/stats/energy_regen.png" alt="icon" width={20} height={20} className="w-5 h-5" />} label="Energy Regen" value="100.0%" />
        </div>
    )
}

function StatItem({ icon, label, value }: { readonly icon: React.ReactNode; readonly label: string; readonly value: string }) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                {icon}
                <span>{label}</span>
            </div>
            <span>{value}</span>
        </div>
    )
}
