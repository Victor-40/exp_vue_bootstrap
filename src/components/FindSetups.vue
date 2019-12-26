<template>
  <div>
    <h3 class="about">This is a Find Setups page</h3>
    <!-- <b-form-input v-model="text" placeholder="Enter your name"></b-form-input> -->
    <p>Enter Build number and Build tag:</p>
    <input v-model="build" placeholder="Build" maxlength="4" size="4">
    <br>
    <br>
    <input v-model="tag" placeholder="Tag" maxlength="35" size="35">
    <hr>
    <!-- <button v-on:click="clean">Clean</button> -->
    <b-button variant="outline-primary" v-on:click="clean">Clean</b-button>
    <hr>
    <div class="mt-2">Build: {{ build }}</div>
    <div class="mt-2">Tag: {{ tag }}</div>
    <hr>
    <b-button variant="outline-primary" v-on:click="findSetups">Find Setups</b-button>
    <br>
    <br>
    <p>bt: {{ bt }}</p>
    <p>cfg: {{ cfg }}</p>

  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      build: '',
      tag: '',
      cfg: {},
      bt: {},
    };
  },
  methods: {
    clean() {
      this.build = '';
      this.tag = '';
      this.bt = {};
      this.cfg = {};
    },
    findSetups() {
      const path = 'http://127.0.0.1:5000/api/findsetups';
      this.bt.build = this.build;
      this.bt.tag = this.tag;
      axios.post(path, this.bt)
        .then((res) => {
          this.cfg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },

  },
};
</script>
<style scoped>
.about {
  text-align: center;
}
</style>
