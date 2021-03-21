<template>
  <div>
      <button @click="method()">{{title}}</button>
  </div>
</template>

<script>
export default {
    props: ['title','method']
}
</script>

<style scoped>
button {
    width: 4rem;
    height: 4rem;
    border: 0.5px solid rgb(190, 190, 190);
    border-radius: 100%;
    text-align: center;
    line-height: 4rem;
    background-color: white;
    cursor: pointer;
    outline: none;
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0 0.5rem;
}
</style>