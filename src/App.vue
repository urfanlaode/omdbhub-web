<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AuthLayout from './shared/layout/AuthLayout.vue'
import MainLayout from './shared/layout/MainLayout.vue'

const route = useRoute()

const layout = computed(() => {
  switch (route.meta.layout) {
    case 'auth':
      return AuthLayout
    case 'main':
      return MainLayout
    default:
      return MainLayout
  }
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
