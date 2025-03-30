import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Editor() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 p-6">
        <Card className="relative aspect-video w-full overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="text-sm text-muted-foreground">
              Scenes work like slides in a presentation
            </div>
          </div>
        </Card>
      </div>
      <div className="border-t bg-muted/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <PlayIcon className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground">0:00:00.0</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="secondary" size="sm">
              Record
            </Button>
            <Button variant="ghost" size="sm">
              Split
            </Button>
            <Button variant="ghost" size="icon">
              <ExpandIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="shrink-0">
            <PlusIcon className="h-4 w-4" />
          </Button>
          <div className="relative flex-1">
            <div className="absolute inset-0 flex items-center">
              <div className="h-[2px] w-full bg-border" />
            </div>
            <div className="relative flex justify-between">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex h-4 items-center">
                  <div className="h-2 w-[2px] bg-border" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 items-center space-x-2">
            <Button variant="ghost" size="icon">
              <MinusIcon className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center text-sm">100%</span>
            <Button variant="ghost" size="icon">
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function PlusIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function MinusIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function ExpandIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15 3 6 6" />
      <path d="M11 21v-6a2 2 0 0 1 2-2h6" />
      <path d="m21 3-6 6" />
      <path d="M21 13v6a2 2 0 0 1-2 2h-6" />
      <path d="m3 15 6-6" />
      <path d="M3 3v6a2 2 0 0 0 2 2h6" />
      <path d="m9 21-6-6" />
      <path d="M13 3h6a2 2 0 0 1 2 2v6" />
    </svg>
  );
} 