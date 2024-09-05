<script setup>
import { ref, onMounted } from 'vue';

const name = ref('John Doe')
const status = ref('inactive')
const tasks = ref(['Init task', 'Task 2', 'Task 3'])
const newTask = ref('')

const toggleStatus = () => {
  if (status.value === 'active') {
        status.value = 'pending';
      } else if (status.value === 'pending') {
        status.value = 'inactive';
      } else {
        status.value = 'active';
      }
}

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const popTask = () => {
  if (tasks.value.length > 1) {
    tasks.value.pop()
  } 

}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    tasks.value = data.map((task) => task.title)
  } catch (error) {
    console.log('Error fetching tasks', error)
  }
})
</script>

<template>
  <h1>Vue, {{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else=>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="task">Add task</label>
    <input type="text" id="task" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h3>List of Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
      </span>
    </li>
  </ul>
  <button @click="popTask">Pop the last task</button>
  <br />
  <button @click="toggleStatus">Change status</button>
</template>
