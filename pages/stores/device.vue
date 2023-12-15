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

    <Dump
      :data="{
        cursor: device.cursor,
        network: device.network,
        platform: device.platform,
        time: device.time,
        viewport: device.viewport
      }"
    />
  </PiniaStorePage>
</template>
