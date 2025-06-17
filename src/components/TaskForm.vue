<template>
  <form @submit.prevent="saveTask">
    <input v-model="task.title" placeholder="Título" required />
    <input v-model="task.description" placeholder="Descrição" required />

    <select v-model="task.categoryId" required>
      <option disabled value="">Selecione uma categoria</option>
      <option v-for="cat in categories" :key="cat.id" :value="cat.id">
        {{ cat.name }}
      </option>
    </select>

    <button type="submit">Salvar</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
        categoryId: ''
      },
      categories: []
    };
  },
  mounted() {
    axios.get('http://localhost:3001api/categories')
      .then(response => this.categories = response.data)
      .catch(err => console.error('Erro ao carregar categorias:', err));
  },
  methods: {
    async saveTask() {
      try {
        const response = await axios.post('http://localhost:3001/api/tasks', {
          title: this.task.title,
          description: this.task.description,
          categoryId: this.task.categoryId
        });

        console.log('Task salva:', response.data);

        this.task.title = '';
        this.task.description = '';
        this.task.categoryId = '';

        this.$emit('taskSaved', response.data);
        

      } catch (error) {
        console.error('Erro ao salvar task:', error);
      }
    }
  }
};
</script>
