<template>
	<div class="main">
		<NavBar />
		<div class="content">
			<router-view />
		</div>
	</div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  name: 'MainContent',
  components: {
    NavBar
  },
  data() {
    return {

    }
  }

}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  background: #f3f8f7;
}

.content {
  padding: 30px;
  margin-top: 50px;
  border-radius: 4px;
  width: 100%!important;
  align-self: center;
  min-height: calc(100vh - 52px);
}

@media only screen and (max-width: 1100px) {
  .content {
    width: 75%;
  }
}

@media only screen and (max-width: 768px) {
  .content {
    width: 80%;
  }
}

@media only screen and (max-width: 568px) {
  .content {
    width: 100%;
  }
}

</style>