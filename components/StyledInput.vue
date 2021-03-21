<template>
  <div>
    <input :type="type" v-model="value" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
    props: ['type','placeholder'],

    data() {
        return {
            value: ''
        }
    },

    watch: {
        value(val) {
            this.$emit('valueChange',val)
        }
    }
}
</script>

<style scoped>
input {
    background-color: rgb(195, 194, 194);
    color: black;
    border: none;
    width: 22rem;
    height: 3rem;
    outline: none;
    font-size: 1.2rem;
    padding-left: 1rem;
}

</style>