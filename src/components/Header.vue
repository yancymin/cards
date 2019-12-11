<template>
    <header class="header" id="header">
        <div class="container">
            <div class="left">
                <!-- <a class="github-button" href="https://github.com/SlothWUX/cards" data-icon="octicon-star" data-show-count="true" aria-label="Star SlothWUX/cards on GitHub">Star</a> -->
            </div>
            <div class="center"><a href="#body" style="width:20px;height:20px;display:inline-block;"></a></div>
            <div class="right"></div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 48px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1100px;
            height: 100%;
        }
        div {
            height: 100%;
        }
        .left {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .center {
            background: url("../assets/sloth.svg") center no-repeat;
            width: 22px;
        }
        /* .right {
            background: url("../assets/buymeacoffee.svg") center no-repeat;
            width: 100px;
        } */
    }
</style>
