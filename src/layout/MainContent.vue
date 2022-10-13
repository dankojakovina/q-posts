<template>
  <div class="main">
    <NavBar />
    <div class="progress-wrap">
      <QProgress
        v-if="progress !== 100"
        :progress="progress" />
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import QProgress from '../components/QProgress.vue';
import { eventBus } from '../api/eventBus';

export default {
  name: 'MainContent',
  components: {
    NavBar,
    QProgress,
  },
  data() {
    return {
      progress: 0,
      interval: null,
    };
  },
  created() {
    eventBus.$on('LOADING_START', this.onLoading);
    eventBus.$on('LOADING_END', this.onLoadingEnd);
  },
  destroyed() {
    eventBus.$off('LOADING_START', this.onLoading);
    eventBus.$off('LOADING_END', this.onLoadingEnd);
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  methods: {
    onLoading() {
      this.progress = 0;
      this.interval = setInterval(() => {
        if (this.progress < 75) {
          this.progress += 1;
        }
      }, 20);
    },
    onLoadingEnd() {
      if (this.interval) {
        this.progress = 100;
        clearInterval(this.interval);
      }
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  background: #f3f8f7;
}

.content {
  padding: 30px;
  margin-top: 50px;
  border-radius: 4px;
  width: 100%!important;
  align-self: center;
  min-height: calc(100vh - 52px);
}

.progress-wrap {
  position: relative;
  top: 60px;
}

@media only screen and (max-width: 1100px) {
  .content {
    width: 75%;
  }
}

@media only screen and (max-width: 768px) {
  .content {
    width: 80%;
  }
}

@media only screen and (max-width: 568px) {
  .content {
    width: 100%;
  }
}

</style>
