<template>
  <div class="main">
    <!-- 主体内容 -->
    <div class="compont">
      <!-- 提示框 -->
      <div class="prompt">
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
          <el-form-item label="举报的商品详情">
            <div class="commodityDetails">
              <img src="./images/contraband.png" alt="" />
              <span class="tradeName">商品名称:</span>
              <span class="store">所属店铺:</span>
            </div>
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
          <el-form-item label="上传凭证" prop="desc">
            <el-upload
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :beforeUpload="beforeAvatarUpload"
              list-type="text/picture/picture-card"
            >
              <el-button>+点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传png text文件，且不超过10M
              </div>
            </el-upload>
          </el-form-item>
          <!-- 按钮 -->
          <el-form-item>
            <el-button @click="reportComit = true" type="danger">提交</el-button>
            <el-dialog
              title="提示"
              :visible.sync="reportComit"
              width="30%"
              :before-close="handleClose"
            >
              <span>确定提交吗?</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="reportComit = false">取 消</el-button>
                <el-button type="primary" @click="reportComit = false"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
          </el-form-item>
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
      reportComit:false,
      ruleForm: {
        name: "",
        region: "",

      },
      fileList: [],
      rules: {
        name: [
          { required: true, message: "要举报的商品链接",  },
        ],
        region: [
          { required: true, message: "举报原因", trigger: "change" },
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeAvatarUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
      const extension = testmsg === "text";
      const extension2 = testmsg === "png";
      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!extension && !extension2) {
        this.$message({
          message: "上传文件只能是png text格式!",
          type: "warning",
        });
      }
      if (!isLt2M) {
        this.$message({
          message: "上传文件大小不能超过 10MB!",
          type: "warning",
        });
      }
      return extension || (extension2 && isLt2M);
    },
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.main {
  width: 100%;
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
      font-size: 12px;
      .el-icon-warning {
        font-size: 15px;
        padding: 0 6px 0 10px;
        color: #1199ee;
      }
    }
    // 举报信息列表
    .reportList {
      width: 1000px;
      box-sizing: border-box;
      margin: 0 auto;
      padding: 20px;
      border-top: 1px solid rgb(235, 230, 230);
      .commodityDetails {
        position: relative;
        width: 800px;
        height: 100px;
        border: 1px solid #cdeaff;
        border-radius: 4px;
        img {
          width: 80px;
          height: 80px;
          margin: 10px;
        }
        span {
          font-size: 13px;
          font-weight: 700;
        }
        .tradeName {
          position: absolute;
        }
        .store {
          position: absolute;
          top: 30px;
        }
      }
    }
  }
}
</style>