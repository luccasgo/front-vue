<template>
  <div>
    <h2>Tarefas</h2>
    <TaskForm @taskSaved="fetchTasks" />
    <TaskList :tasks="tasks" :categories="categories" @updated="fetchTasks" />
  </div>
</template>

<script>
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';
import axios from 'axios';

export default {
  components: { TaskForm, TaskList },
  data() {
    return {
      tasks: [],
      categories: []
    };
  },
  methods: {
    async fetchTasks() {
      const res = await axios.get('http://localhost:3001/api/tasks');
      this.tasks = res.data;
    },
    async fetchCategories() {
      const res = await axios.get('http://localhost:3001/api/categories');
      this.categories = res.data;
    }
  },
  mounted() {
    this.fetchTasks();
    this.fetchCategories();
  }
};
</script>
