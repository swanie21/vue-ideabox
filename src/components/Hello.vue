<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>{{ body }}</h2>
    Title:
    <input v-model='title'>
    <br>
    Body:
    <input v-model='body'>
    <br>
    <button @click='addIdea'>Submit</button>
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



<!-- <button @click='alertMe'>Alert</button> -->
<!-- alertMe() {
  alert('I AM ALERTING YOU')
} -->

<!-- v-model used to check state change in input fields -->
<!-- <input v-model='msg'> -->

<!-- array
<section v-for='message in messages'>
  <h1>{{message}}</h1>
</section> -->
