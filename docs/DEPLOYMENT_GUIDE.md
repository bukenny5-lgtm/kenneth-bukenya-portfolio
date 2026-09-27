# Deployment guide

The app is deployed as a static Cloudflare Pages site through the GitHub-connected production workflow.

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | `Vite` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | Repository root |
| Production URL variable | `VITE_SITE_URL` |

`VITE_SITE_URL` should contain the final public origin, including the scheme and without a trailing path. The app falls back to the browser origin when it is not set.

The static robots policy and production sitemap are included. Optional follow-up work includes connecting a custom domain and submitting the sitemap to search engines.
