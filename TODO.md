# Todo

- [x] Default plugings for markdown loader
- [x] Add `NuxtApp` component
- [x] Add syntax highlighting to docs
- [x] Add `pwa` and `manifest` support to Nuxt: https://github.com/kevinmarrec/nuxt-pwa-module
- [ ] Vue and Nuxt 3 support for `eslint`
- [ ] Add `NuxtPage` component
  - [ ] Might be tricky with `definePageMeta` being a macro
- [ ] Load code samples from separate files
- [ ] Fix `HighlightedPre` whitespace
- [ ] Make `Textfield` support custom content and not just icons
- [x] GraphQL language file support in `nuxt.config`
- [ ] Move to proper CSS variables
- [ ] Hygraph
  - [ ] Utilities
  - [ ] Rich text renderer component
  - [ ] Pinia store
  - [ ] Documentation
  - [ ] Examples (with GQL files and all that)
- [ ] Contentful Pinia store

### `useLazyAsyncData`

Add example page that uses `useLazyAsyncData`:

```js
const { data: users, pending, refresh, error } = await useLazyFetch(() => {
  return `users?page=${page.value}&take=6`, { baseURL: config.API_BASE_URL }
});
```