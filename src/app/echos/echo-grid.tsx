'use client'
import Image from "next/image"
import type { IEcho, IEchoSet, IFilterT } from "@/lib/interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EchoHeader } from "./echo-header";
import { useEchoSetStore } from "@/lib/store";

interface Props {
  readonly echos: IEcho[];
  readonly echoSets: IEchoSet[];
}
export function EchoGrid({ echos, echoSets }: Props) {
  const [echoFilted, setEchoFilted] = useState<IEcho[]>(echos);
  const { echosets, setEchoSets } = useEchoSetStore();

  useEffect(() => {
    setEchoSets(echoSets);
  }, []);

  const onChangeFilter = (value: IFilterT & { name?: string }) => {
    const filtered = echos.filter((echo) => {

      const matchCost =
        value.echo.length === 0 ||
        value.echo.some((e) => e.code === echo.intensity);
      
      const matchSet =
        value.set.length === 0 ||
        value.set.some((e) => echo.set_ids.includes(e.code));

      const matchName =
        !value.name || echo.name.toLowerCase().includes(value.name.toLowerCase());

      return matchCost && matchName && matchSet;
    });

    setEchoFilted(filtered);
  };
  return (
    <>
      <EchoHeader onChangeFilter={onChangeFilter} />
      <div className="grid grid-cols-5 max-[260px]:grid-cols-1 max-[360px]:grid-cols-2 max-[690px]:grid-cols-3 max-[760px]:grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 gap-4">
        {echoFilted.map((echo) => (
          <Link
            href={'/echos/' + echo.id}
            key={echo.id}
            className="bg-slate-800/50 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] border border-[#374151]"
          >
            <div className="relative h-36 sm:h-56 md:h-36">
              {/* <div className="absolute top-2 left-2 z-10">
              <ElementIcon element={character.element} />
            </div> */}
              {/* <div className="absolute top-2 right-2 z-10">
              <echoIcon type={echo.type} />
            </div> */}
              <Image src={echo.icon || "/placeholder.svg"} alt={echo.name} fill className="object-contain" />
              <div className={`absolute bottom-0 left-0 right-0 p-4`}>
                <h3 className="text-center text-shadow-[#050505b8] text-[14px] text-shadow-lg font-bold truncate overflow-hidden text-wrap max-h-[48px]">{echo.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

