<template>
	<div :style="{'padding': getPadding}" class="d-flex justify-content-between align-items-center bg-white">
		<div class="d-flex flex-1">
			<QAvatar size="small" />
			<input v-model="comment" @keydown.enter="postComment" :placeholder="$t('write_comment')" type="text">
		</div>
		<div>
			<i @click="postComment" class="pointer fa-solid fa-paper-plane" />
		</div>
	</div>
</template>

<script>
import QAvatar from '../components/QAvatar.vue';

export default {
  name: 'QCommentInput',
  components: {
    QAvatar
  },
  props: {
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
      comment: ''
    }
  },
  computed: {
    getPadding() {
      return this.noPadding ? 0 : this.padding;
    }
  }, 
  methods: {
    postComment() {
      if(!this.comment) return;
      this.$emit('postComment', this.comment);
      this.comment = '';
    }
  }
}
</script>

<style scoped>
.bg-white {
  background: var(--q-primary)!important;
}

input {
  width: 100%;
  border: none;
  font-size: 12px;
  padding: 4px;
  background: transparent;
  outline: none;
  color: var(--q-text-dark)
}

.flex-1 {
  flex: 1;
}

.text-dark {
	color: var(--q-text-dark)!important;
}

i {
    color: var(--q-text-dark);
}

</style>
