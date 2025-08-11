// components/hero-section.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Book, Github, ToyBrick } from "lucide-react";

export const HeroSection = () => {
  return (
    // 1. 减小了垂直 padding (py-16)
    // 2. 移除了背景渐变
    <section className="flex flex-col items-center text-center py-16">
      <div className="flex items-center space-x-6 mb-6">
        <Image src="/logo.png" alt="Stand-In Logo" width={90} height={90} className="rounded-lg"/>
        <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter">Stand-In</h1>
      </div>
      
      {/* 3. 增大了 max-w 以防止换行 */}
      <p className="max-w-4xl mt-4 text-xl lg:text-2xl text-muted-foreground">
        A Lightweight and Plug-and-Play Identity Control for Video Generation
      </p>

      {/* 4. 微调了与下方元素的间距 */}
      <div className="mt-6 text-sm sm:text-base text-muted-foreground">
        <p>
          Bowen Xue*, Qixin Yan*, Wenjing Wang, Hao Liu, Chen Li
        </p>
        <p className="mt-1">
          WeChat Vision, Tencent Inc.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <a href="https://arxiv.org/abs/xxxx.xxxxx" target="_blank" rel="noopener noreferrer">
            <Book className="mr-2 h-5 w-5" /> Paper
          </a>
        </Button>
        <Button variant="secondary" asChild size="lg">
          <a href="https://github.com/WeChatCV/Stand-In" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" /> GitHub
          </a>
        </Button>
        <Button variant="secondary" asChild size="lg">
          <a href="https://huggingface.co/BowenXue/Stand-In" target="_blank" rel="noopener noreferrer">
            <ToyBrick className="mr-2 h-5 w-5" /> Models
          </a>
        </Button>
      </div>
    </section>
  );
};