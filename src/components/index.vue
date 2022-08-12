 <template >
     <main>
        <div class="index_main">
            <div class="Search_header">
            <!-- 背景颜色 -->
            <div class="header_bg"></div>
               <div class="header_left">
                    <span></span>
               </div>
               <div class="header_middle">
                    <div class="m_left">
                         <span></span>
                    </div>
                    <div class="m_right">
                        <router-link to="/search"> <span style="margin-left: 0px;"></span> </router-link>
                         <p style="margin-left: 30px;color: grey;">书籍</p> 
                    </div>
               </div>
               <div class="header_right">
                    <span>登录</span>
               </div>
          </div>
          <!-- 导航栏下的轮播图 -->
          <div class="lb_png">
                <img src="images/lb1.jpg" alt="">
          </div>
          <!-- 京东超市轮播图 -->
          <div class="floor_item">
            <ul>
                <li>
                    <img src="images/lg1.png" alt="">
                    <span>京东超市</span>
                </li>
                <li>
                    <img src="images/lg2.png" alt="">
                    <span>数码电器</span>
                </li>
                <li>
                    <img src="images/lg3.png" alt="">
                    <span>京东新百货</span>
                </li>
                <li>
                    <img src="images/lg4.png" alt="">
                    <span>京东生鲜</span>
                </li>
                <li>
                    <img src="images/lg5.png" alt="">
                    <span>京东到家</span>
                </li>
                <li>
                    <img src="images/lg6.png" alt="">
                    <span>充值缴费</span>
                </li>
                <li>
                    <img src="images/lg7.png" alt="">
                    <span>附近好店</span>
                </li>
                <li>
                    <img src="images/lg8.png" alt="">
                    <span>领券</span>
                </li>
                <li>
                    <img src="images/lg9.png" alt="">
                    <span>领金贴</span>
                </li>
                <li>
                    <img src="images/lg10.png" alt="">
                    <span>PLUS会员</span>
                </li>
            </ul>
          </div>
          <!-- 京东秒杀 -->
          <div class="jdms">
            <!-- div中部 -->
            <div class="jdms_content">
                <!-- 京东秒杀 -->
                <div class="jdms_title">
                    <div class="jdms_title_left">
                        <span>京东秒杀</span><van-count-down :time="time" />
                    </div>
                    <div class="jdms_title_right">
                        <span>爆款轮番秒</span>
                    </div>
                </div>
                <div class="jdms_list">
                    <ul>
                        <li>
                            <img src="images/jdms01.jpg" alt="">
                            <span>￥369</span>
                        </li>
                        <li>
                            <img src="images/jdms02.jpg" alt="">
                            <span>￥40.5</span>
                        </li>
                        <li>
                            <img src="images/jdms03.jpg" alt="">
                            <span>￥59.9</span>
                        </li>
                         <li>
                            <img src="images/jdms04.jpg" alt="">
                            <span>￥149</span>
                        </li>
                        <li>
                            <img src="images/jdms05.jpg" alt="">
                            <span>￥799</span>
                        </li>
                         <li>
                            <img src="images/jdms06.jpg" alt="">
                            <span>￥184</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>

          <div class="jd_shop">
                <div class="jd_shop_left">
                    <div class="jd_shop_list">
                        <a class="goods">
                            <div class="goods_left">
                                <div class="goods_img">
                                <img src="images/goods1.jpg" alt="">
                            </div>
                            <div class="goods_info">
                                <div class="goods_name">
                                    ZENDURE 征拓PD20W快充充电器套装适用苹果iPhone13/苹果12/11/SE手机快充头 【20W Type-C口PD快充充电器】
                                </div>
                                <div class="goods_row">
                                    <div class="goods_price">
                                        ￥39.90
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="goods_right">
                                <div class="goods_img">
                                <img src="images/goods2.jpg" alt="">
                            </div>
                            <div class="goods_info">
                                <div class="goods_name">
                                    小米（MI） 移动电源3 20000mAh充电宝 USB-C 18W双向快充版可上飞机2万毫安大容量 小米电源3 20000mAh USB-C双向快充版
                                </div>
                                <div class="goods_row">
                                    <div class="goods_price">
                                        ￥108.90
                                    </div>
                                </div>
                            </div>
                            </div> 
                        </a>
                        <a class="goods">
                            <div class="goods_left">
                                <div class="goods_img">
                                <img src="images/goods3.jpg" alt="">
                            </div>
                            <div class="goods_info">
                                <div class="goods_name">
                                    京东云无线宝 JOY限量版盲盒 能赚京豆的路由器 年货礼盒 128G高通5核处理器  无线穿墙路由礼品
                                </div>
                                <div class="goods_row">
                                    <div class="goods_price">
                                        ￥699.00
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="goods_right">
                                <div class="goods_img">
                                <img src="images/goods4.jpg" alt="">
                            </div>
                            <div class="goods_info">
                                <div class="goods_name">
                                    小熊（Bear）颈椎按摩器 颈部按摩仪 肩部颈部护理脉冲肩颈按摩仪 办公室脖子护颈仪 节日礼物送礼AMQ-B04K1
                                </div>
                                <div class="goods_row">
                                    <div class="goods_price">
                                        ￥169.00
                                    </div>
                                </div>
                            </div>
                            </div> 
                        </a>
                         <a class="goods">
                            <div class="goods_left">
                                <div class="goods_img">
                                <img src="images/goods1.jpg" alt="">
                            </div>
                            <div class="goods_info">
                                <div class="goods_name">
                                    ZENDURE 征拓PD20W快充充电器套装适用苹果iPhone13/苹果12/11/SE手机快充头 【20W Type-C口PD快充充电器】
                                </div>
                                <div class="goods_row">
                                    <div class="goods_price">
                                        ￥39.90
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="goods_right">
                                <div class="goods_img">
                                <img src="images/goods2.jpg" alt="">
                            </div>
                            <div class="goods_info">
                                <div class="goods_name">
                                    小米（MI） 移动电源3 20000mAh充电宝 USB-C 18W双向快充版可上飞机2万毫安大容量 小米电源3 20000mAh USB-C双向快充版
                                </div>
                                <div class="goods_row">
                                    <div class="goods_price">
                                        ￥108.90
                                    </div>
                                </div>
                            </div>
                            </div> 
                        </a>
                        <a class="goods">
                            <div class="goods_left">
                                <div class="goods_img">
                                <img src="images/goods3.jpg" alt="">
                            </div>
                            <div class="goods_info">
                                <div class="goods_name">
                                    京东云无线宝 JOY限量版盲盒 能赚京豆的路由器 年货礼盒 128G高通5核处理器  无线穿墙路由礼品
                                </div>
                                <div class="goods_row">
                                    <div class="goods_price">
                                        ￥699.00
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="goods_right">
                                <div class="goods_img">
                                <img src="images/goods4.jpg" alt="">
                            </div>
                            <div class="goods_info">
                                <div class="goods_name">
                                    小熊（Bear）颈椎按摩器 颈部按摩仪 肩部颈部护理脉冲肩颈按摩仪 办公室脖子护颈仪 节日礼物送礼AMQ-B04K1
                                </div>
                                <div class="goods_row">
                                    <div class="goods_price">
                                        ￥169.00
                                    </div>
                                </div>
                            </div>
                            </div> 
                        </a>
                        <a class="goods">
                            <div class="goods_left">
                                <div class="goods_img">
                                <img src="images/goods3.jpg" alt="">
                            </div>
                            <div class="goods_info">
                                <div class="goods_name">
                                    京东云无线宝 JOY限量版盲盒 能赚京豆的路由器 年货礼盒 128G高通5核处理器  无线穿墙路由礼品
                                </div>
                                <div class="goods_row">
                                    <div class="goods_price">
                                        ￥699.00
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="goods_right">
                                <div class="goods_img">
                                <img src="images/goods4.jpg" alt="">
                            </div>
                            <div class="goods_info">
                                <div class="goods_name">
                                    小熊（Bear）颈椎按摩器 颈部按摩仪 肩部颈部护理脉冲肩颈按摩仪 办公室脖子护颈仪 节日礼物送礼AMQ-B04K1
                                </div>
                                <div class="goods_row">
                                    <div class="goods_price">
                                        ￥169.00
                                    </div>
                                </div>
                            </div>
                            </div> 
                        </a>
                    </div>
                </div>
          </div>
        </div>
          
     </main>
