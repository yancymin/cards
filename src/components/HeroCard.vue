<template>
  <div class="hero-card" :class="{cardDark: isCardDark}">
    <div class="top">
      <div class="title">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M59.6833 20.4097C59.6697 20.3374 59.6575 20.2652 59.6381 20.1948C59.6265 20.1523 59.6123 20.1123 59.5981 20.0703C59.5786 20.0076 59.5566 19.9456 59.5323 19.8845C59.5149 19.8419 59.4949 19.8007 59.4755 19.76C59.4489 19.7022 59.4198 19.6456 59.3884 19.5903C59.3658 19.5497 59.34 19.511 59.3155 19.4716C59.2219 19.3265 59.1138 19.1912 58.9929 19.0677C58.9594 19.0342 58.9258 19 58.8897 18.9671C58.8434 18.9248 58.7951 18.8845 58.7452 18.8465C58.7065 18.8168 58.6691 18.7865 58.6291 18.7587C58.6142 18.7484 58.602 18.7361 58.5865 18.7265L31.3781 0.587101C30.9581 0.306744 30.4644 0.15712 29.9594 0.15712C29.4544 0.15712 28.9607 0.306744 28.5407 0.587101L1.331 18.7258C1.31552 18.7355 1.30326 18.7477 1.28842 18.7581C1.24842 18.7865 1.211 18.8161 1.17229 18.8452C1.08397 18.9118 1.00133 18.9856 0.925199 19.0658C0.802529 19.1887 0.694103 19.3251 0.601974 19.4723C0.576813 19.5116 0.552297 19.5497 0.529071 19.591C0.496813 19.6465 0.46907 19.7032 0.442618 19.7594C0.423263 19.8007 0.40262 19.8419 0.385201 19.8839C0.360677 19.9449 0.338507 20.0069 0.318746 20.0697C0.305843 20.1116 0.291006 20.1523 0.280038 20.1903C0.260683 20.2607 0.24778 20.3323 0.234877 20.4052C0.22778 20.4419 0.21875 20.4781 0.214233 20.5155C0.199456 20.6263 0.19191 20.7379 0.19165 20.8497V38.9936C0.19165 39.1058 0.199394 39.2181 0.215523 39.3277C0.221329 39.3677 0.231649 39.4 0.239391 39.4387C0.252294 39.511 0.26391 39.5826 0.287781 39.6548C0.298749 39.6948 0.311649 39.7355 0.327778 39.7794C0.347778 39.8439 0.367777 39.9077 0.392294 39.9665C0.409068 40.0065 0.432298 40.0465 0.447781 40.0865C0.519961 40.244 0.611644 40.3918 0.720682 40.5265C0.748424 40.5665 0.776812 40.5987 0.80907 40.6374C0.849715 40.6852 0.889069 40.7336 0.936811 40.7761C0.969714 40.8084 1.00133 40.8477 1.04133 40.8723C1.08778 40.9123 1.1381 40.9523 1.18584 40.9942C1.22455 41.0265 1.26584 41.0503 1.2981 41.0813C1.31294 41.089 1.32197 41.1052 1.3381 41.1129L28.5407 59.2613C28.9704 59.5503 29.4633 59.6948 29.96 59.6923C30.4651 59.6913 30.9588 59.5416 31.3794 59.2619L58.5891 41.1219C58.6039 41.1129 58.6168 41.1013 58.631 41.091C58.6716 41.0626 58.7091 41.0329 58.7471 41.0032C58.7975 40.9645 58.8465 40.9232 58.8929 40.8819C58.9278 40.8503 58.9613 40.8161 58.9955 40.7826C59.0726 40.7046 59.1439 40.6211 59.2091 40.5329C59.2734 40.4448 59.3337 40.3537 59.3897 40.26C59.4226 40.2045 59.451 40.1471 59.4781 40.0897C59.4975 40.0484 59.5168 40.0077 59.5349 39.9658C59.5591 39.9043 59.581 39.8419 59.6007 39.7787C59.6142 39.7374 59.6284 39.6968 59.6407 39.6548C59.6594 39.5839 59.6723 39.5123 59.6858 39.44C59.6923 39.4032 59.702 39.3671 59.7052 39.3297C59.72 39.2187 59.7284 39.1084 59.7284 38.9948V20.8548C59.7278 20.7431 59.7202 20.6315 59.7058 20.5207C59.6994 20.4813 59.6871 20.449 59.6794 20.4097H59.6833ZM29.9587 35.9768L20.911 29.9252L29.9587 23.8723L39.0078 29.9252L29.9587 35.9768ZM27.4013 19.4284L16.3097 26.8471L7.35681 20.8581L27.402 7.49484V19.4284H27.4013ZM11.7084 29.9239L5.30907 34.2045V25.6432L11.7091 29.9239H11.7084ZM16.3097 33.0045L27.4013 40.4226V52.3548L7.35617 38.9903L16.3097 33.0019V33.0039V33.0045ZM32.5175 40.4207L43.6091 33.0026L52.5626 38.991L32.5175 52.3542V40.4207ZM48.2104 29.9258L54.6104 25.6445V34.2058L48.2104 29.9239V29.9258ZM43.6091 26.8471L32.5175 19.429V7.49484L52.5626 20.8581L43.6091 26.8471Z"
            fill="#131417"
          />
        </svg>

        <h1>Codepen</h1>
        <h1>Category Picks</h1>
      </div>
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
        Everyone loves codepen, but codepen has not been classified in detail.
        <br />Face tens of thousands of pens when you need inspiration.
        <br />So I put here the excellent pens that I usually collect and categorize,
        <br />and share them with everyone.
      </p>
    </div>
    <div class="bottom" id="nav">
      <div class="category">
        <svg
          class="nav-logo"
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
        <span>Total：323</span>
        <button v-for="(item, index) in categoryData" :key="index">{{item}}</button>
      </div>
      <div class="control">
        <a href class="pin">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 7.724V3.99999H11.3333V2.66666C11.3333 2.31304 11.1929 1.9739 10.9428 1.72385C10.6928 1.4738 10.3536 1.33333 10 1.33333H6C5.64638 1.33333 5.30724 1.4738 5.05719 1.72385C4.80714 1.9739 4.66667 2.31304 4.66667 2.66666V3.99999H6V7.724L4.19533 8.862C4.13331 8.9238 4.08411 8.99726 4.05059 9.07815C4.01707 9.15904 3.99987 9.24577 4 9.33333V10.6667C4 10.8435 4.07024 11.013 4.19526 11.1381C4.32029 11.2631 4.48986 11.3333 4.66667 11.3333H7.33333V13.3333L8 14.6667L8.66667 13.3333V11.3333H11.3333C11.5101 11.3333 11.6797 11.2631 11.8047 11.1381C11.9298 11.013 12 10.8435 12 10.6667V9.33333C12.0001 9.24577 11.9829 9.15904 11.9494 9.07815C11.9159 8.99726 11.8667 8.9238 11.8047 8.862L10 7.724Z"
              fill="white"
            />
          </svg>
        </a>

        <div class="modeSwitch" @click="triggerClick()">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0C10.1819 0 11.3522 0.232792 12.4442 0.685084C13.5361 1.13738 14.5282 1.80031 15.364 2.63604C16.1997 3.47177 16.8626 4.46392 17.3149 5.55585C17.7672 6.64778 18 7.8181 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C7.8181 18 6.64778 17.7672 5.55585 17.3149C4.46392 16.8626 3.47177 16.1997 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0ZM9 1.8C7.09044 1.8 5.25909 2.55857 3.90883 3.90883C2.55857 5.25909 1.8 7.09044 1.8 9C1.8 10.9096 2.55857 12.7409 3.90883 14.0912C5.25909 15.4414 7.09044 16.2 9 16.2C10.9096 16.2 12.7409 15.4414 14.0912 14.0912C15.4414 12.7409 16.2 10.9096 16.2 9C16.2 7.09044 15.4414 5.25909 14.0912 3.90883C12.7409 2.55857 10.9096 1.8 9 1.8ZM13.41 4.59C14.58 5.67 15.3 7.29 15.3 9C15.3 10.71 14.49 12.24 13.41 13.41C12.33 14.58 10.71 15.3 9 15.3V2.7C10.71 2.7 12.33 3.42 13.41 4.59Z"
              fill="#131417"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'heroCard',
    props: ['isCardDark'],
    methods: {
        triggerClick() {
            this.$emit('modeSwitch');
        }
    },
    mounted() {
        const nav = document.querySelector('#nav');

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 344) {
                nav.classList.add('navFixed');
            } else {
                nav.classList.remove('navFixed');
            }
        });
    },
    data() {
        return {
            isCardDark: false,
            categoryData: [
                'All',
                'Input',
                'Animation',
                'Layout',
                '3D',
                'Data Viusalation'
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

.navFixed {
  z-index: 999;
  position: fixed !important;
  top: 0;
  left: 20px !important;
  height: min-content;
  width: calc(100vw - 40px) !important;
  margin: 0 !important;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 2px 10px rgba(209, 217, 231, 0.3);

  .category {
    transform: translateX(0) !important;
  }

  .nav-logo {
    transform: scale(1) translateX(0) !important;
    opacity: 1 !important;
  }

  span {
    margin-left: 40px;
  }
}

.hero-card {
  position: relative;
  width: calc(100vw - 200px);
  border-radius: 12px 12px 0 0;
  padding: 80px 80px 0 80px;
  margin: 20px;
  background-color: #fff;

  .top {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    position: relative;

    .title {
      display: flex;
      justify-items: center;

      svg {
        margin-right: 16px;
      }
    }

    h1 {
      &:nth-of-type(1) {
        @include font(60, 900, 60, 0);
        margin-right: 32px;
        position: relative;
        display: flex;
        justify-items: center;

        &::after {
          position: relative;
          right: 0;
          content: '';
          display: block;
          width: 1px;
          height: 100%;
          background-color: #333;
          margin-left: 32px;
        }
      }
      &:nth-of-type(2) {
        @include font(60, 400, 60, 0);
      }
    }

    .logo {
      position: absolute;
      right: 0;
      transition: all 0.3s ease;
      transform: rotateY(0) perspective(1000px);
    }
  }

  .center {
    max-width: 728px;
    margin-bottom: 60px;
    @include font(20, 300, 26, 1);
  }

  .bottom {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 0;
    bottom: -77px;
    width: 100%;
    border-top: 1px solid $color-line-1;
    padding: 24px 0;
    margin-top: 40px;
    border-radius: 0 0 12px 12px;
    background-color: #fff;

    .category {
      display: flex;
      align-items: center;
      margin-left: 80px;
      transition: all 0.3s ease;
      transform: translateX(-48px);

      .nav-logo {
        opacity: 0;
        width: 48px;
        height: 48px;
        transform: scale(0.65) translateX(40px);
        transition: all 0.26s ease;
      }

      button {
        cursor: pointer;
        padding: 6px 8px;
        background-color: $color-black-1;
        border-radius: 3px;
        margin-right: 16px;
        border: 1px solid transparent;
        transition: all 0.2s ease-in-out;
        @include font(12, 400, 12, 1) {
          color: white !important;
        }

        &:hover {
          background-color: #fff;
          border: 1px solid $color-black-1;
          color: $color-black-1 !important;
        }
      }

      span {
        margin-right: 32px;
        @include font(14, 400, 14, 1);
      }
    }

    .control {
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
      margin-right: 80px;

      .pin {
        display: inherit;
        padding: 4px 8px;
        border-radius: 3px;
        background-color: $color-black-1;
        margin-right: 16px;
      }

      .modeSwitch {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 18px;
        height: 18px;
        cursor: pointer;
        transition: all 0.25s ease;

        /* &::after {
          opacity: 0;
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          padding: 4px;
          border-radius: 3px;
          background: #aab9cf;
          transition: all 0.2s ease;
        }

        &:hover {
          &::after {
            opacity: 0.2;
          }
        } */
      }
    }
  }
}

.cardDark {
  .modeSwitch {
    transform: rotate(-180deg) !important;
  }

  .bottom {
    box-shadow: none;
  }

  .logo,
  .nav-logo {
    transform: rotateY(180deg) !important;
  }
}
</style>
