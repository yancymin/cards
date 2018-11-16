<template>
  <div class="row">
    Row
    <pre v-highlightjs="sourcecode"><code class="html"></code></pre>
    <pre v-highlightjs><code class="html">const s = new Date().toString()</code></pre>
  </div>
</template>

<script>
export default {
    name: 'Row',
    data() {
        return {
            sourcecode: '<p>heh</p>'
        };
    }
};
</script>

<style scoped lang="scss">

</style>
