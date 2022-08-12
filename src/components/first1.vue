<template>
<main>
<router-view></router-view>
 <router-link to="/defail"></router-link>
<van-goods-action>
  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
  <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
  <van-goods-action-button
    type="danger"
    text="立即购买"
    @click="onClickButton"
  />
</van-goods-action>
</main>
        
</template>