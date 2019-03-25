<template>
	<div ref="allElements">
		<h1>Books</h1>
		<p>About books this is text</p>
		<img src="../assets/logo.png">
		<button v-on:click="getAllElements">Получить список</button>
		{{elements}}
	</div>
</template>

<script>
export default {

  name: 'books',

  data () {
    return {
    	elements: null
    }
  },
  methods:{
  	getAllElements(){
  		console.log(this.$refs);
  	}
  }
}
</script>

<style lang="css" scoped>
</style>