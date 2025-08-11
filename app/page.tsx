// app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { SidebarNav } from "@/components/sidebar-nav";
import { TaskShowcase } from "@/components/task-showcase";
import { task1Data, task2Data, task3Data, task4Data, task5Data } from "@/data/tasks";

export default function Home() {
  return (
    // 使用 relative 定位作为导航栏的父容器
    <div className="relative">

      {/* 1. 这是我们的“浮动”导航栏 */}
      {/* 它只在 lg 以上的大屏幕显示，并且通过 fixed 定位 */}
      <aside className="hidden lg:block fixed top-32 left-12 w-48">
        <SidebarNav />
      </aside>

      {/* 2. 这是我们的主内容区，恢复了单栏居中布局 */}
      <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-8 md:p-12">
        <div className="w-full max-w-5xl">
          <HeroSection />

          <div className="my-16 md:my-24" />

          <div className="space-y-20">
            <section id="task-1">
              <TaskShowcase title="Identity-Preserving Text-to-Video Generation" data={task1Data} type="t2v" />
            </section>
            <section id="task-2">
              <TaskShowcase title="Non-Human Subjects-Preserving Video Generation" data={task2Data} type="t2v" />
            </section>
            <section id="task-3">
              <TaskShowcase title="Identity-Preserving Stylized Video Generation" data={task3Data} type="stylized" />
            </section>
            <section id="task-4">
              <TaskShowcase title="Video Face Swapping" data={task4Data} type="swap" />
            </section>
            <section id="task-5">
              <TaskShowcase title="Pose-Guided Video Generation" data={task5Data} type="pose" />
            </section>
          </div>
          
          <footer className="text-center mt-20 py-8 text-muted-foreground">
            <p>&copy; 2025 WeChat Vision, Tencent Inc. All Rights Reserved.</p>
          </footer>
        </div>
      </main>

    </div>
  );
}