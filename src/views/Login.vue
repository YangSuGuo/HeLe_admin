<template>
  <div id="app">
    <div class="HomeLink">
      <el-icon class="HomeIcon" color="#FAFCFF" style="background-color: #B0375D; border-radius: 50%; padding: 3px">
        <HomeFilled/>
      </el-icon>
      <el-link
          :underline="false"
          class="home-title"
          href="http://localhost:5173/"
          target="_blank"
          type="warning">
        Project Login
      </el-link>
    </div>
    <div class="welcome-message">
      <label class="w">W</label>
      <label class="Welcome1">
        elcome
      </label>
      <div class="welcome-content">
        <label class="Welcome2">
          Join us now and<br>
          Let's have some fun
        </label>
      </div>
    </div>
    <div id="login">
      <h1 class="login-title">Login</h1>
      <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="loginFormRules"
          class="login-form"
          status-icon
          style="margin-top: 60px">

        <el-form-item prop="username">
          <el-input
              ref="username"
              size="large"
              class="username-input"
              :placeholder="'请输入用户名'"
              name="username"
              autocomplete="on"
              prefix-icon="User"/>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
              size="large"
              type="password"
              class="password-input"
              :placeholder="'请输入密码'"
              name="password"
              prefix-icon="Lock"
              :show-password="true"/>
        </el-form-item>

        <el-form-item>
          <div
              class="confirm"
              style="
                margin-top: 5%;
                margin-left: 80%">
            <el-button
                icon="Right"
                round
                style="zoom:195%; opacity: 0.7;"
                type="primary">
            </el-button>
          </div>
        </el-form-item>
      </el-form>
      <label
          class="agreement"
          style="
                  color: #606266;
                  margin-left: 20%;
                  font-size: 14px;
                  font-family: '苹方 常规', serif;">
        登录即同意楊蘇國的
        <el-link
            :underline="false"
            href="https://www.microsoft.com/zh-cn/legal/terms-of-use"
            target="_blank"
            type="primary">
          用户协议
        </el-link>
        和
        <el-link
            :underline="false"
            href="https://privacy.microsoft.com/zh-cn/privacystatement"
            target="_blank"
            type="primary">
          隐私政策
        </el-link>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>

// login页面为旧页面复用
// todo 自动跟随夜间模式【 夜间模式自动更换登录页壁纸到mac暗色壁纸 】
// todo 优化登录表单
// todo 优化页面css布局
// todo 可选项：响应式布局适应手机端
// todo 点击注册不跳转页面，自动切换表单【淡入淡出】
// todo 登录API请求封装调用 【 全局状态存储JWT令牌 】
// todo 检测JWT令牌是否过期（72h）【 登录状态持久化 】

const ruleForm = {
  username: '',
  password: '',
}

const loginFormRules = {
  username: [{required: true, trigger: 'blur'}],
  password: [{required: true, trigger: 'blur'}]
}

</script>

<style scoped>
body {
  background: rgb(135, 206, 235); /*网页背景*/
}

#app {
  background: url("https://img.picui.cn/free/2024/06/03/665dda459afd4.jpg");
  background-size: 100% 100%;
}

#login {
  /*位置与大小*/
  top: 13%;
  left: 63%;
  width: 500px;
  height: 600px;
  position: absolute;
  /*样式*/
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10%; /*圆角*/
  box-shadow: 5px 6px 8px rgba(74, 124, 199, 0.7); /*阴影*/
}

.login-form {
  margin-left: 40px;
  margin-right: 40px;
}

.confirm{

}

.login-title {
  /*位置设置*/
  margin-top: 15%;
  margin-bottom: 60px;
  /*字体设置*/
  text-align: center;
  font-size: 60px;
  font-family: Elephant, serif;
  font-style: italic;
  color: #606266;
}

.HomeLink {
  zoom: 175%;
  margin-left: 13px;
  font-family: Elephant, serif;
  opacity: 0.8;
  height: 20px;

  position: relative;
  top: 20px;
  display: flex;
  align-items: center;
  /*  width: 135px;
    height: 30px;
    background: rgba(78, 117, 186, 0.8);
    border-radius: 6%; !*圆角*!
    box-shadow: 3px 3px 10px rgba(158, 189, 236, 0.7); !*阴影*!*/
}

.home-title {
  padding: 3px 5px;
  margin-left: 5px;
  background-color: #606266;
  border-radius: 10px;
}

.welcome-message {
  margin-top: 145px;
  margin-left: 45px;

  font-family: Elephant, serif;
  font-size: 115px;
  color: rgba(236, 241, 245, 0.9);
  opacity: 0.8;
}

.welcome-content {
  margin-top: 45px;
  font-size: 65px;
}

.w {
  color: crimson;
  margin-left: -25px;
}

.Welcome1 {
  font-size: 110px;
  color: aliceblue;
  margin-left: -25px;
}
</style>
