<script setup>
const onClick = () => {
  alert('Click')
}
</script>

<template>
  <ComponentPage name="ClickButton">
    <div class="grid">
      <div>
        <ClickButton
          href="https://domain.com"
          :pad="true"
        >
          Pad
        </ClickButton>
      </div>

      <div>
        <ClickButton
          href="https://domain.com"
          :external="true"
        >
          External
        </ClickButton>
      </div>

      <div>
        <ClickButton @click="onClick">
          Default
        </ClickButton>
      </div>

      <div>
        <ClickButton
          :block="true"
          @click="onClick"
        >
          Block
        </ClickButton>
      </div>

      <div>
        <ClickButton
          :block="true"
          :pad="true"
          @click="onClick"
        >
          Block pad
        </ClickButton>
      </div>

      <div>
        <ClickButton
          :block="true"
          :pad="true"
          :center="true"
          @click="onClick"
        >
          Block pad center
        </ClickButton>
      </div>

      <div>
        <ClickButton
          :block="true"
          :pad="true"
          :center="true"
          href="https://foo.bar"
        >
          Block pad center href
        </ClickButton>
      </div>

      <!-- Loading -->

      <div>
        <ClickButton
          :block="true"
          :loading="true"
          @click="onClick"
        >
          Block loading
        </ClickButton>
      </div>

      <div>
        <ClickButton
          href="/"
          @click.prevent="onClick"
        >
          <code>href</code> with binding
        </ClickButton>
      </div>

      <div>
        <ClickButton
          to="/"
          @click="onClick"
        >
          <code>to</code> with binding
        </ClickButton>
      </div>

      <div>
        <ClickButton
          :loading="true"
          @click="onClick"
        >
          Loading
        </ClickButton>
      </div>

      <div>
        <ClickButton
          :disabled="true"
          @click="onClick"
        >
          Disabled
        </ClickButton>
      </div>

      <div>
        <ClickButton
          :disabled="true"
          :loading="true"
          @click="onClick"
        >
          Disabled loading
        </ClickButton>
      </div>

      <div>
        <ClickButton
          icon-left="cross"
          @click="onClick"
        >
          Icon left
        </ClickButton>
      </div>

      <div>
        <ClickButton
          icon-right="cross"
          @click="onClick"
        >
          Icon right
        </ClickButton>
      </div>

      <div>
        <ClickButton
          icon-left="cross"
          icon-right="cross"
          @click="onClick"
        >
          Two icons
        </ClickButton>
      </div>
    </div>
  </ComponentPage>
</template>

<style lang="scss" scoped>

.c-click-button {
  background-color: rgba(0, 0, 0, 0.2);
}

</style>
