<script setup>
  import Hero from '@/components/Hero.vue';
  import HomeCards from '@/components/HomeCards.vue';
  import JobListings from '@/components/JobListings.vue';
  import ViewJobs from '@/components/ViewJobs.vue';
</script>

<template>
  <Hero />
  <HomeCards />
  <JobListings limit="3" />
  <ViewJobs />
</template>