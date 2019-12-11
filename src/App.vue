<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  margin: 0;
  background-color: #E8EAED;
}
#app {
  font-family: 'Quicksand', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0;
}
::selection {
  background: hsla(48,87%,83%,.99);
  color: #1b1b1b;
}

@media screen and (max-width: 1180px) {
  #app {
    width: 92%;
  }

  #header {
    width: 92%;
  }
}
</style>
