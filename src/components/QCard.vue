<template>
  <div
    class="card"
    :style="{ 'padding': getPadding }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'QCard',
  props: {
    padding: {
      required: false,
      type: String,
      default: '15px 20px',
    },
    noPadding: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getPadding() {
      return this.noPadding ? 0 : this.padding;
    },
  },

};
</script>

<style scoped>
.card {
  background: var(--q-primary);
  box-shadow: 0px 1px 6px -3px rgb(0 0 0 / 75%);
  -webkit-box-shadow: 0px 1px 6px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 6px -3px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
}
</style>
