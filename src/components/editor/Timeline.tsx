import { cn } from '@/lib/utils';

interface TimelineProps {
  className?: string;
}

export function Timeline({ className }: TimelineProps) {
  return (
    <div className="h-48 border-t bg-background">
      {/* Timeline controls */}
      <div className="flex items-center justify-between px-4 h-10 border-b">
        {/* Left side controls */}
        <div className="flex items-center gap-2">
          {/* Marker selection */}
          <button className="p-1.5 hover:bg-accent rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
            </svg>
          </button>

          {/* Playback speed */}
          <button className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-md text-sm">
            <span>1×</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>

          {/* Playback controls */}
          <button className="p-1.5 hover:bg-accent rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </button>

          {/* Current time */}
          <div className="flex items-center gap-1 px-2">
            <span className="text-sm font-medium">0:00:00.0</span>
            <span className="text-sm text-muted-foreground">/</span>
            <span className="text-sm text-muted-foreground">0:00:00.0</span>
          </div>
        </div>

        {/* Center controls */}
        <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          {/* Record button */}
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 text-red-500 hover:bg-accent rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-3.5 h-3.5">
              <circle cx="12" cy="12" r="6"/>
            </svg>
            <span className="text-sm text-foreground">Record</span>
          </button>

          {/* Split button */}
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 hover:bg-accent rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <circle cx="6" cy="6" r="3"/>
              <circle cx="6" cy="18" r="3"/>
              <line x1="20" y1="4" x2="8.12" y2="15.88"/>
              <line x1="14.47" y1="14.48" x2="20" y2="20"/>
              <line x1="8.12" y1="8.12" x2="12" y2="12"/>
            </svg>
            <span className="text-sm">Split</span>
          </button>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Expand timeline */}
          <button className="p-1.5 hover:bg-accent rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="m7 15 5 5 5-5"/>
              <path d="m7 9 5-5 5 5"/>
            </svg>
          </button>

          {/* Zoom controls */}
          <div className="flex items-center border rounded-md">
            <button className="p-1.5 hover:bg-accent border-r">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14"/>
              </svg>
            </button>
            <span className="px-3 py-1 text-sm">100%</span>
            <button className="p-1.5 hover:bg-accent border-l">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14"/>
                <path d="M12 5v14"/>
              </svg>
            </button>
          </div>

          {/* Timeline settings */}
          <button className="p-1.5 hover:bg-accent rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Timeline content */}
      <div className="flex-1 overflow-hidden">
        <div className="text-sm text-muted-foreground p-4">Timeline</div>
      </div>
    </div>
  );
} 