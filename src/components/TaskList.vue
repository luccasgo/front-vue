<template>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      <strong>{{ task.title }}</strong> - {{ task.description }} - Categoria: {{ getCategoryName(task.categoryId) }}
      <button @click="deleteTask(task.id)">Excluir</button>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
  props: ['tasks', 'categories'],
  methods: {
    getCategoryName(categoryId) {
      const cat = this.categories.find(c => c.id === categoryId);
      return cat ? cat.name : 'Sem categoria';
    },
    async deleteTask(id) {
      try {
        await axios.delete(`http://localhost:3001/api/tasks/${id}`);
        this.$emit('updated'); // avisar o pai para atualizar a lista
      } catch (error) {
        console.error('Erro ao deletar task:', error);
      }
    }
  }
};
</script>
