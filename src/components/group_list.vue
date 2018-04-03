<template>
    <div class="container">
      <div class="bg-all distance">
      <div class="sq-dynamic">
        <div class="dynamic-head">
          <div class="dynamic-head-l"><img src="../assets/image/head.png" alt=""></div>
          <div class="dynamic-head-r">
            <h2>Rena</h2>
            <p>2-23</p>
          </div>
        </div>
        <div class="dynamic-content">
          <div class="con-font">即使相隔光年，我们终能相遇。</div>
          <div class="photo">
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
          </div>
          <div class="con-footer">
            <div class="dy-share"><img src="../assets/image/share.png" alt=""> <span>0</span></div>
            <div class="dy-msg"><img src="../assets/image/img-msg.png" alt=""> <span>34</span></div>
            <div class="dy-zan"><img src="../assets/image/heart.png" alt=""> <span>34</span></div>
          </div>
        </div>
      </div>

        <div class="sq-dynamic">
          <div class="dynamic-head">
            <div class="dynamic-head-l"><img src="../assets/image/head.png" alt=""></div>
            <div class="dynamic-head-r">
              <h2>Rena</h2>
              <p>2-23</p>
            </div>
          </div>
          <div class="dynamic-content">
            <div class="con-font">即使相隔光年，我们终能相遇。</div>
            <div class="photo">
              <div class="mov">我是电影模块</div>
            </div>
            <div class="con-footer">
              <div class="dy-share"><img src="../assets/image/share.png" alt=""> <span>0</span></div>
              <div class="dy-msg"><img src="../assets/image/img-msg.png" alt=""> <span>34</span></div>
              <div class="dy-zan"><img src="../assets/image/heart.png" alt=""> <span>34</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "group_list"
    }
</script>

<style scoped>
  .container{
    background: #F8F8F8;
  }
  .distance{
    padding-left: .12rem;
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
    font:700  .16rem PingFangSC ;
    color: #333333;
  }
  .dynamic-head-r p{
    font: .12rem PingFangSC;
    color: #999999;
  }
  .bg-all{
    background: #ffffff;
  }
  .sq-dynamic{
      margin-bottom: .08rem;
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
    height: .45rem;
    margin: .1rem .12rem 0 0;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
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
  .dy-share{
    margin-left: .33rem;
  }
  .dy-zan{
    margin-right: .33rem;
  }
  .dy-share img{
    width: .14rem;
    height: .14rem;
  }
  .dy-share span{
    display: inline-block;
    font: .14rem/.45rem PingFangSC;
    color: #999999;
  }
  .dy-msg img{
    width: .18rem;
    height: .15rem;
  }
  .dy-msg span{
    display: inline-block;
    font: .14rem/.45rem PingFangSC;
    color: #999999;
  }
  .dy-zan span{
    display: inline-block;
    font: .14rem/.45rem PingFangSC;
    color: #999999;
  }
  .dy-zan img{
    width: .15rem;
    height: .14rem;
  }
 /*电影*/
  .mov{
    width: 3.51rem;
    height: 1.61rem;
    background: lightpink;
  }
</style>
