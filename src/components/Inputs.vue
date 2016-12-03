<template>
  <div class="app-container">
    <div class="input-fields">
      Title:
      <input class="input" v-model='title'>
      <br>
      Body:
      <input class="input" v-model='body'>
      <button class="submit-button" @click='addIdea'>Submit</button>
    </div>
    <ideas
      :ideas='ideas'
      :upQuality='upQuality'
      :downQuality='downQuality'
      >
    </ideas>
  </div>
</template>

<script>
  import Ideas from './Ideas.vue'
  import helpers from './helpers.js'

  export default {
    components: {
      Ideas
    },
    data () {
      return {
        title: '',
        body: '',
        ideas: []
      }
    },
    methods: {
      addIdea() {
        const idea = {
          title: this.title,
          body: this.body,
          quality: 'Swill'
        }
        this.ideas.push(idea)
      },
      upQuality(index) {
        const { quality } = this.ideas[index]
        this.ideas[index].quality = helpers.up[quality]
      },
      downQuality(index) {
        const { quality  } = this.ideas[index]
        this.ideas[index].quality = helpers.down[quality]
      }
    }
  }
</script>
