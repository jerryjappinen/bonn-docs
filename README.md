## Bonn docs

This repo is a Nuxt app. Run it like so:

```sh
nvm use
npm i
npm run dev
```

If you want to use local `bonn` source files for developing Bonn, add this to your `.env` file:

```sh
# .env
ALIAS_BONN = "../bonn"
```

## Todo

- [x] Replace `linna` usage
- [x] Replace import paths to internal paths
- [x] Make tests pass
- [x] Move docs readme to this repo
- [x] Use readme from this repo in docs
- [x] Update docs
- [ ] Make auto publish work with npm
- [x] `Icon` component
- [x] Add `persist` composable
- [x] Add `NuxtApp` component
- [ ] Get code samples from separate files.
- [ ] Add syntax highlighting
- [ ] Add `NuxtPage` component
- [ ] Add tests
- [ ] Make test watcher the dev command
- [ ] Set test command as default in codesandbox
- [ ] `modelValue` composable
- [ ] Make `Textfield` support custom content and not just icons

#### `useLazyAsyncData`

Add example page that uses `useLazyAsyncData`:

```js
const { data: users, pending, refresh, error } = await useLazyFetch(() => {
  return `users?page=${page.value}&take=6`, { baseURL: config.API_BASE_URL }
});
```
