<template>
	<div class="container">
		<div class="row">
			<div>
				<QPost @showComments="onShowComments" v-for="post of data.posts" :key="post.id" :post="post">
					<QCommentInput class="pt-2" :no-padding="true" @postComment="onPostComment(post.id, $event)" />
				</QPost>
			</div>
		</div>
	</div>
</template>

<script>
import QPost from '../components/QPost.vue';
import QCommentInput from '../components/QCommentInput.vue';
import { Page } from '../mixins/index.js';



export default {
  name: 'PostsPage',
  mixins: [Page('Posts')],
  components: {
    QPost,
    QCommentInput
  },
  data() {
    return {
      showComments: false,
      data: {
        posts: [
          {
            id: 1, title: 'Post 1', text: 'zwtzwe zwez ewztwe gwsfhf dfhdfhdfhdfhdfh dfhdfhbndfhdfnbd  bdfnd fndndf dfbd bdfdfb dfbdf bsddsbdfb dfbnd  bsdfb dfb dfb dbd fbdf hbdfbdfbdfb'
          },
          { id: 2, title: 'Post 2' },
          { id: 3, title: 'Post 3' }
        ],
        comments: [
          { id: 1, body: 'some comment', postId: 1, avatar: 'avatar-1.jpg' },
          { id: 2, body: 'some comment', postId: 1, avatar: 'avatar-2.jpg' },
          { id: 1, body: 'some comment', postId: 2, avatar: 'avatar-3.jpg' }
        ],
        profile: {
          name: 'typicode'
        }
      }
    }
  },
  created() {
    this.formatData();
  },  
  methods: {
    formatData() {
      this.data.posts = this.data.posts.map((post) => {
        const comments = this.data.comments.filter((comment) => {
          return post.id === comment.postId;
        });
        post.comments = comments;
        return post;
      });
    },
    onPostComment(postId, comment) {
      this.data.comments.push({ id: new Date().getTime(), body: comment, postId });
      this.formatData();
    },
    onShowComments() {
      this.showComments = true;
    }
  }
};
</script>

<style scoped>
.container {

}
</style>