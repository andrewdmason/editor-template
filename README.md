This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Descript Editor Template

## Information Architecture & Nomenclature

The editor is organized into several key sections, each with specific functionality:

### Main Layout Components

- **Editor**: The root component that contains all editor functionality
  - **ScriptPane**: Left panel (600px width) containing the script and transcription
  - **SceneEditor**: Right panel containing the video preview and editing controls
  - **Timeline**: Bottom panel spanning full width for video timeline manipulation

### Timeline Components

- **Timeline Controls**: Top toolbar of the timeline containing:
  - **Marker Selection**: Bookmark icon for managing timeline markers
  - **Playback Controls**: Speed selector and play/pause button
  - **Time Display**: Current position and total duration
  - **Record/Split**: Centered controls for recording and splitting clips
  - **Timeline Tools**: Right-aligned controls for zoom and settings

### Scene Editor Components

- **Preview Area**: Main video preview with frame display
- **Toolbar**: Control bar below preview with:
  - **Layout**: Scene layout options
  - **Background**: Background settings
  - **Transform**: Transform controls

### Script Pane Components

- **Script Area**: Main editing area for text
- **Scene List**: Visual representation of scenes
- **Thumbnails**: Video frame previews for each scene

## Component Hierarchy

```
Editor
├── ScriptPane
│   ├── SceneList
│   └── ScriptArea
├── SceneEditor
│   ├── Preview
│   └── Toolbar
└── Timeline
    ├── Controls
    └── TimelineContent
```

This structure maintains a clear separation of concerns while ensuring all components can communicate effectively through their parent Editor component.
