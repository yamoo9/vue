<template>
  <span class="count">{{ count }}</span>
</template>

<script>
export default {
  name: "CountDisplay",
  props: ["count"]
};
</script>