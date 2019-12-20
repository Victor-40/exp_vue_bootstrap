<template>
  <div>
    <h3 class="about">This is a Find Setups page</h3>
    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">Value: {{ text }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: '',
    };
  },
};
</script>
<style scoped>
.about {
  text-align: center;
}
</style>
