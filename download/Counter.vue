<template>
  <div class="counter">
    <count-button value="-1" @clicked="changeValue">-</count-button>
    <count-display :count="count"></count-display>
    <count-button value="1" @clicked="changeValue">+</count-button>
  </div>
</template>

<script>
import CountButton from "@/components/CountButton";
import CountDisplay from "@/components/CountDisplay";

export default {
  name: "Counter",
  components: { CountButton, CountDisplay },
  data: () => ({
    count: 0
  }),
  methods: {
    changeValue(value) {
      this.count += value;
    }
  }
};
</script>