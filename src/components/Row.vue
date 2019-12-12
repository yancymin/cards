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
  width: 100%;
  margin-top: 0px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition-delay: 0.1s;

  &:hover {
    &::before {
      opacity: 0;
        animation: unShow 0.1s ease 0.2s forwards;
    }
    &::after {
      opacity: 0;
        animation: unShow 0.1s ease 0.2s forwards;
    }
  }

  &::before {
    display: block;
    position: absolute;
    content: '';
    width: 100%;
    height: 53px;
    background-color: #e8eaed;
    transition: all 0.25s ease-out;
    transition-delay: 0.1s;
  }

  &::after {
    display: block;
    position: absolute;
    bottom: 0;
    content: '';
    width: 100%;
    height: 34px;
    background-color: #e8eaed;
    transition: all 0.25s ease-out;
    transition-delay: 0.1s;
  }

  @keyframes unShow {
    to {
      z-index: -10;
    }
  }

  .code {
    height: 560px;
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
    background: #f0f0f0;
    border-radius: 3px;
    font-weight: 700;
    font-size: 12px;
    color: #4d4d4d;
    padding: 5px 8px;
  }
  .value {
    font-size: 14px;
    color: #808080;
    margin: 0;
    margin-top: 10px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
