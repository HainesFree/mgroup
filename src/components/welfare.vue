<template>
    <div class="box">
        <div class="help-num">已帮助 <span>353，343</span>位阿尔茨海默症患者</div>
        <div class="player">
          <!--轮播图-->
        <swiper :options="swiperOption">

          <swiper-slide><img src="../assets/image/bg.png" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/image/bg.png" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/image/bg.png" alt=""></swiper-slide>

          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        </div>
        <div class="pub-grp">
          <div class="pub-left">公益社群</div>
          <div class="pub-right">查看更多</div>
        </div>
        <!--左右滑动--公益社群-->
        <div class="slide-box">
          <div class="slide-item">
            <div class="slide-title"> <span>中国人口福利基金会</span></div>
            <div class="slide-people"><span>3456</span>人参与</div>
          </div>
          <div class="slide-item">
            <div class="slide-title"> <span>上海分部—公益组织</span></div>
            <div class="slide-people"><span>7756</span>人参与</div>
          </div>
          <div class="slide-item">
            <div class="slide-title"> <span>中国人口福利基金会</span></div>
            <div class="slide-people"><span>4566</span>人参与</div>
          </div>
        </div>

      <div class="pub-grp">
        <div class="pub-left">发现社群</div>
        <div class="pub-right">查看更多</div>
      </div>
      <!--左右滑动--发现社群-->
      <div class="slide-box">
        <div class="slide-item2">
           <h1 class="slide-title2">蓝海社群</h1>
           <h1 class="slide-people2">3456人参与</h1>
        </div>
        <div class="slide-item2">
          <div class="slide-title2"> <span>梦芭莎社群</span></div>
          <div class="slide-people2"><span>7756</span>人参与</div>
        </div>
        <div class="slide-item2">
          <div class="slide-title2"> <span>中国人口福利社群</span></div>
          <div class="slide-people2"><span>4566</span>人参与</div>
        </div>
      </div>
      <!--社群动态-->
      <div class="pub-grp">
        <div class="pub-left">社群动态</div>
      </div>
      <div class="sq-dynamic">
        <div class="dynamic-head">
          <div class="dynamic-head-l"><img src="../assets/image/head.png" alt=""></div>
          <div class="dynamic-head-r">
            <h2>魔都探索队</h2>
            <p>2018-2-23 13:30:00</p>
          </div>
        </div>
        <div class="dynamic-content">
            <div class="con-font">即使相隔光年，我们终能相遇。</div>
            <div class="photo">
              <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
              <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
              <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
            </div>
            <div class="con-footer">归属于：中国人口福利基金会</div>
        </div>
      </div>

      <div class="sq-dynamic">
        <div class="dynamic-head">
          <div class="dynamic-head-l"><img src="../assets/image/head.png" alt=""></div>
          <div class="dynamic-head-r">
            <h2>魔都探索队</h2>
            <p>2018-2-23 13:30:00</p>
          </div>
        </div>
        <div class="dynamic-content">
          <div class="con-font">即使相隔光年，我们终能相遇。</div>
          <div class="photo">
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
          </div>
          <div class="con-footer">归属于：中国人口福利基金会</div>
        </div>
      </div>
    </div>
</template>

<script>
import  "../assets/js/rem"
export default {
  name: 'welfare',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay:true
      }
    }
  }
}
</script>
<style scoped>
.box::-webkit-scrollbar {display:none}
.box{
  padding: 0 0 0 .12rem;
  overflow-y: hidden;
}
.help-num{
  font: .12rem PingFangSC;
  color: #999999;
  text-align: center;
  margin-bottom: .03rem;
}
.help-num span{
  font: .16rem PingFangSC;
  color: #FF7272;
}
.player{
  width: 3.51rem;
  height: 1.32rem;
  padding-bottom: .25rem;
  background: #fff;
}
.player img{
  width: 3.51rem;
  height: 1.32rem;
}
.pub-grp{
  display: flex;
  justify-content: space-between;
  padding-bottom: .16rem;
  background: #fff;
}
.pub-left{
  width: .84rem;
  height: .28rem;
  font: .2rem/.28rem  PingFangSC ;
  font-weight: 700;
  color: #333;
}
.pub-right{
  width: .51rem;
  height: .28rem;
  font: .12rem/.28rem  PingFangSC ;
  color: #999999;
  padding-right: .12rem;
}
.slide-box{
    height: .74rem;
    display: -webkit-box;
    overflow-x: auto;
    /*适应苹果*/
    -webkit-overflow-scrolling:touch;
    padding-bottom: .25rem;
    background: #fff;
  }
.slide-box::-webkit-scrollbar {
  display: none;
}
.slide-item{
  background: pink;
  width: 1.64rem;
  /*height: .74rem;*/
  box-sizing:border-box;
  margin-right: .05rem;
  padding: .13rem .06rem 0 .06rem;
  border-radius: .05rem;
}
.slide-title{
  width: 1.53rem;
  height: .22rem;
  font: .16rem PingFangSC;
  font-weight: 700;
  color: #FF7272;
  padding: 0 0 .09rem 0;
}
.slide-people{
  width: .84rem;
  height: .15rem;
  font: .14rem PingFangSC;
  color: #666666;
  }
.slide-people span{
  font: .16rem PingFangSC;
  color: #6d6a6a;
  font-weight: 700;
}
.slide-item2{
  width: 1.64rem;
  /*height: .8rem;*/
  background: palevioletred;
  text-align: center;
  border-radius: .05rem;
  margin-right: .05rem;
}
.slide-item2 .slide-title2{
  font: .15rem PingFangSC;
  color: #fff;
  padding-top: .19rem;
}

.slide-item2 .slide-people2{
  color: #F8C822;
  font: .12rem PingFangSC;
  padding-top: .03rem;
}
.dynamic-head{
  display: flex;
  padding-bottom: .12rem;
  background: #ffffff;
}
.dynamic-head-l{
  position: relative;
  width: .4rem;
  height: .4rem;
  padding-right: .15rem;
}
.dynamic-head-l img{
  position: absolute;
  width: .38rem;
  height: .38rem;
}
.dynamic-head-r h2{
  font: .16rem PingFangSC;
  color: #333333;
}
.dynamic-head-r p{
  font: .12rem PingFangSC;
  color: #999999;
}
.sq-dynamic{
  /*background: #ffffff;*/
  /*background: #F8F8F8;*/
}
.photo{
  width: 100%;
  overflow: hidden;
  background: #ffffff;
}
.con-font{
  padding-bottom: .08rem;
  font: .15rem PingFangSC;
  color: #444444;
  background: #ffffff;
}
.con-img img{
  width: 1.14rem;
  height: 1.14rem;
  float: left;
  padding:0 .05rem .05rem 0;
}
.con-footer{
  position: relative;
  height: .3rem;
  font: .1rem/.3rem PingFangSC;
  color: #576B95;
  text-align: right;
  margin: .1rem .12rem 0 0;
}
.con-footer::after{
  content: " ";
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-bottom: 1px solid #EEEEEE;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
}
</style>
