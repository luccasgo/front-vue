<template>
  <div>
    <nav>
      <router-link to="/">Tarefas</router-link> |
      <router-link to="/categories">Categorias</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  padding: 1rem;
  background-color: #eee;
}
router-link {
  margin: 0 1rem;
}
</style>
