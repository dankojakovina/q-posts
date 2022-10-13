import state from '../state/configuration.js';

const Page = (pageName) => ({
	head: {
		title() {
			return { inner: this.$t(`general.projectName`), complement: this.$t(`views.${this.pageName}.title`) };
		}
	},
	data() {
		return { pageName };
	},
	methods: {
		onMount() {
			this.$nextTick(() => {
				state.configuration.isPageLoading = false;
			});
			if(this.$route.meta.preventScrolling && !this.$route.meta.enableScrollOnSize ||
				this.$route.meta.preventScrolling && window.innerWidth > this.$route.meta.enableScrollOnSize
				) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}
			window.addEventListener('resize', this.onWindowResize);
		},
		onWindowResize() {
			if(this.$route.meta.enableScrollOnSize && window.innerWidth < this.$route.meta.enableScrollOnSize) {
				document.body.style.overflow = 'auto';
			} else {
				document.body.style.overflow = 'hidden';
			}
		},
		onDestroy() {
			window.removeEventListener('resize', this.onWindowResize);
		}
	},
	mounted() {
		this.onMount();
	},
	destroyed() {
		this.onDestroy()
	}
});

export { Page };
