<template>
  <div>
    <section v-for='(idea, index) in ideas'>
      <h1 contenteditable='true'>{{idea.title}}</h1>
      <h1>{{idea.body}}</h1>
      <h1>{{idea.quality}}</h1>
      <button @click='upQuality(index)'>Up quality</button>
      <button @click='downQuality(index)'>Down quality</button>
    </section>
  </div>
</template>

<script>
export default {
  props: ['ideas', 'upQuality', 'downQuality']
}
</script>
