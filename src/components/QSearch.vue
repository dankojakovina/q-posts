<template>
  <div>
    <input
      v-model="search"
      type="text"
      :placeholder="placeholder"
      @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'QSearch',
  props: {
    placeholder: {
      required: true,
      type: String,
      default: 'Search',
    },
  },
  data() {
    return {
      search: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('input', this.search);
    },
  },

};
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
