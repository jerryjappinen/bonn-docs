<script setup>
const route = useRoute()
const componentName = route.params.componentName
const sampleImportString = componentName ? `import ${componentName} from 'bonn/components/${componentName}'` : undefined

// FIXME: this is ridiculous, but required by resolveComponent to work as expected with dynamic imports
const prefix = 'ComponentDoc'
const resolvedComponents = {
  'AppStoreBadge': resolveComponent(prefix + 'AppStoreBadge'),
  'Buttons': resolveComponent(prefix + 'Buttons'),
  'ClickButton': resolveComponent(prefix + 'ClickButton'),
  'DateInterval': resolveComponent(prefix + 'DateInterval'),
  'Dropdown': resolveComponent(prefix + 'Dropdown'),
  'Dump': resolveComponent(prefix + 'Dump'),
  'Ellipsis': resolveComponent(prefix + 'Ellipsis'),
  'EmailLink': resolveComponent(prefix + 'EmailLink'),
  'ExternalLink': resolveComponent(prefix + 'ExternalLink'),
  'GooglePlayBadge': resolveComponent(prefix + 'GooglePlayBadge'),
  'LiveDuration': resolveComponent(prefix + 'LiveDuration'),
  'MobileWebAppBadge': resolveComponent(prefix + 'MobileWebAppBadge'),
  'Slider': resolveComponent(prefix + 'Slider'),
  'Spinner': resolveComponent(prefix + 'Spinner'),
  'Switch': resolveComponent(prefix + 'Switch'),
  'Textfield': resolveComponent(prefix + 'Textfield'),
  'Tweet': resolveComponent(prefix + 'Tweet'),
  'WebAppBadge': resolveComponent('ComponentDocWebAppBadge')
}

if (!resolvedComponents[componentName]) {
  navigateTo('../')
}

// definePageMeta({
//   middleware (to) {
//     if (!to.params.componentName) {
//       return navigateTo('components/' + componentPages[0])
//     }
//   }
// })

// useHead({
//   title: componentName,
//   meta: {
//     description: sampleImportString
//   }
// })
</script>

<template>
  <div>

    <h2><code>{{ componentName }}</code></h2>

    <pre><code>{{ sampleImportString }}</code></pre>

    <h3>Example</h3>

    <!-- <NuxtPage /> -->

    <component :is="resolvedComponents[componentName]" />

  </div>
</template>
