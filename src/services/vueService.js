export default {
  init(vueInstance, theme) {
    this.i18n = vueInstance.$i18n;
    theme.createTheme();
  },
};
