// components/task-showcase.tsx
import { StylizedShowcase } from "./stylized-showcase";
import { FaceSwapShowcase } from "./face-swap-showcase";
import { PoseGuidedShowcase } from "./pose-guided-showcase"; // <-- IMPORT THE NEW COMPONENT

interface TaskShowcaseProps {
  title: string;
  data: any[];
  type: 't2v' | 'stylized' | 'swap' | 'pose';
}

export const TaskShowcase = ({ title, data, type }: TaskShowcaseProps) => {
  if (!data || data.length === 0) {
    return (
      <section>
        <h2 className="text-3xl font-bold tracking-tight mb-6">{title}</h2>
        <p className="text-muted-foreground">Examples coming soon.</p>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight mb-6">{title}</h2>
      
      {/* Logic to render different layouts based on task type */}
      
      {type === 't2v' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((example) => (
            <div key={example.id} className="group relative aspect-video overflow-hidden rounded-lg border bg-muted">
              <video key={example.outputVideoSrc} src={example.outputVideoSrc} autoPlay loop muted playsInline className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <img src={example.portraitSrc} alt="Identity Portrait" className="absolute top-3 left-3 h-16 w-16 rounded-md border-2 border-white object-cover shadow-lg md:h-20 md:w-20" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm text-white"><span className="font-semibold">Prompt: </span>{example.prompt}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {type === 'stylized' && (
        <div className="space-y-12">
          {data.map((showcaseItem) => (
            <StylizedShowcase key={showcaseItem.id} showcase={showcaseItem} />
          ))}
        </div>
      )}
      
      {type === 'swap' && (
        <div className="space-y-12">
          {data.map((showcaseItem) => (
            <FaceSwapShowcase key={showcaseItem.id} showcase={showcaseItem} />
          ))}
        </div>
      )}

      {type === 'pose' && (
        <div className="space-y-12">
          {data.map((showcaseItem) => (
            <PoseGuidedShowcase key={showcaseItem.id} showcase={showcaseItem} />
          ))}
        </div>
      )}
    </section>
  )
}