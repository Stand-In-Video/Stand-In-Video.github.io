// components/pose-guided-showcase.tsx
"use client";

import { useState } from 'react';
import type { PoseShowcaseItem } from '@/data/tasks';
import { cn } from '@/lib/utils';
import { Video } from 'lucide-react';

interface PoseGuidedShowcaseProps {
  showcase: PoseShowcaseItem;
}

export const PoseGuidedShowcase = ({ showcase }: PoseGuidedShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVideoSrc = activeIndex === 0
    ? showcase.poseVideoSrc
    : showcase.results[activeIndex - 1].outputVideoSrc;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left Column: Selector */}
      <div className="lg:col-span-1 p-4 bg-muted/50 rounded-lg flex flex-col space-y-4">
        
        <h4 className="font-semibold text-muted-foreground text-center">Select a First Frame</h4>

        <button
          onClick={() => setActiveIndex(0)}
          className={cn(
            "w-full flex items-center justify-center space-x-3 text-left p-3 rounded-md transition-colors",
            activeIndex === 0
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
          )}
        >
          <Video size={20} />
          <span className="font-semibold">Source Pose</span>
        </button>

        <div className="border-b border-muted-foreground/20"></div>

        <div className="flex flex-col space-y-3">
          {showcase.results.map((result, index) => (
            <button
              key={result.id}
              onClick={() => setActiveIndex(index + 1)}
              className={cn(
                "w-full rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
                activeIndex === index + 1
                  ? "border-primary shadow-lg scale-105"
                  : "border-transparent hover:border-primary/50"
              )}
            >
              <img
                src={result.firstFrameSrc}
                alt={`Result ${result.id}`}
                className="w-full h-auto object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-3 aspect-video rounded-lg border bg-muted overflow-hidden">
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