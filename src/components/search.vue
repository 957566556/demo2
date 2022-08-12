<template>
    <main>
        <div class="search_main">
                    <div class="search_header">
            <div class="search_bar">
                <span></span>
            </div>
            <div class="search_input">
                <van-search v-model="value" placeholder="书籍"  shape="round" readonly />
            </div>
        </div>
        <div class="search_list">
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2"/>
                <van-dropdown-item v-model="value3" :options="option3" />
                <van-dropdown-item v-model="value4" :options="option4" />
            </van-dropdown-menu>

            <van-tabs type="card">
                <van-tab title="京东物流"></van-tab>
                <van-tab title="新品"></van-tab>
                <van-tab title="京东物流"></van-tab>
                <van-tab title="新品"></van-tab>
                 <van-tab title="京东物流"></van-tab>
                <van-tab title="新品"></van-tab>
                <van-tab title="京东物流"></van-tab>
                <van-tab title="新品"></van-tab>
                <van-tab title="京东物流"></van-tab>
                <van-tab title="新品"></van-tab>
                <van-tab title="京东物流"></van-tab>
                <van-tab title="新品"></van-tab>
            </van-tabs>
        </div>
        
        <div class="search_goods">
            <div class="goods_book">
                <div class="book_main">
                    <div class="book_left">
                      <router-link to="/detail"><img src="images/books1.png" alt=""></router-link>  
                    </div>
                    <div class="book_right">
                        <div class="book_title">
                            <div class="book_title_h1">
                                季羡林：时间从来不语，却回答了所有问题(文学大师季羡林百岁人生的智慧精粹未来不足惧过往不须泣心灵励志)
                            </div>
                            <p class="p1">季羡林写给年轻人的生命礼物！与大师共语，品味人生百态。活得通透，过得舒心，顺逆总平常，得失在人心。人民日报倡导的生活态度！</p>
                            <p class="p2">作者：季羡林</p>
                        </div>
                        <div class="book_footer">
                            <div class="book_price">
                                <span>￥55</span>
                            </div>
                            <div class="book_other">
                                <div class="book_icon">
                                    <img src="images/zy_logo.png" alt="">
                                    <span>20万+条评论 好评率99%</span>
                                    
                                </div>
                            </div>
                            <div class="book_shop">
                                <span>紫图京东自营官方旗舰店</span><span class="shop_jt"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="goods_book">
                <div class="book_main">
                    <div class="book_left">
                        <img src="images/books1.png" alt="">
                    </div>
                    <div class="book_right">
                        <div class="book_title">
                            <div class="book_title_h1">
                                季羡林：时间从来不语，却回答了所有问题(文学大师季羡林百岁人生的智慧精粹未来不足惧过往不须泣心灵励志)
                            </div>
                            <p class="p1">季羡林写给年轻人的生命礼物！与大师共语，品味人生百态。活得通透，过得舒心，顺逆总平常，得失在人心。人民日报倡导的生活态度！</p>
                            <p class="p2">作者：季羡林</p>
                        </div>
                        <div class="book_footer">
                            <div class="book_price">
                                <span>￥55</span>
                            </div>
                            <div class="book_other">
                                <div class="book_icon">
                                    <img src="images/zy_logo.png" alt="">
                                    <span>20万+条评论 好评率99%</span>
                                    
                                </div>
                            </div>
                            <div class="book_shop">
                                <span>紫图京东自营官方旗舰店</span><span class="shop_jt"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="goods_book">
                <div class="book_main">
                    <div class="book_left">
                        <img src="images/books1.png" alt="">
                    </div>
                    <div class="book_right">
                        <div class="book_title">
                            <div class="book_title_h1">
                                季羡林：时间从来不语，却回答了所有问题(文学大师季羡林百岁人生的智慧精粹未来不足惧过往不须泣心灵励志)
                            </div>
                            <p class="p1">季羡林写给年轻人的生命礼物！与大师共语，品味人生百态。活得通透，过得舒心，顺逆总平常，得失在人心。人民日报倡导的生活态度！</p>
                            <p class="p2">作者：季羡林</p>
                        </div>
                        <div class="book_footer">
                            <div class="book_price">
                                <span>￥55</span>
                            </div>
                            <div class="book_other">
                                <div class="book_icon">
                                    <img src="images/zy_logo.png" alt="">
                                    <span>20万+条评论 好评率99%</span>
                                    
                                </div>
                            </div>
                            <div class="book_shop">
                                <span>紫图京东自营官方旗舰店</span><span class="shop_jt"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="goods_book">
                <div class="book_main">
                    <div class="book_left">
                        <img src="images/books1.png" alt="">
                    </div>
                    <div class="book_right">
                        <div class="book_title">
                            <div class="book_title_h1">
                                季羡林：时间从来不语，却回答了所有问题(文学大师季羡林百岁人生的智慧精粹未来不足惧过往不须泣心灵励志)
                            </div>
                            <p class="p1">季羡林写给年轻人的生命礼物！与大师共语，品味人生百态。活得通透，过得舒心，顺逆总平常，得失在人心。人民日报倡导的生活态度！</p>
                            <p class="p2">作者：季羡林</p>
                        </div>
                        <div class="book_footer">
                            <div class="book_price">
                                <span>￥55</span>
                            </div>
                            <div class="book_other">
                                <div class="book_icon">
                                    <img src="images/zy_logo.png" alt="">
                                    <span>20万+条评论 好评率99%</span>
                                    
                                </div>
                            </div>
                            <div class="book_shop">
                                <span>紫图京东自营官方旗舰店</span><span class="shop_jt"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="goods_book">
                <div class="book_main">
                    <div class="book_left">
                        <img src="images/books1.png" alt="">
                    </div>
                    <div class="book_right">
                        <div class="book_title">
                            <div class="book_title_h1">
                                季羡林：时间从来不语，却回答了所有问题(文学大师季羡林百岁人生的智慧精粹未来不足惧过往不须泣心灵励志)
                            </div>
                            <p class="p1">季羡林写给年轻人的生命礼物！与大师共语，品味人生百态。活得通透，过得舒心，顺逆总平常，得失在人心。人民日报倡导的生活态度！</p>
                            <p class="p2">作者：季羡林</p>
                        </div>
                        <div class="book_footer">
                            <div class="book_price">
                                <span>￥55</span>
                            </div>
                            <div class="book_other">
                                <div class="book_icon">
                                    <img src="images/zy_logo.png" alt="">
                                    <span>20万+条评论 好评率99%</span>
                                    
                                </div>
                            </div>
                            <div class="book_shop">
                                <span>紫图京东自营官方旗舰店</span><span class="shop_jt"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>

        </div>

    </main>
