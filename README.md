# TODO

- [ ] Upgrade to Tailwind v4 (requires removing @astrojs/tailwind and using @tailwindcss/vite instead)

# Specifying the node.js version

The node.js version is constrained in `package.json`. Absent a setting, Render will try (and occasionally fail!) to build with different node.js versions by default. Therefore, we set `engines` in `package.json`. See https://render.com/docs/node-version for more info.

Note that pinning the node.js version exactly is not possible since Render only supports some subset of versions, and this set is a moving target.

# Development

## Available Scripts

Run commands via nix-shell:

### `nix-shell -p nodejs --run "npm run dev"`

Starts the Astro dev server at [http://localhost:4321](http://localhost:4321). The page will reload on edits.

### `nix-shell -p nodejs --run "npm run build"`

Builds the site for production to the `dist` folder.

### `nix-shell -p nodejs --run "npm run preview"`

Previews the production build locally.
