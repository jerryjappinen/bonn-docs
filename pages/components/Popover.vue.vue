<script setup>
const popoverOneIsOpen = ref(false)
const togglePopoverOne = () => {
  popoverOneIsOpen.value = !popoverOneIsOpen.value
}

const popoverTwoIsOpen = ref(false)
const togglePopoverTwo = () => {
  popoverTwoIsOpen.value = !popoverTwoIsOpen.value
}

</script>

<template>
  <ComponentPage name="Popover">
    <!-- Popover 1 -->
    <Relative>
      <StyledClickButton @click="togglePopoverOne">
        Open popover
      </StyledClickButton>
      <PopoverTransition>
        <Popover v-if="popoverOneIsOpen">
          <h3>Hello World!</h3>
          <p>I am a popover. You can put anything you like inside me.</p>
        </Popover>
      </PopoverTransition>
    </Relative>

    <!-- Popover 2 -->
    <Relative>
      <StyledClickButton @click="togglePopoverTwo">
        Open popover
      </StyledClickButton>
      <PopoverTransition>
        <Popover v-if="popoverTwoIsOpen">
          <h3>Hello World!</h3>
          <p>I am a popover. You can put anything you like inside me.</p>
        </Popover>
      </PopoverTransition>
    </Relative>
  </ComponentPage>
</template>

<style lang="scss" scoped>

.c-click-button {
  background-color: rgba(0, 0, 0, 0.2);
}

</style>
