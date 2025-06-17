<template>
  <div>
    <h2>Categorias</h2>
    <CategoryForm @added="fetchCategories" />
    <CategoryList :categories="categories" @updated="fetchCategories" />
  </div>
</template>

<script>
import CategoryForm from '../components/CategoryForm.vue';
import CategoryList from '../components/CategoryList.vue';

export default {
  components: { CategoryForm, CategoryList },
  data() {
    return { categories: [] };
  },
  methods: {
    async fetchCategories() {
      const res = await fetch('http://localhost:3001/api/categories');
      this.categories = await res.json();
    }
  },
  mounted() {
    this.fetchCategories();
  }
};
</script>
