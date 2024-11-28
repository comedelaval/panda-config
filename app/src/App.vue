<script setup lang="ts">
import { css } from '@acme/ui-lib/css';
import { Button } from 'web-component-lib';
</script>

<template>
  <div :class="css({ backgroundColor: 'brandPrimary' })">
    <h1 :class="css({ fontSize: '4xl', lineHeight: '1.1' })">
      Hello from Panda 🐼
    </h1>
    <h2 :class="css({ fontSize: '2xl', my: 4, color: 'yellow.400' })">
      shipping/with-build-info
    </h2>
    <Button label="label" visual="brand" size="xl" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
