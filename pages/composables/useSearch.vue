<script setup>

// Search setup
const data = ref([
  {
    name: 'Foo',
    description: 'bar'
  },
  {
    name: 'foo',
    description: 'brr'
  },
  {
    name: 'bar',
    description: 'Something'
  }
])

const keys = ['name', 'description']
const isCaseSensitive = ref(false)

const s = useSearch({
  data,
  keys,
  isCaseSensitive
})

// Searching
const termRaw = ref('')
const term = computed(() => {
  return termRaw.value.trim()
})

const results = computed(() => {
  if (s && term.value && term.value.length) {
    return s.search(term.value, {
      limit: 20
    })
  }

  return []
})
</script>

<template>
  <ComposablePage
    name="search"
    deps="fuse.js"
  >
    <p>
      Easily create a searchable index of your custom dataset. Powered by <ExternalLink href="https://fusejs.io/">
        Fuse.js
      </ExternalLink>
    </p>

    <p>
      If you want a global search, use this as a Pinia store.
    </p>

    <h3>Demo</h3>

    <form class="c-page-use-search-form">
      <input
        v-model="termRaw"
        type="text"
        placeholder="Search..."
        class="c-page-use-search-form-input"
      >

      <label>
        <input v-model="isCaseSensitive" type="checkbox">
        isCaseSensitive
      </label>
    </form>

    <Dump :data="term && term.length ? results : data" />
  </ComposablePage>
</template>

<style lang="scss">

.c-page-use-search-form {
  label {
    @include inline-block;
  }
}

.c-page-use-search-form-input {
  border-width: 1px;
  padding: 0.4em;
  margin-right: 1em;
}

</style>
