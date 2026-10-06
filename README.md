[![Netlify Status](https://api.netlify.com/api/v1/badges/af200f8e-b2fa-44da-9a2f-ea80827bf79b/deploy-status)](https://app.netlify.com/sites/parabola-center/deploys)

# Parabola Center

[Parabola Center website](https://parabola-center.netlify.app/).

Built with [Eleventy](https://www.11ty.dev/).

## Getting Started

Install dependencies with:

```sh
npm install
```

## Starting the development server

Start the development server with:

```sh
npm run serve
```

## Building the project

```sh
npm run build
```

## Starting Netlify CMS proxy server

```sh
npx netlify-cms-proxy-server
```

## Shipsite landing page

`shipsite/` holds the standalone Student-First AI Policy site: the landing page (`index.html`) and the web version of the summary and model policy (`policy.html`). It is deployed to [shipsite.sh](https://shipsite.sh/) (not part of the Eleventy build). The deploy script bundles every page with the images, fonts and PDFs it references from `src/`:

```sh
node shipsite/deploy.js --dry-run                 # list the files that would be sent
SHIPSITE_API_KEY=sk_live_... node shipsite/deploy.js --pin
```

Without `--pin`, shipsite sites expire after 24 hours. Set `SHIPSITE_API_URL` to override the API host.
