<template>
  <div class="main">
    <!-- 举报信息 -->
    <div class="reportInformation">
      <h2>举报信息</h2>
      <el-divider></el-divider>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="reportInformationForm"
      >
        <!-- 举报对象 -->
        <el-form-item
          label="举报对象"
          prop="name"
          class="reportInformationFormList"
        >
        <template >
          <div class="reportInformationFormItem">
          <input type="checkbox" @click = "isChecked" checked = "ischecked"> 员工
          <button v-show = "isChecke==ischecked">+添加</button>
          <input type="checkbox" name="" id=""> 商家
          </div>
        </template>
         
        </el-form-item>
        <!-- 举报主题 -->
        <el-form-item label="举报主题" prop="region">
          <el-select v-model="ruleForm.region" placeholder="选择主题">
            <el-option label="索取、收受贿赂" value="shanghai"></el-option>
            <el-option label="违规收受礼品或款待" value="beijing"></el-option>
            <el-option label="利用职权谋取私利" value="beijing"></el-option>
            <el-option
              label="违规投资、就职于拼多多供应商、商家、合作伙伴等"
              value="beijing"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 举报内容 -->
        <el-form-item label="举报内容" prop="desc">
          <el-input
            type="textarea"
            placeholder="最大输入5000字"
            v-model="ruleForm.desc"
          ></el-input>
        </el-form-item>
        <!-- 添加附件 -->
        <el-form-item label="添加附件">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="text/picture/picture-card"
          >
            <el-button size="small">上传附件</el-button>
            <div slot="tip" class="el-upload__tip">
              最多上传9个文件，每个文件大小不超过10M
              可上传格式为jpg、png、jpeg、doc、xls、xlsx、docx、zip、rar等格式
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
    </div>
    <!-- 举报人信息 -->
    <div class="reportPerson">
      <h2>举报人信息</h2>
      <el-divider></el-divider>
      <!-- 表单列表 -->
      <el-form label-width="150px" class="reportPersonList">
        <!-- 姓名 -->
        <el-form-item
          prop="reportPersonName"
          label="姓名"
          :rules="[{ required: true, message: '请输入姓名', trigger: 'blur' }]"
        >
          <el-input
            type="text"
            v-model="text"
            maxlength="10"
            show-word-limit
          ></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item
          prop="reportPersonEmail"
          label="邮箱"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input
            type="text"
            placeholder="请输入内容"
            v-model="text"
            maxlength="40"
            show-word-limit
          ></el-input>
        </el-form-item>
        <!-- 手机号 -->
        <el-form-item
          prop="reportPersonPhone"
          label="手机号"
          :rules="[
            { required: true, message: '请输入手机号', trigger: 'blur' },
          ]"
        >
          <el-input
            type="text"
            placeholder="请输入内容"
            v-model="text"
            maxlength="40"
            show-word-limit
          ></el-input>
        </el-form-item>
        <!-- 其他联系方式 -->
        <el-form-item prop="reportPersonPhone" label="其他联系方式">
          <el-select
            style="width: 100px"
            placeholder="QQ"
            v-model="ruleForm.region"
          >
            <el-option label="QQ" value="QQ"></el-option>
            <el-option label="微信" value="WH"></el-option>
          </el-select>
          <el-input
            style="width: 300px; margin-left: 10px"
            type="text"
            v-model="text"
            maxlength="40"
            show-word-limit
          ></el-input>
        </el-form-item>
        <!-- 验证方式 -->
        <el-form-item
          label="验证方式"
          :rules="[{ required: true, trigger: 'blur' }]"
        >
          <el-select style="width: 130px" v-model="ruleForm.region">
            <el-option label="手机号验证" value="phone"></el-option>
            <el-option label="邮箱验证" value="emile"></el-option>
          </el-select>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item
          label="验证码"
          class="verificationCode"
          :rules="[{ required: true, trigger: 'blur' }]"
        >
          <input class="verificationCodeText" />
          <span class="obtainVerificationCode">获取验证码</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="reportFooter">
      <!-- 提交按钮 -->
      <button class="reportBtn">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportDetail",
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        delivery: false,
        desc: "",
        fileList: [],
        text: "",
        
      },
      isChecke:false,
      rules: {
        name: [{ required: true, trigger: "change" }],
        region: [{ required: true, message: "选择主题", trigger: "change" }],
        desc: [{ required: true, message: "请填写举报内容", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleRemove(file, fileList) {
      this.fileList.push(file);
    },
    handlePreview(file) {
      this.fileList.splice(file);
    },
    isChecked(){
      this.isChecke = true
    }
  },
};
</script>

<style lang="less"  rel="stylesheet/less" scoped>
.main {
  width: 100%;
  // 举报信息
  .reportInformation {
    width: 1000px;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid #333;
    border-radius: 3px;
    h2 {
      padding: 0 40px;
      margin-top: 20px;
    }
    .reportInformationForm {
      width: 960px;
      box-sizing: border-box;
      margin: 0 auto;
      padding: 0 60px;
      // 举报对象
      .reportInformationFormList {
        flex-direction: column;
        .reportInformationFormItem {
        }
      }
    }
  }
  // 举报人信息
  .reportPerson {
    width: 1000px;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid #333;
    border-radius: 3px;
    margin-top: 40px;
    h2 {
      padding: 0 40px;
      margin-top: 20px;
    }
    // 表单列表
    .reportPersonList {
      width: 960px;
      margin: 0 auto;
      box-sizing: border-box;
      padding-right: 200px;
      // 验证码
      .verificationCode {
        .verificationCodeText {
          outline: none;
          width: 100px;
          height: 40px;
          padding-left: 10px;
          border: 1px solid #dcdfe6;
          border-right: none;
        }
        .obtainVerificationCode {
          display: inline-block;
          width: 80px;
          height: 40px;
          border: 1px solid #dcdfe6;
          border-left: none;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  // 举报按钮
  .reportFooter {
    width: 100%;
    margin: 40px 0;
    .reportBtn {
      display: block;
      outline: none;
      border: none;
      background: #ff5454;
      width: 120px;
      height: 30px;
      margin: 0 auto;
      border-radius: 3px;
      color: #fff;
      font-size: 14px;
      &:hover {
        background: red;
        cursor: pointer;
      }
    }
  }
}
</style>