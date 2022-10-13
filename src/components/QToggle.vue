<template>
  <div>
    <input
      id="switch"
      type="checkbox"
      :checked="value"
      class="checkbox"
      :value="value"
      @input="toggle">
    <label
      for="switch"
      class="toggle"> {{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'QToggle',
  props: {
    label: {
      required: false,
      type: String,
      default: '',
    },
    value: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {

    };
  },
  methods: {
    toggle() {
      if (this.value) {
        this.$emit('input', false);
        return;
      }
      this.$emit('input', true);
    },
  },

};
</script>

<style scoped>
.toggle {
    position: relative;
    display: inline-block;
    width: 35px;
    height: 15px;
    background-color: #ccc;
    border-radius: 30px;
}

.toggle:after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #eee;
    left: 1px;
    transition: all 0.3s;
    cursor: pointer;
}

label {
    margin-bottom: 0;
}

p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}

.checkbox:checked+.toggle::after {
    left: 20px;
}

.checkbox:checked+.toggle {
    background-color: #65e980;
}

.checkbox {
    display: none;
}
</style>
