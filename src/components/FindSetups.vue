<template>
  <div>
    <h3 class="about">Find Setups</h3>
    <p>Input Build number and Build tag:</p>
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
    <b-form-group label="Select products:">
    <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="checkedNames"
        :options="prodList"
        name="prod-1"
        stacked
        @change="cleanSetups"
    ></b-form-checkbox-group>
    </b-form-group>
    <!-- <span>Checked names: {{ checkedNames }}</span><br><br> -->
    <hr>
    <b-button variant="outline-primary" v-on:click="findSetups">Find Setups</b-button>
    <br>
    <br>
    <p>{{setupsCount}} setup(s) was found:</p>
    <ul>
      <li v-for="item in cfg" :key="item">{{item}}</li>
    </ul>
    <hr>
    <b-button variant="outline-primary" v-on:click="makeXls">Make XLS config</b-button>
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
      checkedNames: ['CFW', 'EFD.LAB', 'EFD.NX', 'EFD.PRO', 'EFD.SE', 'EFD.V5'],
      prodList: ['CFW', 'EFD.LAB', 'EFD.NX', 'EFD.PRO', 'EFD.SE', 'EFD.V5'],
      setupsCount: 0,
    };
  },
  methods: {
    clean() {
      this.build = '';
      this.tag = '';
      this.bt = {};
      this.cfg = {};
      this.setupsCount = 0;
    },
    cleanSetups() {
      this.cfg = {};
      this.setupsCount = 0;
    },
    findSetups() {
      const path = 'http://127.0.0.1:5000/api/findsetups';
      this.bt.build = this.build;
      this.bt.tag = this.tag;
      this.bt.products = this.checkedNames;
      axios.post(path, this.bt)
        .then((res) => {
          this.cfg = res.data;
          this.setupsCount = this.cfg.length;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    makeXls() {
      // const path = 'http://127.0.0.1:5000/api/findsetups';
    },

  },
};
</script>
<style scoped>
.about {
  text-align: center;
}
</style>
