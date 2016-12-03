<template>
  <div class="ideas">
    <section v-for='(idea, index) in ideas'>
      <p class="title" contenteditable='true'>{{idea.title}}</p>
      <p class="body">{{idea.body}}</p>
      <p>Quality: {{idea.quality}}</p>
      <button class="quality-buttons" @click='upQuality(index)'>Up quality</button>
      <button class="quality-buttons" @click='downQuality(index)'>Down quality</button>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['ideas', 'upQuality', 'downQuality']
  }
</script>
