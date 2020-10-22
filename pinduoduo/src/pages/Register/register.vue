<template>
    
  <div>
    <div class="registerContainer">
      <!-- 注册内容 -->
      <div class="register">
        <h3>
          注册新用户
          <span class="go"
            >我有账号，去 <a href="/login" target="_blank">登录</a>
          </span>
        </h3>
        <div class="content">
          <label>用户名:</label>
          <input type="text" placeholder="请输入你要注册的用户名" v-model="username"/>
        </div>
        <!-- <div class="content">
          <label>验证码:</label>
          <input type="text" placeholder="请输入验证码" />
          <img
            ref="code"
            src="http://182.92.128.115/api/user/passport/code"
            alt="code"
          />
        </div> -->
        <div class="content">
          <label>登录密码:</label>
          <input type="text" placeholder="请输入你的登录密码" v-model="password"/>
        </div>
        <div class="content">
          <label>确认密码:</label>
          <input type="text" placeholder="请输入确认密码" v-model="rePassword"/>
        </div>
        <div class="controls">
          <input name="m1" type="checkbox" />
          <span>同意协议并注册《拼多多用户协议》</span>
        </div>
        <div class="btn">
          <a href="javascript:" @click="toRegister">完成注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqRegister} from '@/api'
export default {
  name: "Register",
  data() {
    return {
      username:'',  //用户名
      password:'',   //密码
      rePassword:'' //确认密码
    }
  },
  methods: {
   async toRegister(){
      // 前端验证
      let usernameReg = /^[a-zA-Z0-9]{4,10}/;
      let passwordReg = /^\d{4,6}/;
      if(!this.username.trim() || !this.password.trim()){
      this.$message({
          message: '手机号和密码不能为空！',
          type: 'warning'
        });
      return;
      }
      if(!usernameReg.test(this.username)){
        this.$message({
          message: '手机号不正确',
          type: 'warning'
        });
        return;
      }

      if(!passwordReg.test(this.password)){
        this.$message({
          message: '密码不正确',
          type: 'warning'
        });
        return;
      }

      if(this.password !== this.rePassword){
        this.$message({
          message: '两次输入的密码不一致',
          type: 'warning'
        });
        return;
      }

      //后端验证
      let userInfo = {username:this.mobile,password:this.password}
      const result = await reqRegister(userInfo)
      console.log(result);
      if(result.code === 400){
        this.$message({
          message: '该用户已存在，请重新输入',
          type: 'warning'
        });
        return
      }
      if(result.code === 200){
        this.$message({
          message: '恭喜你注册成功,请登录！',
          type: 'success'
        });
        // 跳转登录界面
        this.$router.push('/login')
      }
    }
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.registerContainer {
  width: 100%;
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;
    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;
      span {
        font-size: 14px;
        float: right;
        a {
          color: #e1251b;
        }
      }
    }
    div:nth-of-type(1) {
      margin-top: 40px;
    }
    .content {
      // text-align: center;
      padding-left: 390px;
      margin-bottom: 18px;
      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }
      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }
      img {
        vertical-align: sub;
      }
    }
    .controls {
      text-align: center;
      input {
        vertical-align: middle;
      }
    }
    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;
      a {
        text-decoration: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }
}
</style>
