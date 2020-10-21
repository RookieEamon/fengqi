<template>
<div class="main">
    <!-- 头部导航 -->
    <div class="headerBox">
      <div class="reportHeader">
        <span class="report">拼多多举报平台</span>
        <div class="reportNav">
          <a href="javascript:;" >廉正举报</a>
          <a href="javascript:;" @click="toMerchantBackground">业务投诉</a>
          <a href="javascript:;">违禁品举报</a>
        </div>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="reportContent">
      <h2>廉正举报须知</h2>
      <!-- 具体内容 -->
      <div class="reportNotice">
        <div>拼多多致力于打造公开、透明、开放的商业生态，我们对于任何腐败的行为将予以坚决打击。</div>
        <div>拼多多廉正合规部受理以下涉及员工违纪的举报：</div>
      </div>
      <ul class="noticeList">
        <li class="noticeItem">
          （1）索取、收受贿赂；违规收受礼品或款待；
        </li>
        <li class="noticeItem">
          （2）违规投资、就职于拼多多供应商、商家、合作伙伴等；
        </li>
        <li class="noticeItem">
          （3）泄露公司保密信息等；
        </li>
        <li class="noticeItem">
          （4）利用职权谋取私利；
        </li>
        <li class="noticeItem">
          （5）其他违反法律法规、公司制度的行为。
        </li>
      </ul>
      <div class="reportNotice">
        我们希望您采取实名举报或提供可以联系到您的联系方式，以便专人保持联络，我们承诺会按照专业的做法，严格保护举报人，并对举报内容严格保密。举报内容必须客观真实。对于立案调查并有结论的举报，我们会根据您留下的联系方式进行反馈。
      </div>
      <!-- 按钮 -->
      <button class="reportBtn" @click="toReportDetail">举报</button>
      <!-- 业务投诉 -->
      <div  class="reportComplaint">
        廉正合规部职能只受理符合以上特征的举报，业务问题可以通过
        <a href="javascript:;">业务投诉</a>
        渠道获得更快的解决。
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'IntegrityReport',
  methods: {
    toMerchantBackground(){
      this.$router.push('/complaint/merchantbackground')
    },
    toReportDetail(){
      this.$router.push('/complaint/reportdetail')
    }
  },
}
</script>

<style lang="less" scoped>
body{
  margin: 0;
  padding: 0;
}
.main{
  width: 100%;
  // 头部
  .headerBox{
    width: 100%;
    background-color: #FF5D5E;
    .reportHeader{
      width: 1160px;
      height: 60px;
      margin: 0 auto;
      display: flex;
      text-align: center;
      line-height: 60px;
      .report{
        font-size: 19px;
        color: #fff;
        margin:0 80px;
      }
      .reportNav{
        a{
          font-size: 15px;
          color: #fff;
          margin:0 20px;
        }
      }
    }
  }
  // 内容区
  .reportContent{
    width: 1160px;
    margin: 30px auto 0;
    padding: 50px 80px;
    box-sizing: border-box;
    border: 1px solid #333;
    border-radius: 3px;
    box-shadow: 1px 1px 1px #666;
    h2{
      text-align: center;
      margin: 0 auto 60px;
      color: #FF5D5E;
      font-size: 24px;
      font-weight: 700;
    }
    // 具体内容
    .reportNotice{
      font-size: 15px;
      margin: 20px 0;
      div{
        margin: 10px 0;
      }
    }
    .noticeList{
      margin: 30px 0;
      .noticeItem{
        font-size: 14px;
        font-weight: 600;
        margin: 8px 0;
      }
    }
    // 举报按钮
    .reportBtn{
      display: block;
      width:120px;
      padding: 6px;
      border-radius: 5px;
      border: none;
      background-color: #FF5D5E;
      margin: 20px auto;
      font-size: 14px;
      color: #fff;
      outline: none;
      &:hover{
        cursor: pointer;
      }
    }
    .reportComplaint{
      text-align: center;
      font-size: 10px;
      color: #999;
      a{
        color: #FF5D5E;
      }
    }
  }
}
</style>