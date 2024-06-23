<script setup>
const device = useDevice()
</script>

<template>
  <PiniaStorePage name="device">
    <p>
      <button @click="device.init">
        Init
      </button>

      <button @click="device.uninit">
        Uninit
      </button>
    </p>

    <h2>All modules</h2>

    <ClientOnly>
      <h3><code>device.cursor</code></h3>

      <Dump :data="device.cursor" />

      <h3><code>device.locale</code></h3>

      <Dump :data="device.locale" />

      <h3><code>device.network</code></h3>

      <Dump :data="device.network" />

      <h3><code>device.platform</code></h3>

      <Dump :data="device.platform" />

      <h3><code>device.time</code></h3>

      <Dump :data="device.time" />

      <h3><code>device.viewport</code></h3>

      <Dump :data="device.viewport" />
    </ClientOnly>
  </PiniaStorePage>
</template>
