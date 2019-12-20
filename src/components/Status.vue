<template>
  <div class="about">
    <h3>Virtual Machines current status</h3>
    <br>
       <b-container>
        <b-row>
          <b-col>Free</b-col>
          <b-col>Busy</b-col>
        </b-row>
        <hr>
        <b-row>
          <b-col>
            <ul>
              <li v-for="item in freeVm" :key="item">{{item}}</li>
            </ul>
          </b-col>
          <b-col>
            <ul id="busy">
              <li v-for="item in busyVm" :key="item">{{item}}</li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>
<style scoped>
h3 {
  text-align: center;
}
#busy {
  color: red;
}
</style>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      cfg: {},
      message: '',
      showMessage: false,
      freeVm: [],
      busyVm: [],
    };
  },
  methods: {
    getStatus() {
      const path = 'http://localhost:5000/api/cfg';
      axios.get(path)
        .then((res) => {
          this.cfg = res.data;
          // eslint-disable-next-line
          for (let key in this.cfg) {
            if (this.cfg[key].status === 'free') {
              this.freeVm.push(key);
            } else {
              this.busyVm.push(key);
            }
          }
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getStatus();
  },
};
</script>
