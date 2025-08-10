// app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { TaskShowcase } from "@/components/task-showcase";
import { task1Data, task2Data, task3Data, task4Data, task5Data } from "@/data/tasks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-5xl">
        
        <HeroSection />

        <div className="my-16 md:my-24" />

        <div className="space-y-20">
          <TaskShowcase title="Identity-Preserving Text-to-Video Generation" data={task1Data} type="t2v" />
          <TaskShowcase title="Non-Human Subjects-Preserving Video Generation" data={task2Data} type="t2v" />
          <TaskShowcase title="Identity-Preserving Stylized Video Generation" data={task3Data} type="stylized" />
          <TaskShowcase title="Video Face Swapping" data={task4Data} type="swap" />
          <TaskShowcase title="Pose-Guided Video Generation" data={task5Data} type="pose" />
        </div>
        
        <footer className="text-center mt-20 py-8 text-muted-foreground">
          <p>&copy; 2025 WeChat Vision, Tencent Inc. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  );
}