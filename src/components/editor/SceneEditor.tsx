import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface SceneEditorProps {
  className?: string;
}

export function SceneEditor({ className }: SceneEditorProps) {
  return (
    <div className={cn("grid place-items-center min-h-full", className)}>
      <div className="w-full px-6">
        {/* Video frame */}
        <div className="aspect-video relative bg-background">
          <Image
            src="/editor/frame-placeholder.png"
            alt="Video frame"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <Button variant="outline" size="sm">
            Layout
          </Button>
          <Button variant="outline" size="sm">
            Background
          </Button>
          <Button variant="outline" size="sm">
            Transform
          </Button>
        </div>
      </div>
    </div>
  );
} 