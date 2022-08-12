<template >
    <main>
            <!-- router-view放置跳转以后渲染的内容 -->
        <router-view></router-view>
        <ul class="bot">
            <li>
                <!-- <router-link>实现页面跳转 to跳转路径  router-link最终渲染成了a标签-->
                <router-link to="/index">
                    <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png" alt="">
                    <!-- <img src="https://gw.alicdn.com/imgextra/i4/O1CN01mjuUty294SnxayJFo_!!6000000008014-2-tps-60-60.png" alt=""> -->
                </router-link>
            </li>
            <li>
                <!-- <router-link>实现页面跳转 -->
                <router-link to="/sort">
                      <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png" alt="">
                    <!-- <img src="https://gw.alicdn.com/imgextra/i4/O1CN01mjuUty294SnxayJFo_!!6000000008014-2-tps-60-60.png" alt=""> -->
                </router-link>
            </li>   
            <li>
                <!-- <router-link>实现页面跳转 -->
                <router-link to="/shopcart">
                    <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png" alt="">
                    <!-- <img src="https://gw.alicdn.com/imgextra/i2/O1CN01OCKkCF24I8Y1skoy3_!!6000000007367-2-tps-60-60.png" alt=""> -->
                </router-link>
            </li>
            <li>
                <!-- <router-link>实现页面跳转 -->
                <router-link to="/sign">
                    <img src="https://img12.360buyimg.com/img/s130x100_jfs/t1/203343/14/10880/3097/61641568E184a8e0b/4522f6ec5bb9b10b.png" alt="">
                    <!-- <img src="https://gw.alicdn.com/imgextra/i2/O1CN01OCKkCF24I8Y1skoy3_!!6000000007367-2-tps-60-60.png" alt=""> -->

                </router-link>
            </li>
        </ul>
    </main>
</template>
<!-- 写在此处的css是全局的 加 scoped变成局部-->
<style scoped>
*{
    margin:0px;
    padding:0px;
    list-style:none;
}
</style>

<style scoped>
.bot{
    position: fixed;
    bottom:0px;
    left: 0px;
    width:100%;
    background: #fff;
}
.bot li{
    width:25%;
    float: left;
    text-align: center;
}
.bot a{
    text-decoration: none;
    color:black;
}
.bot .router-link-active{
    color:red;
}
.bot  img{
    height: 70px;
    display: inline-block;
}
</style>
