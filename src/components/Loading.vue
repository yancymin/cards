<template>
    <content-loader class="loading"
            :height="560"
            :width="1180"
            :speed="2"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
    >
        <rect x="29.63" y="17.8" rx="0" ry="0" width="1126.1" height="29.44" />
        <rect x="331.63" y="90.8" rx="0" ry="0" width="0" height="0" />
        <rect x="240.63" y="80.8" rx="0" ry="0" width="0" height="0" />
        <rect x="28.63" y="62.8" rx="0" ry="0" width="1126.1" height="320" />
        <rect x="27.63" y="395.8" rx="0" ry="0" width="110" height="26" />
        <rect x="159.63" y="168.8" rx="0" ry="0" width="0" height="0" />
        <rect x="155.63" y="395.8" rx="0" ry="0" width="110" height="26" />
        <rect x="283.63" y="395.8" rx="0" ry="0" width="110" height="26" />
    </content-loader>
</template>

<script>
    import { ContentLoader } from 'vue-content-loader';

    export default {
        name: 'Loading',
        components: {
            ContentLoader
        }
    };
</script>

<style>
    .loading {
        position: absolute;
        top: 0;
        left: 0;
        background: white;
    }
</style>
