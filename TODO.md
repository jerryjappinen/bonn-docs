# Todo

- [x] Default plugings for markdown loader
- [x] Add `NuxtApp` component
- [ ] Add `NuxtPage` component
- [ ] Add syntax highlighting to docs
- [ ] Load code samples from separate files
- [ ] Make `Textfield` support custom content and not just icons
- [ ] GraphQL language file support in `nuxt.config`
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
