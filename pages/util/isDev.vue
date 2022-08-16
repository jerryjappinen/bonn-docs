<script setup>
import isDev from 'bonn/util/isDev'
</script>

<template>
  <UtilPage name="isDev">
    <p>
      <code>isDev(): {{ isDev() }}</code>
    </p>
  </UtilPage>
</template>
