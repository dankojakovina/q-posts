<template>
	<div>
		<div class="row">
			<div class="p-4 col-12 col-md-8  scrollable bg-white">
				<h2 class="title text-dark">{{ post.title }}</h2>

				<div class="row">
					<div class="col-sm-12">
						<div class="row">
							<div class="col-8">
								<span class="mr-2 text-dark">Ivan Horvat</span>
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
						<img width="100%" height="300px" src="../assets/images/web-dev.jpg" alt="code">
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12 mt-4 text-dark">
						Contrary to popular belief, Lorem Ipsum is not simply random text.
						It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
						Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
						the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
						cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
						from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
						Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
						during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
						from a line in section 1.10.32.

						The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
						Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
						in their exact original form, accompanied by English versions from the 1914 translation by H.
						Rackham.
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered
						alteration in some form, by injected humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
						anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
						Internet tend to repeat predefined chunks as necessary, making this the first true generator on
						the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
						sentence structures, to generate Lorem Ipsum which looks reasonable.
					</div>
				</div>
			</div>
			<transition name="slide-fade">
				<div v-if="commentsVisible" class="col-12 col-md-4 p-0 p-md-2">
					<div v-for="comment of post.comments" :key="comment.id" class="mb-2">
						<QComment :comment="comment" />
					</div>
					<QCommentInput @postComment="onPostComment($event)" />
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
import QSocial from '../components/QSocial.vue';
import QComment from '../components/QComment.vue';
import QCommentInput from '../components/QCommentInput.vue';
import { Page } from '../mixins/index.js';

export default {
	name: 'PostDetails',
	mixins: [Page('Post details')],
	components: {
		QSocial,
		QComment,
		QCommentInput

	},
	data() {
		return {
			commentsVisible: true,
			post: {
				id: 1, title: 'Step into web development',
				text: 'zwtzwe zwez ewztwe gwsfhf dfhdfhdfhdfhdfh dfhdfhbndfhdfnbd  bdfnd fndndf dfbd bdfdfb dfbdf bsddsbdfb dfbnd  bsdfb dfb dfb dbd fbdf hbdfbdfbdfb',
				comments: [{ id: 1, body: 'some comment', postId: 1, avatar: 'avatar-1.jpg' }]
			}
		}
	},
	methods: {
		showComments() {
			this.commentsVisible = !this.commentsVisible;
		},
		onPostComment(comment) {
			this.post.comments.push({ id: new Date().getTime(), body: comment, postId: 1});
		},
		
	}
};
</script>

<style scoped>
.scrollable {
	overflow: auto;
	height: calc(100vh - 105px)
}

.scrollable::-webkit-scrollbar {
  width: 3px;
}
 
.scrollable::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
}
 
.scrollable::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.bg-white {
  background: var(--q-primary)!important;
}

.text-light {
	color: var(--q-text-light)!important;
}

.text-dark {
	color: var(--q-text-dark)!important;
}

@media only screen and (max-width: 768px) {
  .scrollable {
	height: 100%;
  }
}


</style>