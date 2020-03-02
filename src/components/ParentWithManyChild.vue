<template>
  <div>
    <Child v-for="id in [1, 2, 3]" :key="id" />
  </div>
</template>

<script>
  import Child from './Child';

  export default {
    name: "ParentWithManyChild",
    components: {
      Child
    }
  }
</script>

<style scoped>

</style>
