<template>
  <div class="container">
    <div class="content-top">
      <!--社群名称-->
      <div class="sq-name">
        <div class="sq-name-left">社群名称</div>
        <div class="sq-name-right">
          <input type="text" placeholder="请输入社群名称" class="name-inp">
          <button class="name-btn">检测</button>
        </div>
      </div>
     <!--&lt;!&ndash;社区头像&ndash;&gt;-->
      <!--<div class="sq-head">-->
        <!--<div class="sq-head-left">社群头像</div>-->
        <!--<div class="sq-head-right"><img src="../assets/image/add-img.png" alt="" class="add-img"></div>-->
      <!--</div> -->
      <!--&lt;!&ndash;社群简介&ndash;&gt;-->
      <!--<div class="sq-introduce">-->
        <!--<div class="introduce-title">社群简介</div>-->
        <!--<div class="introduce-cont">-->
          <!--<textarea placeholder="请输入社群简介" class="intro-text"></textarea>-->
        <!--</div>-->
        <!--<span class="font-num">0/200</span>-->
      <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash;下部分&ndash;&gt;-->
    <!--<div class="content-bottom">-->
      <!--&lt;!&ndash;区域&ndash;&gt;-->
      <!--<div class="sq-zone">-->
        <!--<div class="zone-left">社群区域</div>-->
        <!--<div class="zone-sel">请选择社群区域 <img src="../assets/image/right-slice.png" alt=""></div>-->
      <!--</div>-->
      <!--&lt;!&ndash;社群类别&ndash;&gt;-->
      <!--<div class="sq-zone">-->
        <!--<div class="zone-left">社群类别</div>-->
        <!--<div class="zone-sel">请选择社群区域 <img src="../assets/image/right-slice.png" alt=""></div>-->
      <!--</div>-->
      <!--&lt;!&ndash;社群封面&ndash;&gt;-->
      <!--<div class="sq-face">-->
        <!--<div class="face-title">社群封面 <span>(选填)</span></div>-->
        <!--<div class="face-img"><img src="../assets/image/add-bimg.png" alt=""></div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="content-btn"><buttton class="create-btn">确认创建</buttton></div>-->

  </div>
  </div>
</template>

<script>
  // import "../assets/css/media.css"
    export default {
        name: "create_group"
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*width: 100%;*/
    /*height: 100%;*/
    background: #f2f2f2;
  }
  .content-top{
    /*width: 100%;*/
    height: 7.44rem;
    margin-bottom: 0.3rem;
    padding-left: .4rem;
    background: #fff;
  }
  .sq-name{
    position: relative;
    /*width: 100%;*/
    height: 1.25rem;
    border-bottom: 1px solid #D6D6D6;
  }
  .sq-name-left{
    font-family: PingFangSC-Regular;
    font-size: .44rem;
    color: #333333;
    line-height: 1.25rem;
  }
  /*.sq-name-right .name-inp{*/
    /*width: 2.66rem;*/
    /*height: .53rem;*/
    /*position: absolute;*/
    /*top: .36rem;*/
    /*right: 2.11rem;*/
    /*border: none;*/
    /*outline-style: none;*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: .38rem;*/
    /*color: #999999;*/
  /*}*/
  /*.sq-name-right .name-btn{*/
    /*width: 1.5rem;*/
    /*height: .74rem;*/
    /*position: absolute;*/
    /*top: 0.25rem;*/
    /*right: .4rem;*/
    /*border: none;*/
    /*background: #FE7272;*/
    /*border-radius: .03rem;*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: .36rem;*/
    /*color: #FFFFFF;*/
  /*}*/
  /*.sq-head{*/
    /*width: 100%;*/
    /*height: 2.6rem;*/
    /*display: flex;*/
    /*justify-content: space-between;*/
    /*border-bottom:1px solid #D6D6D6;*/
  /*}*/
  /*.sq-head-left{*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: .44rem;*/
    /*color: #333333;*/
    /*line-height:2.6rem;*/
  /*}*/
  /*.sq-head-right .add-img{*/
    /*width: 1.8rem;*/
    /*height: 1.8rem;*/
    /*margin:.4rem .4rem 0 0;*/
  /*}*/
  /*.sq-introduce{*/
    /*width: 100%;*/
    /*height: 3.55rem;*/
    /*position: relative;*/
    /*background: #fff;*/
  /*}*/
  /*.introduce-title{*/
    /*margin-top: .24rem;*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: .44rem;*/
    /*color: #333333;*/
  /*}*/
  /*.introduce-cont .intro-text{*/
    /*width: 100%;*/
    /*padding-right: .4rem;*/
    /*margin-top: .1rem;*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: .40rem;*/
    /*color: #AEAEAE;*/
    /*border: none;*/
    /*outline-style: none;*/
    /*resize: none;*/
  /*}*/
  /*.font-num{*/
    /*width: 1.11rem;*/
    /*height: .53rem;*/
    /*position: absolute;*/
    /*right: .4rem;*/
    /*bottom: .1rem;*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: .38rem;*/
    /*color: #999999;*/
  /*}*/
  /*.content-bottom{*/
    /*width: 100%;*/
    /*background: #fff;*/
    /*padding-left:.4rem;*/
  /*}*/
  /*.sq-zone{*/
    /*height: 1.25rem;*/
    /*display: flex;*/
    /*justify-content: space-between;*/
    /*border-bottom:1px solid #D6D6D6;*/
  /*}*/
  /*.zone-left{*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: .44rem;*/
    /*color: #333333;*/
    /*line-height: 1.25rem;*/
  /*}*/
  /*.zone-sel{*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: .38rem;*/
    /*color: #999999;*/
    /*line-height: 1.25rem;*/
  /*}*/
  /*.zone-sel img{*/
    /*width: .34rem;*/
    /*height: .34rem;*/
    /*vertical-align: middle;*/
    /*margin:0 .4rem  0 .08rem;*/
  /*}*/
  /*.sq-face{*/
    /*width: 100%;*/
    /*padding-bottom: .41rem;*/
  /*}*/
  /*.face-title{*/
    /*height: 1.18rem;*/
    /*line-height: 1.18rem;*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: .44rem;*/
    /*color: #333333;*/

  /*}*/
  /*.face-title span{*/
    /*display: inline-block;*/
    /*width: 1.52rem;*/
    /*height: .53rem;*/
    /*text-align: center;*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: .38rem;*/
    /*color: #999999;*/
  /*}*/
  /*.face-img{width: 9.98rem;height: 2.94rem}*/
  /*.face-img img{*/
    /*width: 9.98rem;*/
    /*height: 2.94rem;*/
  /*}*/
  /*.content-btn{*/
    /*width: 100%;*/
    /*padding: .57rem .4rem 0 .4rem;*/
  /*}*/
  /*.content-btn .create-btn{*/
    /*display: block;*/
    /*width: 9.90rem;*/
    /*height: 1.38rem;*/
    /*text-align: center;*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: .54rem;*/
    /*line-height:1.38rem;*/
    /*color: #FFFFFF;*/
    /*background: #FE7272;*/
    /*border: .01rem solid #F55E5E;*/
    /*border-radius: .15rem;*/
  /*}*/


</style>

