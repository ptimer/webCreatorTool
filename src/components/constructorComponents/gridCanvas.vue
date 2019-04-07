<template>
  <div>
   <v-container grid-list-md text-xs-center>
    <v-layout row wrap justify-center>

      <v-flex xs12 v-if="amount == 1">
        <v-card dark color="primary" v-on:dragenter="dragEnter(0, $event)" v-on:dragover="dragOver($event)" v-on:dragleave="dragLeave(0, $event)" v-on:drop="dragDrop(0, $event)">
          <v-card-text :class="enter1[0] ? 'px-0 hovered' : 'px-0 default'">{{enter1[0]}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="(i, idx) in 2" :key="`6${i}`" xs6 v-else-if="amount == 2">
        <v-card dark color="secondary"  
                v-on:dragenter="dragEnter(idx,$event)" 
                v-on:dragover="dragOver($event)" 
                v-on:dragleave="dragLeave(idx, $event)" 
                v-on:drop="dragDrop(idx, $event)"
        >
          <v-card-text :class="enter1[idx] ? 'px-0 hovered' : 'px-0 default'">
            
            <v-flex xs12 sm6 v-if="droppedText[idx]">
              <v-text-field
                v-model="first"
                label="Введите текст"
                solo
              ></v-text-field>
            </v-flex>


            <v-btn v-if="droppedImage[idx]"
              :loading="loading3"
              :disabled="loading3"
              color="blue-grey"
              class="white--text"
              @click="loader = 'loading3'"
            >
              Загрузить фотографию
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>

          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="(i, idx) in 3" :key="`4${i}`" xs4 v-else-if="amount == 3">
        <v-card dark color="secondary" v-on:dragenter="dragEnter(idx,$event)" v-on:dragover="dragOver($event)" v-on:dragleave="dragLeave(idx, $event)" v-on:drop="dragDrop(idx, $event)">
          <v-card-text :class="enter1[idx] ? 'px-0 hovered' : 'px-0 default'">
            
            <v-flex xs12 sm6 v-if="droppedText[idx]">
              <v-text-field
                v-model="first"
                label="Введите текст"
                solo
              ></v-text-field>
            </v-flex>

            <v-btn v-if="droppedImage[idx]"
              :loading="loading3"
              :disabled="loading3"
              color="blue-grey"
              class="white--text"
              @click="loader = 'loading3'"
            >
              Загрузить фотографию
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>

          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 4" :key="`3${i}`" xs3 v-else-if="amount == 4">
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 5" :key="`5${i}`" xs2 v-else-if="amount == 5">
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 6" :key="`6${i}`" xs2 v-else-if="amount == 6">
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 7" :key="`7${i}`" xs1 v-else-if="amount == 7">
        <v-card dark color="primary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 8" :key="`8${i}`" xs1 v-else-if="amount == 8">
        <v-card dark color="primary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 9" :key="`9${i}`" xs1 v-else-if="amount == 9">
        <v-card dark color="primary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 10" :key="`10${i}`" xs1 v-else-if="amount == 10">
        <v-card dark color="primary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 11" :key="`11${i}`" xs1 v-else-if="amount == 11">
        <v-card dark color="primary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 12" :key="`1${i}`" xs1 v-else-if="amount == 12">
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

  </div>
</template>

<script>
export default {

  name: 'gridCanvas',

  props: [
  	'amount'
  ],

  data () {
    return {
      enter1: [false, false, false],
      droppedText: [],
      droppedImage: [],
      texts: [],
      enter: false,
      loading3: false,
      first: null
    }
  },
  methods: {
    dragEnter: function(i, e) {
         e.preventDefault()
         this.enter = true;


         this.$set(this.enter1, i, true);
    },
    dragOver: function(e){
         e.preventDefault()
    },

    dragLeave: function(i, e){
        this.enter = false;

        this.$set(this.enter1, i, false);
    },

    dragDrop: function(i, e){
        this.enter = false;
        console.log(e)

        if(this.$store.getters.get_whatElementIsDragging == "addText"){
          this.$set(this.droppedText, i, true);
        }

        if(this.$store.getters.get_whatElementIsDragging == "addImage"){
          this.$set(this.droppedImage, i, true);
        }
        this.$set(this.enter1, i, false);
        
        
        
        // Adding textBlock

        this.$store.commit("set_textsComponentsAdded", 1)

        console.log("drop")
    }
  }
}

</script>

<style lang="css" scoped>
  .hold{
    border: solid #ccc 4px;
  }

  .hovered{
    background: #ECEFF1;
    border-style: dashed;
  }

  .invisible{
    display: none;
  }

  .default{
    background: #607D8B;
    border-style: none;
  }
</style>