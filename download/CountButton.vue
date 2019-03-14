<template>
  <button @click="changeValue">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CountButton",
  props: {
    value: {
      type: [String, Number],
      default: 1
    }
  },
  methods: {
    changeValue() {
      this.$emit("clicked", Number(this.value));
    }
  }
};
</script>

<style scoped>
</style>