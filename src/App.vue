<script setup lang="ts">
import { edenTreaty } from '@elysiajs/eden'
import type { App } from '../back/index'
const api = edenTreaty<App>('http://localhost:3000/api')

const firstCall = async () => {
  // http://localhost:3000/api/company
  try {
    // typescript error on get
    const response = await api.company.get()
    console.log('call 1', response)
  } catch (error) {
    console.log(error)
  }
}
const secondCall = async () => {
  try {
    // http://localhost:3000/api/company/index
    // no typescript error but 404 
    const response = await api.company.index.get()
    console.log('call2 ',response)
  } catch (error) {
    console.log(error)
  }
}
firstCall()
secondCall()
</script>

<template>
  <div>
    see network tab
  </div>
</template>
