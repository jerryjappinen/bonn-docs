<script setup>
const delay = 3000

const pings = ref([])

const ping = () => {
  pings.value.push(Math.random())
}

const demo = async () => {
  for (let i = 0; i < 10; i++) {
    ping()
    await wait(delay)
  }
}

onMounted(demo)
</script>

<template>
  <UtilPage
    name="wait"
    :args="['delay: 1000']"
    :async="true"
  >
    <p>
      Delay resolution of asynchronous code. This is mostly useful for debugging and testing.
    </p>

    <h3>Example</h3>

    <HighlightedPre
      :code="`const pings = []

function ping () {
  pings.push(Math.random())
}

function async demo () {
  for (let i = 0; i $lt; 10; i++) {
    ping()
    await wait(3000)
  }
}`"
    />

    <p>{{ pings }}</p>
  </UtilPage>
</template>
