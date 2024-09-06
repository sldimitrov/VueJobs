<script setup>
import jsonData from '@/jobs.json'
import { ref} from 'vue'

const jobs = ref(jsonData)
</script>

<template>
  <div v-for="job in jobs" :key="job.id">
    {{ job.title }}
  </div>
</template>