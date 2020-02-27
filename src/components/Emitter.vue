<template>
  <div></div>
</template>

<script>
  export default {
    name: "Emitter",
    methods: {
      // when called, this will emit an event with the name 'myEvent' (that a parent
      // component can listen to with @myEvent) and arguments of 'name' and 'password'
      emitEvent() {
        this.$emit("myEvent", "name", "password");
      }
    }
  }
</script>

<style scoped>

</style>