</template>
<script>
export default {
  data() {
    return {
      time: 6 * 60 * 60 * 1000,
    };
  },
};
</script>
<style scoped>
*{
     margin: 0px;
     padding: 0px;
     list-style: none;
     cursor: pointer;
     text-decoration: none;
}
.index_main{
    background: #f2f2f2;
}
.goods_name{
    text-align: left;
    line-height: 1.05rem;
    height: 2.1rem;
    font-size: 0.7rem;
    font-family: -apple-system, Helvetica, sans-serif;
    overflow: hidden;
    color: #434343;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    word-break: break-all;
    -webkit-box-orient: vertical;
}
div{
    box-sizing: border-box;
}
.Search_header{
    display: block;
    position: fixed;
    position: relative;
    min-height: 44px;
    left: 0;
    right: 0;
    z-index: 15;
    width: 100%;
}
.header_bg{
    background:red;
    position: absolute;
    top: 0;
    height: 9.25rem;
    width: 100%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
}
.header_left{
    z-index: 120;
    position: absolute;
    width: 40px;
    height: 44px;
}
.header_left span{
    margin: 12px 0 0 9px;
    width: 20px;
    height: 18px;
    display: block;
    background: url('../../public/images/nav_button.png') no-repeat;
    background-size: 100% 100%;
}
.header_middle{
    margin: 7px 17px 0px 63px;
    height: 30px;
    position: relative;
    display: inline-block;
    width: 70%;
    border: none;
    border-radius: 15px;
    height: 30px;
    overflow: hidden;
    background: #f7f7f7;
    font-size: 12px;
    -webkit-box-align: center;
    line-height: 30px;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 35px;
    padding-right: 10px;
    box-sizing: border-box;
    
}

