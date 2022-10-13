<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-12 col-md-4 pl-2">
        <QSearch
          :placeholder="$t('search_post')"
          @input="onSearch" />
      </div>
    </div>
    <div class="row">
      <div v-if="!loading">
        <QPost
          v-for="post of filteredList"
          :key="post.id"
          :post="post"
          @showComments="onShowComments">
          <QCommentInput
            class="pt-2"
            :no-padding="true"
            @postComment="onPostComment(post.id, $event)" />
        </QPost>
      </div>
    </div>
  </div>
</template>

<script>
import QPost from '../components/QPost.vue';
import QCommentInput from '../components/QCommentInput.vue';
import QSearch from '../components/QSearch.vue';
import { Page } from '../mixins/index.js';

export default {
  name: 'PostsPage',
  components: {
    QPost,
    QCommentInput,
    QSearch,
  },
  mixins: [Page('Posts')],
  data() {
    return {
      loading: false,
      showComments: false,
      comments: [],
      posts: [],
      urls: ['posts', 'comments', 'users'],
      searchProperties: ['name', 'username', 'website', 'email'],
      search: '',
    };
  },
  computed: {
    filteredList() {
      return this.posts.filter((post) => this.searchProperties.find((property) => post.user[property].toLowerCase().includes(this.search.toLowerCase())));
    },
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      this.loading = true;
      await Promise.all(
        this.urls.map((url) => fetch(url).then((res) => res.json())),
      ).then((res) => {
        this.formatData(...res);
      });
    },
    formatData(posts, comments, users) {
      this.posts = posts.map((post) => {
        const userComments = comments.filter((comment) => post.id === comment.postId);
        const user = users.find((u) => post.userId === u.id);
        post.comments = userComments;
        post.user = user;
        return post;
      });
      this.loading = false;
    },
    onPostComment(postId, comment) {
      fetch(`post/${postId}/comments/`, {
        method: 'post',
        body: {
          name: 'some name', email: 'danko.jakovina@gmail.com', body: comment,
        },
      })
        .then((res) => res.json()).then((res) => this.post.user = res);
    },
    onShowComments() {
      this.showComments = true;
    },
    onSearch(evt) {
      this.search = evt;
    },
  },
};
</script>

<style scoped>

</style>
