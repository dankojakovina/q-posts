<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>

export default {
  name: 'App'

}
</script>

<style>
/* global styles */

html, body {
  font-family: 'Lato', sans-serif;
}

* {
  padding: 0;
  margin: 0;
}

.ft-size-14 {
  font-size: 14px;
}

.ft-size-16 {
  font-size: 16px;
}

.ln-height-16 {
  line-height:  16px;
}

.ln-height-18 {
  line-height: 18px;
}

.ln-height-25 {
  line-height:  25px;
}

.pointer {
  cursor: pointer;
}

.bg-white {
  background: white;
}

.underline {
  text-decoration: underline;
}

.underline-hover:hover {
  text-decoration: underline;
}
</style>