.m_left{
    display: block;
    width: 20px;
    height: 15px;
    background: url('../../public/images/jd_logo.png') no-repeat;
    background-size: 20px 15px;
    margin: 8px 8px 4px -24px;
    position: relative;
    z-index: 1;
    float: left;
}
.m_right span{
    margin-left: -1px;
    border-left: 1px solid grey;
    display: block;
    width: 18px;
    height: 15px;
    background: url('../../public/images/jd_sprites.png') no-repeat;
    background-position: -80px 0;
    background-size: 200px;
    margin: 8px 0 0 15px;
    position: relative;
    z-index: 1;
    float: left;
}
.header_right{
    z-index: 120;
    overflow: hidden;
    position: absolute;
    top: 10px;
    right: 0;
    width: 40px;
    height: 44px;
    color: #f7f7f7;
    font-weight: bold;
}
.lb_png{
    width: 95%;
    height: 9.35rem;
    padding: 0;
    position: relative;
    min-height: 0;
    z-index: 20;
    margin-top: 10px;
    margin: 0px auto;
}
.lb_png li{
    width: 100%;
    height: 9.35rem;
    left: 100%;
    top: 0;
    margin-left: 0.7rem;
}
.lb_png li >a {
    display: block;
    overflow: hidden;
    width: -webkit-calc(100% - 1.25rem);
    height: 7rem;
    margin: 0 auto;
    top: 2.25rem;
    position: relative;
    border-radius: 0.35rem;
}
.lb_png  img{
    display: block;
    overflow: hidden;
    height: 100%;
    border-radius: 15px;
    margin: 0px auto;
    width: 100%;
}
.floor_item{
        width: 96%;
    overflow: hidden;
    margin-top: 15px;
    background: #fff;
    float: left;
    border-radius: 0.6rem;
    margin-left: 0.5rem;
    margin-right: 1.5rem;
}
.floor_item li{
    width: 20%;
    text-align: center;
    float: left;
    padding-bottom: 20px;
}
.floor_item img{
    width: 2rem;
    margin-top: 0.5rem;
}
.floor_item span{
    display: block;
    margin-top: 0.3rem;
    font-size: .6rem;
    color: #666;
    }
.jdms{
    font-size: 16px;
    width: 100%;
    overflow: hidden;
}
.jdms_content{
    height: 16vh;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    position: relative;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    box-shadow: 0 1px 1px #f2f2f2;
    border-radius: 0.6rem;
    overflow: hidden;
    background: #fff;
}
.jdms_title_left{
    height: 1.35rem;
    margin-top: 0.4rem;
    margin-right: 0.25rem;
    margin-left: 0.5rem;
    font-family: PingFangSC-Semibold;
    font-size: .7rem;
    color: #333;
    letter-spacing: 0;
    line-height: 1.2;
    float: left;
    }
.jdms_title_right{
    float: right;
    margin-top: 5px;

}
.jdms_title_right span{
    display: inline-block;
    color: #f23030;
    font-size: .6rem;
    text-align: right;
    position: relative;
    padding-right: 1.1rem;
}
.jdms_list{
    margin:0px auto;
    margin-top: 30px;
    margin-left: 15px;
}
.jdms_list span{
    color: red;
    font-weight: bold;
}
.jdms_list ul{
    position: relative;
    background-color: #fff;
    width: 100%;
}
.jdms_list ul li{
    margin-top: 0.5rem;
    float: left;
    padding-right: 5px;
    width: 54px;
}
.jdms_list li img{
    width: 100%;
    height: auto;
    overflow: hidden;
    min-height: 1px;
    min-width: 1px;
} 
.jd_shop{
    display: flex;
    flex-wrap: wrap;
    padding: 0.25rem;
    height: 133vh;
}
.jd_shop_left{
    width: 100%;
    box-sizing: border-box;
}
.jd_shop_right{
    box-sizing: border-box;
}
.jd_shop_list{
    padding: 0.25rem;
}
.goods{
    display: block;
    width: 100%;
    background: #ffffff;
    border-radius: 0.4rem;
    overflow: hidden;
    position: relative; 
}
.goods_img{
    width: 8.625rem;
    height: 8.625rem;
    margin-bottom: 0.25rem;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
}
.goods_img img{
        height: 100%;
}
.goods_info{
    padding: 0 0.5rem 0.5rem;
}
.goods_row{
    display: flex;
    height: 1.5rem;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: hidden;
}
.goods_price{
    font-style: normal;
    font-family: JDZH-Regular, sans-serif;
    display: inline-block;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #ff4142;
}
.goods_left{
    width: 50%;
    float: left;
}
.goods_right{
    width: 50%;
    float: right;
    padding-left: 1rem;
}
::v-deep .van-count-down{
    margin-left: 10px;
    display: inline;
}
</style>