<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './style/reset.css';
@import './style/global.scss';

body{
  margin: 0;
  background-color: #E8EAED;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
::selection {
  background: hsla(48,87%,83%,.99);
  color: #1b1b1b;
}
</style>
