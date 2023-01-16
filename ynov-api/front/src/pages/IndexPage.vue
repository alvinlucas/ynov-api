<template>
  <q-page class="flex flex-center">
    <div style="width :400px; font-size: 20px;">
    <h1 style="font-weight: bold;margin-bottom: 20px;">Ynov Tasks Manager</h1>
    <p>Try out this new lightweight tasks manager for everydays tasks </p>
    <q-btn
    color="purple"
    label="Get started"/>
    </div>
    <div>
      <img
      alt="Logo"
      src="~assets/header-img.png"
      style="width: auto; height: auto"
    >
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
