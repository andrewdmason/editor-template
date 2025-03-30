import { cn } from '@/lib/utils';
import { ScriptPane } from './ScriptPane';
import { SceneEditor } from './SceneEditor';
import { Timeline } from './Timeline';
import { Sidebar } from './Sidebar';

interface EditorProps {
  className?: string;
}

export function Editor({ className }: EditorProps) {
  return (
    <div className={cn('h-screen flex flex-col', className)}>
      {/* Top Navigation */}
      <div className="h-14 border-b flex items-center px-4 justify-between bg-background">
        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-1">
            <span className="text-sm">Working with scenes</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm">Scenes and the timeline</span>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
            Export
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Upper Section with Script and Scene Editor */}
        <div className="flex-1 flex min-h-0">
          {/* Left Sidebar */}
          <div className="w-12 border-r bg-background">
            {/* Navigation icons */}
          </div>

          {/* Script and Scene Editor */}
          <div className="flex-1 flex min-w-0">
            <ScriptPane />
            <div className="flex-1 min-w-0">
              <SceneEditor />
            </div>
            <Sidebar />
          </div>
        </div>

        {/* Timeline - Full Width */}
        <Timeline />
      </div>
    </div>
  );
} 