</template>

<style scoped>
.goods_book{
    padding-top: 10px;
        display: block;
    position: relative;
    padding: 5px 0 5px 10px;
    background-color: #fff;
}
.book_main{
    position: relative;
    padding-left: 120px;
}
.book_left img{
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    width: 120px;
    height: 120px;
    overflow: hidden;
}
.book_right{
        min-height: 120px;
    padding-bottom: 8px;
        box-sizing: border-box;
    padding: 0 10px;
    overflow: hidden;
    line-height: 1;
}
.book_title_h1{
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 19px;
    word-break: break-all;
    margin-top: 8px;
    color: #333;
    line-height: 1.36;
}
.p1{
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    line-height: 1.42;
    color: #999;
}
.p2{
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    line-height: 1.42;
    color: #999;
}
.book_price{
    margin-top: 5px;
    margin-right: 2px;
    display: inline-block;
    height: 18px;
}
.book_price span{
    color: red;
}
.book_other{
        font-size: 12px;
    height: 20px;
    padding: 5px 0 2px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 1.2;
}
.book_icon{
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 5px;
    height: 14px;
}
.book_icon img{
    height: 100%;  
}
.book_icon span{
    margin-left: 5px;
    font-size: 12px;
    color: #999;
}
.book_shop{
    box-sizing: border-box;
    padding-top: 4px;
    height: 19px;
    color: #999;
    font-size: 12px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
}
.shop_jt{
    border-top: 1px solid #999;
    border-left: 1px solid #999;
    transform-origin: 50%;
    transform: rotate(135deg);
    width: -12px;
    height: 8px;
    right: 5px;
    top: 0%;
    left: -17px;
}
.book_shop span{
    position: relative;
    display: inline-block;
    padding-right: 14px;
    line-height: 14px;
    max-width: 100%;
    box-sizing: border-box;
    vertical-align: bottom;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
    text-decoration: none;
}
.search_header{
    position: fixed;
    width: 100vw;
}
.search_bar{
    width: 14%;
    float: left;
}
.search_input{
    width: 70%;
    float: left;
    margin-top: 5px;
    margin-left: 10px;
}
.search_bar span{
    margin: 12px 0 0 10px;
    width: 20px;
    height: 20px;
    display: block;
    background: url('../../public/images/nav_back.png');
    background-size: 100% 100%;
}
::v-deep .van-cell{
    margin-left: 10px;
}
.search_list{
    padding-top: 43px;
    min-height: 88px;
}
::v-deep .van-dropdown-menu__bar{
    box-shadow: none;
}
::v-deep .van-tabs__nav--card{
    margin: 0px;
    border: none;
    background: #f2f2f7;
}
::v-deep .van-tabs__nav--card .van-tab{
    color: #666;
    border: none;
}
::v-deep .van-tabs__nav--card .van-tab.van-tab--active {
    background-color: white;
}
.search_goods{
    overflow:auto;
    height: 100vh;
}
</style>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 'a',
      value4: 0,
      option1: [
        { text: '综合', value: 0 },
        { text: '最新上架', value: 1 },
        { text: '价格最低', value: 2 },
        { text: '价格最高', value: 3 },
        { text: '评价最多', value: 4 },
      ],
      option2: [
        { text: '销量', value: 0 },
      ],

      option3: [
        { text: '有货优先', value: 'a' },
        { text: '货到付款', value: 'b' },
        { text: '211限时达', value: 'c' },
      ],
        option4: [
        { text: '筛选', value: 0 },
      ],
    };
  },
};
</script>
