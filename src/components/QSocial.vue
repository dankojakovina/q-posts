<template>
  <div>
    <i
      v-for="(icon, index) of getIcons"
      :key="index"
      :class="[`fa-${iconType} ${icon} pointer`, index !== getIcons.length -1? 'mr-2' : '']"
      @click="onClick(icon)" />
  </div>
</template>

<script>
export default {
  name: 'QSocial',
  props: {
    iconType: {
      rquired: false,
      type: String,
      default: 'solid',
    },
    icons: {
      required: false,
      type: Array,
      default: () => [],
    },
    overwriteDefaults: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      defaultIcons: ['fa-heart', 'fa-share-nodes'],
    };
  },
  computed: {
    getIcons() {
      return this.overwriteDefaults ? this.icons : [...this.icons, ...this.defaultIcons];
    },
  },
  methods: {
    onClick(icon) {
      this.$emit('selected', icon);
    },
  },

};
</script>

<style scoped>
i {
    color: var(--q-text-dark);
}

</style>
