<template>
  <div class="hero-card">
    <div class="top">
      <h1>Codepen</h1>
      <h1>Category Picks</h1>
      <svg
        class="logo"
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="68" height="68" rx="34" fill="#131417" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.3363 34.9532C30.3297 35.334 30.5965 35.6516 30.9587 35.7311L31.5303 35.8571C31.6533 35.8845 31.7729 35.8845 31.8837 35.8582C32.1053 35.8056 32.3142 35.6359 32.4124 35.427C32.462 35.3211 32.489 35.1991 32.4917 35.0663L32.7359 23.3375L30.5772 22.7893L30.3363 34.9532ZM24.854 42.7379C23.1771 40.8367 22.2907 38.6308 22.2003 36.449L21.1055 34.5483C21.0156 34.3921 20.9809 34.256 21.0101 34.0673C21.0437 33.8466 21.1854 33.5846 21.353 33.4378C21.4638 33.3398 21.6005 33.2732 21.7642 33.2642L24.353 33.1282L27.2757 21.9509L23.4439 20.9776C23.1826 20.911 23.0233 20.6416 23.0889 20.3762C23.154 20.1102 23.4197 19.9483 23.681 20.015L40.3692 24.2543C40.6311 24.3203 40.7898 24.5903 40.7248 24.8557C40.6592 25.1211 40.394 25.283 40.1327 25.2169L36.1962 24.2167L38.8422 39.0222C39.9993 38.0926 41.2297 37.7678 42.3482 37.8725C43.1233 37.9448 43.8427 38.2242 44.4447 38.6504C45.0483 39.0777 45.5378 39.6556 45.8531 40.3248C46.3371 41.3524 46.4105 42.5917 45.857 43.831C44.9573 45.8471 42.9524 47.1732 40.3687 47.7186C37.8141 48.2574 34.6819 48.0328 31.4995 46.9559C28.6136 45.9798 26.397 44.4874 24.854 42.7379ZM43.2485 43.4794C43.8969 43.4794 44.4225 42.9538 44.4225 42.3054C44.4225 41.657 43.8969 41.1314 43.2485 41.1314C42.6002 41.1314 42.0745 41.657 42.0745 42.3054C42.0745 42.9538 42.6002 43.4794 43.2485 43.4794Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="center">
      <p>
        Everyone loves codepen, but codepen has not been classified in detail. Face tens of thousands of pens when you need inspiration.
        So I put here the excellent pens that I usually collect and categorize,
        and share them with everyone.
      </p>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
    name: 'heroCard'
};
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

.hero-card {
  width: calc(100vw - 200px);
  border-radius: 12px;
  padding: 80px 80px 0 80px;
  margin: 20px;
  background-color: #fff;

  .top {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    position: relative;

    h1 {
      &:nth-of-type(1) {
        @include font(60, 900, 60, 0);
        margin-right: 32px;
      }
      &:nth-of-type(2) {
        @include font(60, 400, 60, 0);
      }
    }

    .logo {
      position: absolute;
      right: 0;
    }
  }

  .center {
    max-width: 728px;
    @include font(20, 300, 26, 1);
  }

  .bottom {
    padding: 40px 0;
  }
}
</style>
