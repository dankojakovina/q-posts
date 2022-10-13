<template>
  <div>
    <div class="row">
      <div class="p-4 col-12 bg-white">
        <h2 class="title text-dark ln-height-25">
          {{ post.title }}
        </h2>

        <div class="row">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-8">
                <span class="mr-2 text-dark">{{ post.user.name }}</span>
                <span class="small text-light">10.JUL.2022</span>
              </div>
              <div class="col-4 text-right">
                <span class="pull-right">
                  <QSocial />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <img
              width="100%"
              height="300px"
              src="../assets/images/web-dev.jpg"
              alt="code">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 mt-4 text-dark">
            {{ post.body }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-8 pl-0 pr-0 mt-2">
        <QCommentInput @postComment="onPostComment($event)" />
      </div>
    </div>
  </div>
</template>

<script>
import QSocial from '../components/QSocial.vue';
import QCommentInput from '../components/QCommentInput.vue';
import { Page } from '../mixins/index.js';

export default {
  name: 'PostDetails',
  components: {
    QSocial,
    QCommentInput,

  },
  mixins: [Page('Post details')],
  data() {
    return {
      post: {
        user: {},
        id: 1,
        title: '',
        body: '',
      },
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      await fetch(`posts/${this.$route.params.id}`)
        .then((res) => res.json()).then((res) => {
          this.post = { ...res, user: {} };
        });
      fetch(`users/${this.post.userId}`)
        .then((res) => res.json()).then((res) => this.post.user = res);
    },
    onPostComment(comment) {
      fetch(`post/${this.postId}/comments/`, {
        method: 'post',
        body: {
          name: 'some name', email: 'danko.jakovina@gmail.com', body: comment,
        },
      })
        .then((res) => res.json()).then((res) => this.post.user = res);
    },

  },
};
</script>

<style scoped>
.bg-white {
  background: var(--q-primary) !important;
}

.text-light {
  color: var(--q-text-light) !important;
}

.text-dark {
  color: var(--q-text-dark) !important;
}
</style>
