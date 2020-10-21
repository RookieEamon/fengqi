<template>
  <div class="main">
    <!-- 头部导航 -->
    <div class="headerBox">
      <div class="reportHeader">
        <span class="report">拼多多举报平台</span>
        <div class="reportNav">
          <a href="javascript:;">廉正举报</a>
          <a href="javascript:;" @click="toMerchantBackground">业务投诉</a>
          <a href="javascript:;">违禁品举报</a>
        </div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="compont">
      <!-- 提示框 -->
      <div class="prompt" >
        <i class="el-icon-warning"></i> 
          请确保您的商品举报内容真是有效, 提交后将不可更改, 我们将尽快完成处理
      </div>
      <!-- 举报信息列表 -->
      <div class="reportList">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="150px"
        >
          <!-- 要举报的商品链接 -->
          <el-form-item label="要举报的商品链接" prop="name">
            <el-input></el-input>
          </el-form-item>
          <!-- 举报的商品详情 -->
          <el-form-item label="举报的商品详情">举报的商品详情
            <el-input></el-input>
          </el-form-item>
          <!-- 举报原因 -->
          <el-form-item label="举报原因" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择举报原因">
              <el-option label="毒品类" value="shanghai"></el-option>
              <el-option label="管制刀具类" value="beijing"></el-option>
              <el-option label="处方药" value="beijing"></el-option>
              <el-option label="军警用品类" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <!-- 原因描述 -->
          <el-form-item label="原因描述" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <!-- 上传凭证 -->
          <el-upload>
            <el-button>+点击上传</el-button>
          </el-upload>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contraband",
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.main {
  width: 100%;
  // 头部
  .headerBox {
    width: 100%;
    background-color: #ff5d5e;
    .reportHeader {
      width: 1160px;
      height: 60px;
      margin: 0 auto;
      display: flex;
      text-align: center;
      line-height: 60px;
      .report {
        font-size: 19px;
        color: #fff;
        margin: 0 80px;
      }
      .reportNav {
        a {
          font-size: 15px;
          color: #fff;
          margin: 0 20px;
        }
      }
    }
  }
  // 主体内容
  .compont {
    width: 100%;
    // 提示框
    .prompt {
      width: 1000px;
      margin: 8px auto;
      height: 30px;
      line-height: 30px;
      background: #e6f9ff;
      border: 1px solid #b5edff;
      .el-icon-warning{
        font-size: 15px;
        padding: 0 6px 0 10px;
        color: #1199EE;
      }
    }
    // 举报信息列表
    .reportList{
      width: 1000px;
      box-sizing: border-box;
      margin: 0 auto;
      padding: 20px;
      border-top: 1px solid rgb(235, 230, 230);
    }
  }
}
</style>