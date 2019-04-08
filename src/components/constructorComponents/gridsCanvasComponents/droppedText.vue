<template>
	<v-flex xs12 v-if="droppedText"
    >
              <v-text-field 
                v-model="first"
                label="Введите текст"
                solo 
              ></v-text-field>
              <p ref="interactElement" class="interactElementStyles">{{first}}</p>

    </v-flex>
</template>

<script>

import interact from "interactjs";

export default {

  name: 'droppedText',

  props: [
      'droppedText'
  ],

  data () {
    return {
      first: null
    }
  },

  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },

      first(n, o){
        if(o == null && n != null  ){
          this.dragItemFunctionality();
        }
      }
  },

  computed: {
  
  },

  methods: {
    dragItemFunctionality: function(){
      const element = this.$refs.interactElement;
    
    interact(element)
    .draggable({
      // enable inertial throwing
      inertia: true,
      // keep the element within the area of it's parent
      restrict: {
          restriction: "parent",
          endOnly: true,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      // enable autoScroll
      autoScroll: true,

      // call this function on every dragmove event
      onmove: function(event) {
          var target = event.target,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
        target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);


      },
      // call this function on every dragend event
      onend: function (event) {
        var textEl = event.target.querySelector('p');

        textEl && (textEl.textContent =
          'moved a distance of '
          + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                       Math.pow(event.pageY - event.y0, 2) | 0))
              .toFixed(2) + 'px');
      }
    })
    .resizable({
      // resize from all edges and corners
      edges: { left: true, right: true, bottom: true, top: true },

      restrictEdges: {
          outer: 'parent',
          endOnly: true,
      },

      restrictSize: {

      },

      inertia: true
    })
    .on('resizemove', function (event) {
      var target = event.target,
          x = (parseFloat(target.getAttribute('data-x')) || 0),
          y = (parseFloat(target.getAttribute('data-y')) || 0);

      // update the element's style
      target.style.width  = event.rect.width + 'px';
      target.style.height = event.rect.height + 'px';

      target.style.fontSize = (event.rect.width + event.rect.height) * 0.1 + 'px';

      // translate when resizing from top or left edges
      x += event.deltaRect.left;
      y += event.deltaRect.top;

      target.style.webkitTransform = target.style.transform =
          'translate(' + x + 'px,' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    });
    }
  },

  mounted() {

    

  },
}
</script>

<style lang="css" scoped>

.interactElementStyles{
  padding: 20px;
   border: dashed 2px #ccc;
}

</style>