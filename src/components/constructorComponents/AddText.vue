<template>
   <v-layout style="margin: 10px 0;" draggable="true" 
   		v-on:dragstart="dragstart($event)" 
   		v-on:dragend="dragend()" 
   		v-on:dragenter="dragenter()"
   		:class="drag ? 'hold' : 'default' "
   	>
    <v-flex xs12 sm6 offset-sm3>
      <v-card hover >
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Добавить текст</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {

  name: 'AddText',

  data () {
    return {
    	drag: false
    }
  },
  methods:{
  		dragstart: function(e) {
                this.drag = true;
                this.$store.commit("set_whatElementIsDragging", "addText");
            },
        dragend: function() {
                this.drag = false;
            },
        dragenter: function() {
                console.log("enter")
         	}
  }
}
</script>

<style lang="css" scoped>
	.hold{
		background: #E0F7FA;
		border: solid #2196F3 4px;
	}

	.default{
		border: none;
	}
</style>