<script setup lang="ts">
import Button from './components/Button.vue';
import { hstack } from '@acme/ui-lib/patterns';
</script>

<template>
  <div :data-theme="'Cafeyn'" :class="hstack({ gap: 4 })">
    <Button label="Label" size="xl" visual="brand" />
    <Button label="Label" size="xl" visual="dark" />
    <Button label="Label" size="xl" visual="text" />
  </div>
  <div :data-theme="'Blendle'" :class="hstack({ gap: 4 })">
    <Button label="Label" size="xl" visual="brand" />
    <Button label="Label" size="xl" visual="dark" />
    <Button label="Label" size="xl" visual="text" />
  </div>
  <div :data-theme="'Epresse'" :class="hstack({ gap: 4 })">
    <Button label="Label" size="xl" visual="brand" />
    <Button label="Label" size="xl" visual="dark" />
    <Button label="Label" size="xl" visual="text" />
  </div>
</template>
