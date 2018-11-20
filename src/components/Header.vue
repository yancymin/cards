<template>
    <header class="header" id="header">
        <div class="left">
            <!-- Place this tag where you want the button to render. -->
            <a class="github-button" href="https://github.com/SlothWUX/cards" data-icon="octicon-star" data-show-count="true" aria-label="Star SlothWUX/cards on GitHub">Star</a>
        </div>
        <div class="center"><a href="#body" style="width:20px;height:20px;display:inline-block;"></a></div>
        <div class="right"></div>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        left: 50%;
        margin-left: -590px;
        width: 1180px;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        z-index: 1;
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
        .right {
            background: url("../assets/buymeacoffee.svg") center no-repeat;
            width: 100px;
        }
    }
</style>
