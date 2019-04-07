<template>
	<v-list-tile @click="">
		<v-list-tile-action>
		          <v-icon>grid_on</v-icon>
		 </v-list-tile-action>

		<v-list-tile-content>
					 <v-layout row justify-center>
					    <v-dialog v-model="dialog" persistent max-width="600px">
					      <template v-slot:activator="{ on }">
					        <v-list-tile-content>
					          <v-list-tile-title v-on="on">Добавить сетку</v-list-tile-title>
					        </v-list-tile-content>
					      </template>
					      <v-card>
					        <v-card-title>
					          <span class="headline">размер сетки ?</span>
					        </v-card-title>
					        <v-card-text>
					          <v-container grid-list-md>
					              	<v-layout>
										<v-card-text>
											<v-slider
												v-model="grids"
												:tick-labels="Numbers"
												:max="12"
												step="1"
												ticks="always"
												tick-size="2"
											></v-slider>
										</v-card-text>
								    </v-layout>
					          </v-container>
					        </v-card-text>
					        <v-card-actions>
					          <v-spacer></v-spacer>
					          <v-btn color="blue darken-1" flat @click="dialog = false">Отмена</v-btn>
					          <v-btn color="blue darken-1" flat @click="dialog = false; createGridCanvas(); show()">Создать</v-btn>
					        </v-card-actions>
					      </v-card>
					    </v-dialog>
					 </v-layout>
		</v-list-tile-content>
	</v-list-tile>
</template>

<script>
export default {

  name: 'grid',

  data () {
    return {
    	dialogWindowTitle: "Выберите размер сетки",
    	value: 0,
        grids: 0,
        Numbers: [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
        ],
        dialog: false,
        createGridCanvas(){
        	this.$store.commit('set_gridsArray', {amount: this.grids});
        },
        show(){
        	console.log(this.$store.getters.get_gridsArray);
        }
    }
  }
}
</script>

<style lang="css" scoped>
</style>