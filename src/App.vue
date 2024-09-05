<script setup>
  import { ref } from 'vue';

  const name = ref('John Doe')
  const status = ref('inactive')
  const tasks = ref(['Task 1', 'Task 2', 'Task 3'])

  const toggleStatus = () => {
    if (status.value === 'active') {
          status.value = 'pending';
        } else if (status.value === 'pending') {
          status.value = 'inactive';
        } else {
          status.value = 'active';
        }
  }
</script>

<template>
  <h1>Vue, {{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else=>User is inactive</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" key="task">{{task}}</li>
  </ul>
  <br />
  <button @click="toggleStatus">Change status</button>
</template>
