<script setup>
import isDev from 'bonn/utils/isDev'
</script>

<template>
  <UtilPage name="isDev">
    <p>
      <code>isDev(): {{ isDev() }}</code>
    </p>
  </UtilPage>
</template>
