<template>
  <panel title="Tab">
    <textarea
      label="tab"
      readonly
      v-model="song.tab" />
  </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  overflow: auto;
  padding: 40px;
}
</style>
