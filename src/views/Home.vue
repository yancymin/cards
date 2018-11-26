<template>
    <div class="home">
        <div style="height: 48px"></div>
        <transition name="slide-fade">
            <Header v-if="isHeader"></Header>
        </transition>
        <a @click="theme">切换主题</a>
        <Row v-for="l, index in DataList" ref="load">
            <transition name="fade">
                <Loading class="loading" v-show="load"></Loading>
            </transition>
                <div class="code" v-html="l.codepen">{{l.codepen}}</div>
        </Row>
        <Row>
            <transition name="fade">
                <button class="load-btn" @click="handleClickLoad" v-if="isLoadBtn">More</button>
            </transition>
            <transition name="fade">
                <Loading v-if="isMore" style="z-index: 999"></Loading>
            </transition>
        </Row>
        <footer style="height: 400px; margin-top: 20px; background-color: #fafafa; color: #dddddd; font-size: 30px; display: flex; align-items: center; justify-content: center">footer</footer>
    </div>
</template>

<script>
// @ is an alias to /src
import SmoothScroll from 'smooth-scroll';
import Header from '../components/Header';
import Row from '../components/Row';
import DataList from './Data';
import Loading from "../components/Loading";

export default {
    name: 'home',
    data: function(){
        return {
            DataList: [],
            load: true,
            isMore: false,
            countNum: 4,
            thisIndex: -1,
            counts: 0,
            isLoadBtn: false,
            isHeader: true,
            scrollActionY: undefined,
            scrollDirection: ''
        }
    },
    components: {
        Loading,
        Header,
        Row
    },
    created: function() {

        for(let i=0; i<this.countNum; i++) {
            this.DataList.push(DataList[i])
        }

        this.thisIndex = this.countNum;
    },
    mounted: function () {
        this.counts = 1;
        this.scrollActionY = window.pageYOffset;
        const iframes = document.querySelectorAll('iframe');
        const self = this;

        // console.log(document.querySelectorAll('iframe'));

        iframes[0].onload = function() {
            self.load = false
            console.log(this.querySelector('.embed-nav'));
        };
        console.log(this.$refs);
        let timer = null;

        window.addEventListener('scroll', function() {

            self.scrollFunc();
            console.log(self.scrollDirection)
            if(self.scrollDirection){
                self.isHeader = true;
            } else {
                self.isHeader = false;
            }

            if(document.body.scrollTop || document.documentElement.scrollTop + window.innerHeight >= document.body.offsetHeight) {
                console.log(self.counts);
                self.isLoadBtn = self.counts%2 === 0?true:false;
                self.isMore = self.counts%2 === 0?false:true;

                if(self.isMore){
                    self.counts ++;
                    clearTimeout(timer);
                    timer = setTimeout(self.loadData, 2000);
                }else{
                    return
                }
            }
        })

    },
    methods: {
        handleClickLoad() {
            this.isMore = true;
            this.isLoadBtn = false;
            let timer = null;
            clearTimeout(timer);
            timer = setTimeout(this.loadData, 2000);
        },
        theme(){
            let iframes = document.querySelectorAll('iframe')
            for(let f of iframes){
                console.log(f)
                f.src = "//codepen.io/yancy/embed/gBLLxz/?height=336&theme-id=dark&default-tab=result"
            }
        },
        loadData() {
            this.isMore = false;

            if(this.thisIndex >= DataList.length) {
                return
            }

            for(let i=0; i < this.countNum; i++) {
                if(DataList[this.thisIndex]){
                    this.DataList.push(DataList[this.thisIndex]);
                    this.thisIndex ++;
                }else{
                    return console.log('循环♻️')
                }
            }
            // this.counts ++;
        },
        scrollFunc() {

            let diffY = this.scrollActionY - window.pageYOffset;
            console.log(diffY);
            if (diffY < 0) {
                // Scroll down
                if(document.body.scrollTop || document.documentElement.scrollTop > 120) {
                    console.log(document.body.scrollTop || document.documentElement.scrollTop)
                    this.scrollDirection = false
                }
                this.scrollDirection = true
            } else if (diffY > 0) {
                // Scroll up
                this.scrollDirection = true
            }
            this.scrollActionY = window.pageYOffset;
        }
    }
};
</script>
<style lang="scss">
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
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
    .embed-nav{
        display: none;
    }
</style>
