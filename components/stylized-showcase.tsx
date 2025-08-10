// components/stylized-showcase.tsx
"use client"; // This component needs to be a client component for useState

import { useState } from 'react';
import type { StylizedShowcaseItem } from '@/data/tasks';
import { cn } from '@/lib/utils';
import { PlaySquare } from 'lucide-react';

interface StylizedShowcaseProps {
  showcase: StylizedShowcaseItem;
}

export const StylizedShowcase = ({ showcase }: StylizedShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideoSrc = showcase.styles[activeIndex].videoSrc;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column: Style Selector */}
      <div className="lg:col-span-1 p-4 bg-muted/50 rounded-lg">
        <h4 className="font-semibold mb-4">Styles</h4>
        <div className="flex flex-col space-y-2">
          {showcase.styles.map((style, index) => (
            <button
              key={style.name}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex items-center space-x-3 text-left p-3 rounded-md transition-colors",
                activeIndex === index
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <PlaySquare size={20} />
              <span>{style.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Column: Video Preview */}
      <div className="lg:col-span-2 group relative aspect-video overflow-hidden rounded-lg border bg-muted">
        <video
          key={activeVideoSrc} // Use key to force re-render on video change
          src={activeVideoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Identity Portrait Overlay */}
        <img
          src={showcase.portraitSrc}
          alt="Identity Portrait"
          className="absolute top-3 left-3 h-16 w-16 rounded-md border-2 border-white object-cover shadow-lg md:h-20 md:w-20"
        />

        {/* Prompt Overlay on Hover */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-sm text-white">
            <span className="font-semibold">Prompt: </span>
            {showcase.prompt}
          </p>
        </div>
      </div>
    </div>
  );
};