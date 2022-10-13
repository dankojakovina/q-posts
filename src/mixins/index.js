const Page = (pageName) => ({
	data() {
		return { pageName };
	},
	methods: {
		onMount() {
			if(this.$route.meta.preventScrolling) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}
		},
	},
	mounted() {
		this.onMount();
	},
});

export { Page };
