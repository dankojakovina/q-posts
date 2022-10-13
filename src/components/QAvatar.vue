<template>
	<div class="avatar" :class="[hasBorder ? 'avatar-border': '']" :style="{width: getAvatarSize, height: getAvatarSize }">
		<img :src="getImage">
	</div>
</template>

<script>
export default {
    name: 'QAvatar',
    props: {
        src: {
            default: 'avatar.png'
        },
        size: {
            default: 'normal'
        },
        hasBorder: {
            default: false
        }
    },
    data() {
        return {
            avatarSize: {
                small: '30px',
                normal: '40px',
                large: '50px'
            }
        }
    },
    computed: {
        getAvatarSize() {
            return this.avatarSize[this.size];
        },
        getImage() {
            return require(`@/assets/images/${this.src}`);
        }
    }

}
</script>

<style scoped>
.avatar {
    display: flex;
    justify-content: space-around;
    border-radius: 50%;
    align-items: center;
}

.avatar-border {
    border: 2px solid var(--q-secondary);
}

img {
    max-width: 80%;
    max-height: 80%;
    background-size: contain;
}
</style>