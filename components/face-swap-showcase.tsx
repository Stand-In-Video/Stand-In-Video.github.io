// components/face-swap-showcase.tsx
"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { FaceSwapShowcaseItem } from '@/data/tasks';
import { Video } from 'lucide-react';

interface FaceSwapShowcaseProps {
  showcase: FaceSwapShowcaseItem;
}

export const FaceSwapShowcase = ({ showcase }: FaceSwapShowcaseProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeVideoSrc = selectedIndex === 0 
    ? showcase.sourceVideoSrc 
    : showcase.swaps[selectedIndex - 1].outputVideoSrc;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Left Column: Selector */}
      <div className="lg:col-span-1 p-4 bg-muted/50 rounded-lg flex flex-col space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Select an Identity</h4>
          <button
            onClick={() => setSelectedIndex(0)}
            className={cn(
              "w-full flex items-center space-x-3 text-left p-3 rounded-md transition-colors",
              selectedIndex === 0
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            )}
          >
            <Video size={20} />
            <span>Original</span>
          </button>
        </div>
        
        {/* === 修改点在这里：添加了 items-center 来实现水平居中 === */}
        <div className="flex flex-col items-center gap-2">
          {showcase.swaps.map((swap, index) => (
            <button
              key={swap.portraitSrc}
              onClick={() => setSelectedIndex(index + 1)}
              className={cn(
                "w-24 h-24 aspect-square rounded-md overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
                selectedIndex === index + 1
                  ? "border-primary shadow-lg scale-105"
                  : "border-transparent hover:border-primary/50"
              )}
            >
              <img
                src={swap.portraitSrc}
                alt={`Identity ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right Column: Single video player */}
      <div className="lg:col-span-4 aspect-video rounded-lg border bg-muted overflow-hidden">
        <video
          key={activeVideoSrc}
          src={activeVideoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};