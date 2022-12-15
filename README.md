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

1. Install both [docker](https://docs.docker.com/get-docker/) and [docker compose](https://docs.docker.com/compose/install/)

2. Build docker image:

    ```docker compose build```

3. Run the container:

    ```docker compose up```

    You can also run the container in the background by adding the `-d` flag

4. To stop the container:

    ```docker compose stop```
