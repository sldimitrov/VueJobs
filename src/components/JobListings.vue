<script setup>
import JobItem from './JobItem.vue';
import { reactive, defineProps, onMounted } from 'vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import axios from 'axios';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: true,
  }
})

const state = reactive({
  jobs: [],
  isLoading: true
})

onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs')
    state.jobs = response.data
  } catch (error) {
    console.error('Error fetching jobs', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div v-if="state.isLoading" class="text-center"><PulseLoader /></div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobItem v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>

</template>