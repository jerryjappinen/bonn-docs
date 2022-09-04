<script setup>
import useDevice from 'bonn/stores/device'

const device = useDevice()
</script>

<template>
  <PiniaStorePage name="device">

    <Dump :data="{
      cursor: device.cursor,
      network: device.network,
      platform: device.platform,
      time: device.time,
      viewport: device.viewport
    }" />

  </PiniaStorePage>
</template>
