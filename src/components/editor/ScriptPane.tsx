import Image from 'next/image';

export function ScriptPane() {
  return (
    <div className="w-[600px] border-r">
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Scenes and the timeline</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold mb-2">About Scenes</h2>
            <div className="flex items-start gap-3">
              <Image
                src="/editor/frame-placeholder.png"
                alt="Scene thumbnail"
                width={40}
                height={40}
                className="rounded"
              />
              <p className="text-sm text-muted-foreground">
                Scenes work like slides in a presentation. They allow you to divide your video project into discrete segments and create layouts based on what you want to show, like a screen recording, bulleted list, some b-roll with text overlays.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">When to use scenes</h2>
            <div className="flex items-start gap-3">
              <Image
                src="/editor/frame-placeholder.png"
                alt="Scene thumbnail"
                width={40}
                height={40}
                className="rounded"
              />
              <p className="text-sm text-muted-foreground">
                Basically, you&apos;ll add a add scene anytime you want to change the visuals in your composition. In this video, I&apos;ll walk you through working with scenes in a video project.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 