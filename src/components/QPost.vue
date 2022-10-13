<template>
	<div class="m-2">
		<QCard>
			<div class="row">
				<div class="col-sm-12 col-md-4">
					<div class="user">
						<div>
							<img width="100%" height="80%" src="../assets/images/web-dev.jpg" alt="code">
						</div>
					</div>
				</div>
				<div class="col-sm-12 col-md-8">
					<div class="row">
						<div class="col-sm-6 col-6">
							<div class="small font-italic date-color  mr-2"> 10. JUL 2022</div>
						</div>
						<div class="col-sm-6 col-6 text-right">
							<QSocial />
						</div>
					</div>

					<div class="row">
						<div class="col-sm-12">
							<div class="text-dark font-weight-400 ft-size-16 ln-height-16 mb-3">
								{{post.user.name}}
								<div class="small text-dark font-italic"> {{post.user.company.name}}</div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-12">
							<div @click="goToDetails" class="ln-height-16 mb-2 text-dark font-weight-bold text--dark ft-size-16 pointer underline-hover">{{ post.title }}</div>
						</div>
					</div>


					<div class="row">
						<div class="col-sm-12">
							<div class="post-text text-dark ln-height-18">{{ post.body }}</div>
						</div>
					</div>

					<div v-if="hasComments" class="row">
						<div class="col-sm-12">
							<div v-if="!replaysVisible" class="small pointer" @click="toggleReplays">
								<span class="text-light">{{ $t('see') }} <span v-if="isPlural">{{ $t('all') }}</span></span> <span class="text-dark font-weight-bold"> <span v-if="isPlural">{{ $t('comments') }}</span>
									<span v-else>{{ $t('comment') }}</span>( {{ post.comments.length }} ) </span>
							</div>
							<div v-else class="small pointer text-light" @click="toggleReplays">{{ $t('hide_comments') }}</div>
						</div>
					</div>
				</div>
			</div>
			<transition name="slide-fade">
				<div v-if="replaysVisible" class="mt-3">
					<div v-for="comment of post.comments" :key="comment.id">
						<QComment 
							:no-padding="true"
							:comment="comment"
						/>
					</div>
				</div>
			</transition>
			<slot />
		</QCard>
	</div>
</template>

<script>
import QSocial from './QSocial.vue';
import QCard from './QCard.vue';
import QComment from './QComment.vue';

export default {
	name: 'QPost',
	components: { QSocial, QCard, QComment },
	props: {
		post: {
			required: false,
			type: Object,
			default: () => ({
				comments: []
			})
		}
	},
	data() {
		return {
			replaysVisible: false
		}
	},
	computed: {
		hasComments() {
			return !!this.post.comments.length;
		},
		isPlural() {
			return this.post.comments.length > 1;
		}
	},
	methods: {
		toggleReplays() {
			//	this.$emit('showComments', this.post);
			this.replaysVisible = !this.replaysVisible;
		},
		goToDetails() {
			this.$router.push(`posts/${this.post.id}`);
		}
	}
}
</script>
<style scoped>
.date-color {
	color: var(--q-text-light);
}

.text-light {
	color: var(--q-text-light)!important;
}

.text-dark {
	color: var(--q-text-dark)!important;
}
</style>
