<template>
  <main>
    <div class="sign_page">
      <div class="sign_title">
        <router-link to="/my"><span class="sign_title_icon"></span></router-link>
        <span class="sign_text">京东登录注册</span>
      </div>
      <div class="sign_warp" style="">
          <p class="input_contant">
            <input type="text" placeholder="请输入手机号码" class="mobile_input">
          </p>
          <p class="input_contant">
            <input type="text" placeholder="请输入收到的验证码" class="mobile_input">
            <button class="btn_text">获取验证码</button>
          </p>
      </div>
      <a class="sign_button">
        登  录
      </a>
      <p class="quick_btn">
        <span class="message_sign">短信验证码登录</span>
        <span class="mobile_sign">手机快速注册</span>
      </p>
      <div class="quick_login">
        <h4 class="quick_title">其他登录方式</h4>
        <p class="quick_type">
          <span class="icon_qq"></span>
          <span class="icon_wx"></span>
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
*{
  padding: 0px;
  margin: 0px;
  list-style: none;
  text-decoration: none;
}
input{
  border: 0;
}
.sign_page{
    text-align: left;
    background: #fff;
    padding: 0 1.25rem 0.5rem;
}
.sign_title{
    display: block;
    position: relative;
    height: 44px;
    line-height: 44px;
    background: #fff;
    font-size: 17px;
    z-index: 999;
    text-align: center;
}
.sign_title_icon{
    top: 10px;
    background: url('../../public/images/nav_back.png');
    width: 24px;
    height: 24px;
    overflow: hidden;
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    background-size: 100% auto;
}
.input_contant{
    position: relative;
    box-sizing: border-box;
    height: 4.5rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    overflow: hidden;
    margin-top: 0.2rem;
    background: #fff;
    border-bottom: 0.01rem solid #efefef;
}
.mobile_input{
  width: 100%;
    padding-left: 0.7rem;
        height: 142%;
}
.sgin_warp{
  margin-top: 25px;
}
.btn_text{
    border: none;
    background: #fff;
    border-radius: 0;
    padding: 0;
    color: #848689;
    position: absolute;
    right: 0;
    top: 3.125rem;
    height: 10px;
    line-height: 2rem;
    text-align: center;
    font-size: 0.14rem;
    min-width: 1rem;
}
.sign_button{
    margin-top: 1rem;
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    display: block;
    background-color: #ff2000;
    border-radius: 4.25rem;
    font-size: 1.16rem;
    text-align: center;
    color: #fff;
}
.quick_btn{
    color: rgba(0,0,0,.4);
    font-size: 0.4rem;
    margin-top: 1.5rem;
    overflow: hidden;
}
.message_sign{
    float: left;
    font-size: 0.9rem;
}
.mobile_sign{
  float: right;
  font-size: 0.9rem;
}
.quick_login{
    margin-top: 0.88rem;
    font-size: 0.12rem;
    text-align: center;
}
.quick_title{
    color: rgba(0,0,0,.2);
    width: 6rem;
    margin: 1.89rem auto 0;
    background: #fff;
    text-align: center;
    font-size: 0.9rem;
}
.quick_type{
      text-align: center;
    margin: 2.25rem 0 0.12rem;
}
.icon_qq{
    background: url('../../public/images/icon_qq.png');
    display: inline-block;
    width: 3.48rem;
    color: rgba(0,0,0,.4);
    margin: 0 0.15rem;
    background-size: 100% auto;
    padding-top: 0.53rem;
    background-repeat: no-repeat;
    height: 4rem;
    margin-right: 2rem;
}
.icon_wx{
    background: url('../../public/images/icon_wx.png');
    display: inline-block;
    width: 3.48rem;
    color: rgba(0,0,0,.4);
    margin: 0 0.15rem;
    background-size: 100% auto;
    padding-top: 0.53rem;
    background-repeat: no-repeat;
    height: 4rem;
}
</style>