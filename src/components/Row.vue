<template>
  <div class="row">
      <slot></slot>
  </div>
</template>

<script>

export default {
    name: 'Row'
};
</script>

<style lang="scss">
    .row {
        margin-top: 80px;
        position: relative;
        .code {
            // margin-bottom: 28px;
        }
        .style {
            display: inline-block;
            margin-right: 40px;
            margin-top: 32px;
            &:last-child {
                margin-right: 0;
            }
            &:hover {

            }
        }
        .label {
            background: #F0F0F0;
            border-radius: 3px;
            font-weight: 700;
            font-size: 12px;
            color: #4D4D4D;
            padding: 5px 8px;
        }
        .value {
            font-size: 14px;
            color: #808080;
            margin: 0;
            margin-top: 10px;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
