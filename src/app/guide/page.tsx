import React from 'react'
import { Dashboard } from '@/components/dashboard'
import type { Metadata } from 'next';
import { supabase } from '@/utils/supabase/server';

export const metadata: Metadata = {
  title: "Wuwabeacon - Guide nhân vật Wuthering Waves",
  description: "Hướng dẫn xây dựng, combo của các nhân vật trong Wuthering Waves",
  
  icons: {
    icon: "https://wuwabeacon.com/artboard.png",
  },
    openGraph: {
    title: "Wuwabeacon - Guide nhân vật Wuthering Waves",
    description: "Xây dựng và tối ưu nhân vật Wuthering Waves với hướng dẫn chi tiết.",
    url: "https://wuwabeacon.com",
    siteName: "Wuwabeacon",
    images: [
      {
        url: "https://wuwabeacon.com/banner-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Wuwabeacon - Hướng dẫn nhân vật",
      },
    ],
    type: "website",
  },
};

export async function generateStaticParams() {
  const { data: resonators } = await supabase.from('guide')
    .select('id');

  return (
    resonators?.map((r) => ({
      id: r.id.toString(),
    })) || []
  );
}

export default function GuidePage() {
  return (
    <div>
      <Dashboard />
    </div>
  )
}
