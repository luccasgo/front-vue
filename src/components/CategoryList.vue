<template>
  <ul>
    <li v-for="category in categories" :key="category.id">
      {{ category.name }}
      <button @click="deleteCategory(category.id)">Remover</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['categories'],
  methods: {
    async deleteCategory(id) {
      await fetch(`http://localhost:3001/api/categories/${id}`, { method: 'DELETE' });
      this.$emit('updated');
    }
  }
};
</script>
