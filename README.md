# Kanban Task Management

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Run With Docker

Build docker image:

```docker build -t kanban-task-management .```

You can choose any name to tag the image.

Run the container:

```docker run -it -p 3000:3000 kanban-task-management```

Stop the container:

1. Run ```docker ps``` to get the list of running containers
2. Get the container id attached to *kanban-task-management* image
3. Run ```docker stop {container id}```
