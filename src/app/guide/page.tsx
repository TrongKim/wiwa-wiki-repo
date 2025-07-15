import React from 'react'
import { Dashboard } from '@/components/dashboard'
import type { Metadata } from 'next';

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

export default function GuidePage() {
  return (
    <div>
      <Dashboard />
    </div>
  )
}
