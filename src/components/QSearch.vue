<template>
  <div>
    <input @input="onInput" type="text" v-model="search">
  </div>
</template>

<script>
export default {
    name: 'QSearch',
data() {
    return {
        search: ''
    }
},
methods: {
    onInput() {
        this.$emit('input', this.search);
    }
}

}
</script>

<style soped>
input {
    width: 100%;
    outline: none;
    border: 1px solid #424242;
    padding: 0 3px;
    border-radius: 3px;
}

</style>