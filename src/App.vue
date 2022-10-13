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

#app {
  height: 100%;
}
html, body {
  background: var(--primary);
  height: 100%;
  font-family: 'Lato', sans-serif;
}

* {
  padding: 0;
  margin: 0;
}

/* global styles */
.ft-size-16 {
  font-size: 16px;
}

.ft-size-14 {
  font-size: 14px;
}

.date-editor {
  color: #000000de;
}

.text--dark {
  color: #222222;
}

.ln-height-16 {
  line-height:  16px;
}

.post-text-color {
  color: #888888;
}

.text--muted {
  color: #888888;
}

.pointer {
  cursor: pointer;
}

.ln-height-18 {
  line-height: 18px;
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
