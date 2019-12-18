<template>
  <div class="about">
    <h3>Virtual Machines current status</h3>
    <br>
       <b-container>
        <b-row>
          <b-col></b-col>
          <b-col>Free</b-col>
          <b-col></b-col>
          <b-col>Busy</b-col>
          <b-col></b-col>
        </b-row>
        <hr>
      </b-container>
  </div>
</template>
<style scoped>
h3 {
  text-align: center;
}
</style>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],
      message: '',
      showMessage: false,
    };
  },
  methods: {
    getBooks() {
      const path = 'http://localhost:5000/books';
      axios.get(path)
        .then((res) => {
          this.books = res.data.books;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getBooks();
  },
};
</script>
