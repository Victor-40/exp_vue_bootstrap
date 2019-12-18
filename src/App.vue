<template>
  <div id="app">
      <b-container fluid>
        <b-row>
          <b-col cols="2">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/status">Status VMs</router-link></li>
              <li><router-link to="/about">About</router-link></li>
            </ul>
          </b-col>
          <b-col><router-view/></b-col>
        </b-row>
      </b-container>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
