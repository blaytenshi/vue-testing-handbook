<template>
  <div>
    <span v-show="showSpan">
      Parent Component
    </span>
    <Child v-if="showChild"/>
  </div>
</template>

<script>
  import Child from './Child';

  export default {
    name: "Parent",
    components: {
      Child
    },
    data() {
      return {
        showSpan: false,
        showChild: false
      }
    }
  }
</script>

<style scoped>

</style>
