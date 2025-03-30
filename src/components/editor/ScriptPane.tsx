import { cn } from '@/lib/utils';

interface ScriptBlockProps {
  thumbnail?: string;
  content: string;
  isHeading?: boolean;
}

function ScriptBlock({ thumbnail, content, isHeading }: ScriptBlockProps) {
  if (isHeading) {
    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold">{content}</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-start gap-2 py-2">
      {thumbnail && (
        <img 
          src={thumbnail} 
          alt="Scene thumbnail" 
          className="w-8 h-8 rounded-sm object-cover mt-1"
        />
      )}
      <p className="flex-1 text-base leading-relaxed">{content}</p>
    </div>
  );
}

export function ScriptPane() {
  return (
    <div className="w-[600px] border-r flex flex-col h-full bg-background">
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <ScriptBlock
            content="Scenes and the timeline"
            isHeading
          />
          
          <div>
            <h3 className="font-semibold mb-4">About Scenes</h3>
            
            <div className="space-y-4">
              <ScriptBlock
                thumbnail="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60"
                content="Scenes work like slides in a presentation. They allow you to divide your video project into discrete segments and create layouts based on what you want to show, like a screen recording, bulleted list, some b-roll with text overlays."
              />

              <h3 className="font-semibold mb-4">When to use scenes</h3>

              <ScriptBlock
                thumbnail="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60"
                content="Basically, you'll add a add scene anytime you want to change the visuals in your composition. In this video, I'll walk you through working with scenes in a video project."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 