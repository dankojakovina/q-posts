<template>
  <div class="navbar position-fixed full-width">
    <QToggle
      v-model="mode"
      @input="toggle" />
    <div class="row justify-space-start">
      <div class="col-12">
        <div class="row align-items-center">
          <div class="col-3">
            <QSelect
              v-model="selectedLanguage"
              :options="['hr', 'en']"
              @change="onLanguageChange" />
          </div>
          <div class="col-9">
            <UserArea />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserArea from '../components/UserArea.vue';
import QToggle from '../components/QToggle';
import QSelect from '../components/QSelect';
import state from '../state/configuration';

export default {
  name: 'NavBar',
  components: {
    UserArea,
    QToggle,
    QSelect,
  },
  data() {
    return {
      mode: '',
      selectedLanguage: '',
      state,
    };
  },
  created() {
    this.onCreated();
  },
  methods: {
    onCreated() {
      this.mode = state.configuration.isDarkMode;
      this.selectedLanguage = state.configuration.selectedLanguage;
    },
    toggle(evt) {
      this.mode = evt;
      state.changeMode();
    },
    onLanguageChange(lang) {
      this.selectedLanguage = lang;
      state.changeLanguage(lang);
    },
  },

};
</script>

<style scoped>
.navbar {
  width: 100%;
  z-index: 1000;
  background: var(--q-primary);
  align-items: center;
  box-shadow: 0px 1px 6px -3px rgb(0 0 0 / 75%);
  -webkit-box-shadow: 0px 1px 6px -3px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 1px 6px -3px rgba(0,0,0,0.75);
}

</style>
