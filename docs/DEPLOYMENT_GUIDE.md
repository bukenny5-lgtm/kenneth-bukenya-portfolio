# Deployment guide

The app is prepared for a static Cloudflare Pages deployment. No deployment or external service connection has been performed.

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | `Vite` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | Repository root |
| Production URL variable | `VITE_SITE_URL` |

`VITE_SITE_URL` should contain the final public origin, including the scheme and without a trailing path. The app falls back to the browser origin when it is not set.

The static robots policy is included. A production sitemap still requires the final public origin before it can be added without inventing a URL.
