# React Gamepad Debug UI

Debug UI components (e.g. `<DebugGamepad />`) for displaying gamepad input in your React apps.

Uses [joymap](https://github.com/diegodoumecq/joymap) under the hood to get gamepad input from browser Gamepad API.

## Development

There's a Vite website under `packages/demo` to be a playground to develop and test the library.

1. Fork/clone this repo: `https://github.com/whoisryosuke/react-gamepad-debug-ui.git`
1. Install dependencies: `yarn`
1. Build the library: `yarn build`
1. Start the playground: `yarn dev`

## Building package

1. `yarn build`

This runs the `parcel` process for one package/module. Check the `package.json` and `packages/gamepad-debug-ui/package.json` for more info.

## Release to Github/NPM

This is setup with a Semantic Release workflow based off Conventional Commits. And it's automatically released to Github and NPM using Github Actions.

This repo should automatically release to Github and tag the release when you commit to `main`, `alpha`, or `beta` branches (change these in `package.json`).

You can learn more about the CI/CD workflow in the Github Actions folder.

### Setting up NPM

To setup NPM releases, you need to add your token to Github as an ENV var.

1. Make sure you've created a new repo for your package (not a fork).
1. Go to your repo settings.
1. Go to Environments
1. Create a new one called `production`
1. Add a `NPM_TOKEN` ENV with your token from NPM.

### Lint and Code Formatting

If you use VSCode, Prettier should run each time you save a compatible file.

> If you don't like this, go to `.vscode\settings.json` and disable there (or you can do it via your own VSCode settings).

`yarn lint` runs ESLint and Prettier, automatically formats files and rewrites them. Make sure to stage your code before running just in case.
