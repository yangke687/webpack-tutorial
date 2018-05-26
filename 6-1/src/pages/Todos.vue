<template>
  <div class="todos">
    <h1 class="todos-title">Todos</h1>
    <router-link to="/">Home</router-link>
    <router-link to="todos">Todos</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
  .todos {
    &-title{
      font-size: 28px;
      color: rebeccapurple;
      text-transform: uppercase;
    }
  }
</style>
