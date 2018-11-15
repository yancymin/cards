<template>
  <div class="home">
    Sloth-card

    <Row/>
  </div>
</template>

<script>
// @ is an alias to /src
import Row from '@/components/row.vue';

export default {
    name: 'home',
    components: {
        Row
    }
};
</script>
