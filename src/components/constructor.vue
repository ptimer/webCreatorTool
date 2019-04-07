<template>
  <div>
	  <v-navigation-drawer
	    class="dark lighten-3"
	    dark
	    app
        prominent
        permanent
	  >
	    
		<v-toolbar flat>
	      <v-list>
	        <v-list-tile>
	          <v-list-tile-title class="title">
	            WebCreatorTool v0.1
	          </v-list-tile-title>
	        </v-list-tile>
	      </v-list>
	    </v-toolbar>
		
		<v-divider></v-divider>

		
		<!-- LIST --> 
		<v-list dense class="pt-0">
	      <grid></grid>
	      <v-divider></v-divider>
	      <AddText draggable="true"></AddText>
	      <v-divider></v-divider>
	      <AddImage draggable="true"></AddImage>
	    </v-list>
		<!-- LIST --> 

	  </v-navigation-drawer>

	  <component v-for="(grid, index) in gridsArray" v-bind:is="'gridCanvas'" :key="index" :amount="grid.amount"></component>
  </div>
</template>

<script>
import grid from './constructorComponents/grid'
import gridCanvas from './constructorComponents/gridCanvas'
import AddText from './constructorComponents/AddText'
import AddImage from './constructorComponents/AddImage'


export default {

  name: 'constructor',

  components: {
  	grid,
  	gridCanvas,
  	AddText,
  	AddImage
  },

  data () {
    return {
    	draggingItem: undefined
    }
  },
  methods:{

  },
  computed:{
  	gridsArray(){
  		return this.$store.getters.get_gridsArray;
  	}
  }
}
</script>

<style lang="css" scoped>
</style>