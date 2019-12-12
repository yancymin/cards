<template>
  <div class="home" :class="{dark: isDark}">
    <HeroCard @modeSwitch="modeSwitch" :isCardDark="isDark" />
    <!-- <a>切换主题</a> -->
    <div class="container">
      <Row v-for="(l, index) in DataList" ref="load" :key="index" :isRowDark="isDark">
        <transition name="fade">
          <Loading class="loading" v-show="load"></Loading>
        </transition>
        <div class="code" v-html="l.codepen" @load="hehe">{{l.codepen}}</div>
      </Row>
    </div>
    <div class="pagination">
      <a class="pre" @click="prePage" v-show="page > 1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
          <path fill="none" d="M0 0h24v24H0V0z" />
        </svg>
      </a>
      <a class="next" @click="nextPage" v-show="page < pageSize">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
          <path fill="none" d="M0 0h24v24H0V0z" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import SmoothScroll from 'smooth-scroll';
import Header from '../components/Header';
import HeroCard from '../components/HeroCard';
import Row from '../components/Row';
import DataList from './Data';
import Loading from '../components/Loading';

export default {
    name: 'home',
    data() {
        return {
            isDark: localStorage.getItem('dark'),
            DataList: [],
            page: 1,
            pageSize: 0,
            load: true,
            isMore: false,
            countNum: 7,
            thisIndex: -1,
            isLoadBtn: false,
            isHeader: true,
            scrollActionY: undefined,
            scrollDirection: '',
            timer: null
        };
    },
    components: {
        Loading,
        Header,
        Row,
        HeroCard
    },
    created() {
        console.log(DataList.length);
        this.pageSize = Math.ceil(DataList.length / 7);
        for (let i = 0; i < this.countNum; i++) {
            this.DataList.push(DataList[i]);
        }

        this.thisIndex = this.countNum;
    },
    mounted() {
        this.iframeLoad();

        this.scrollActionY = window.pageYOffset;
        const self = this;

        window.addEventListener('scroll', () => {
            self.scrollFunc();
            if (self.scrollDirection) {
                self.isHeader = true;
            } else {
                self.isHeader = false;
            }
        });
    },
    methods: {

        modeSwitch() {
            if (!localStorage.getItem('dark')) {
                this.isDark = true;
                localStorage.setItem('dark', 'true');
            } else {
                this.isDark = false;
                localStorage.removeItem('dark');
            }
        },
        hehe() {
            console.log('hehe');
        },
        prePage() {
            if (this.page > 1) {
                this.page += -1;
                this.updateData();
            }
        },
        nextPage() {
            if (this.page < this.pageSize) {
                this.page += 1;
                this.updateData();
            }
        },
        updateData() {
            this.load = true;
            this.DataList.length = 0;
            const n = this.countNum * (this.page - 1);
            console.log(n);
            for (let i = 0; i < 7; i++) {
                if (DataList[n + i]) {
                    this.DataList.push(DataList[n + i]);
                } else {
                    break;
                }
            }

            this.$nextTick(function () {
                this.iframeLoad();
            });
        },
        iframeLoad() {
            const self = this;
            const iframes = document.querySelectorAll('iframe');
            console.log(iframes[0]);
            iframes[0].onload = function () {
                console.log('loaded');
                self.load = false;
            };
        },
        scrollFunc() {
            const diffY = this.scrollActionY - window.pageYOffset;
            if (diffY < 0) {
                if (document.body.scrollTop || document.documentElement.scrollTop > 200) {
                    this.scrollDirection = false;
                } else {
                    this.scrollDirection = true;
                }
            } else if (diffY > 0) {
                // Scroll up
                this.scrollDirection = true;
            }
            this.scrollActionY = window.pageYOffset;
        }
    }
};
</script>
<style lang="scss">
.home {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background 0.25s ease-out;
  transition-delay: 0.1s;

  .container {
    width: 100%;
    max-width: 980px;
    padding: 120px 0 120px 0;
  }
}
.more {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}
.load-btn {
  display: block;
  width: 100%;
  max-width: 1470px;
  margin: 0 auto;
  padding: 15px 12px;
  font-size: 14px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 0;
  background-color: black;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

.embed-nav {
  display: none;
}
.pagination {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.pre,
.next {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #ffffff;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.08), 0px -1px 2px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #000;
    svg {
      path {
        &:first-child {
          fill: #fff;
        }
      }
    }
  }
}
.next {
  margin-top: 16px;
  svg {
    transform: rotate(-180deg);
  }
}

.dark {
  background: #333;
}
</style>
