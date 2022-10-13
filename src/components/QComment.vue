<template>
	<div class="bg-white" :style="{'padding': getPadding}">
		<div class="d-flex mb-2">
			<div class="d-flex">
				<QAvatar :src="comment.avatar" size="small" />
			</div>
			<div>
				<div class="ft-size-14 text-dark">Jure Jurić</div>
				<div class="ft-size-14 text-dark">
					{{ comment.body }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import QAvatar from './QAvatar.vue';

export default {
  name: 'QCommentInput',
  components: {
    QAvatar
  },
  props: {
    comment: {
      required: true,
      type: Object,
      default: () => ({})
    },
    padding: {
      required: false,
      type: String,
      default: '5px 10px'
    },
    noPadding: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  computed: {
    getPadding() {
      return this.noPadding ? 0 : this.padding;
    }
  },  
  methods: {

  }
}
</script>

<style scoped>
.bg-white {
  background: var(--q-primary)!important;
}

.text-dark {
	color: var(--q-text-dark)!important;
}
</style>
