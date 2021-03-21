<template>
  <div>
      <button @click="method">{{title}}</button>
  </div>
</template>

<script>
export default {
    props: ['title','method']
}
</script>

<style scoped>
button {
    width: 20rem;
    height: 4rem;
    border: 1px solid white;
    background-color: inherit;
    color: white;
    align-self: center;
    border-radius: 1.8rem;
    margin-top: 3rem;
    outline: none;
    cursor: pointer;
}
</style>