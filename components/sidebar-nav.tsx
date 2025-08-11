// components/sidebar-nav.tsx
"use client";

import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'task-1', title: 'Text-to-Video' },
  { id: 'task-2', title: 'Non-Human Subjects' },
  { id: 'task-3', title: 'Stylized Video' },
  { id: 'task-4', title: 'Face Swapping' },
  { id: 'task-5', title: 'Pose-Guided' },
];

export const SidebarNav = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          // 为了更精确，我们选择最接近视口顶部的section作为active
          // 这里我们简单处理，依然用第一个可见的
          setActiveSection(visibleSections[0].target.id);
        }
      },
      // rootMargin 的 -40% 意味着当一个 section 的中心区域进入视口中心时，它才被认为是 active
      { rootMargin: '-40% 0px -40% 0px' } 
    );

    const elements = sections.map(({ id }) => document.getElementById(id)).filter(Boolean);
    elements.forEach((el) => observer.current?.observe(el!));

    return () => observer.current?.disconnect();
  }, []);

  return (
    <nav>
      <h4 className="font-semibold mb-4 text-sm text-muted-foreground tracking-wider">TASKS</h4>
      <ul className="space-y-3">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  "flex items-center gap-3 group transition-transform duration-300 ease-in-out",
                  isActive ? "scale-110" : "hover:scale-105"
                )}
              >
                {/* 1. 动态指示器 */}
                <span
                  className={cn(
                    "w-1 rounded-full transition-all duration-300",
                    isActive ? "h-6 bg-primary" : "h-1 bg-muted-foreground/50 group-hover:bg-muted-foreground"
                  )}
                />
                
                {/* 2. 动态文本 */}
                <span
                  className={cn(
                    "transition-colors duration-300",
                    isActive
                      ? "font-bold text-primary"
                      : "text-muted-foreground group-hover:text-foreground"
                  )}
                >
                  {section.title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};