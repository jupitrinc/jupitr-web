# jupitr

## Setup

create `.env.local` file with the following

```bash
NEXT_PUBLIC_SUPABASE_URL=https://nhnpdrhrvgbdnqvizexq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
pnpm  dev
```

## Production

Build the application for production:

```bash
pnpm  build
```

Locally preview production build:

```bash
pnpm  start
```

## Storybook
Run storybook locally:

```bash
pnpm  storybook
```

Build storybook:
```bash
pnpm  build-storybook
```

