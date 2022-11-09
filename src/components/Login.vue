<template>
  <div @keydown.enter="login()" class="loginBox">
    <div v-if="!registerWindow" class="boxContent">
      <div @click="closeLoginWindow()" class="close">X</div>
      <div class="title">登录</div>
      <div class="input">
        <input
          v-model="loginUserInfo.username"
          ref="input1"
          placeholder="请输入用户名"
          type="text"
        />
        <div class="warning">
          <p v-if="userpromptInfo">用户名不能为空</p>
        </div>
        <input
          v-model="loginUserInfo.password"
          placeholder="请输入密码"
          type="password"
        />
        <div class="warning">
          <p v-if="pwdpromptInfo">密码不能为空</p>
        </div>
        <button @click="login()">LOGIN</button>
      </div>
      <div class="other">
        <p>忘记密码</p>
        <p @click="registerWindow = !registerWindow">立即注册</p>
      </div>
    </div>
    <div v-show="registerWindow" id="registerContent" class="boxContent">
      <div @click="closeLoginWindow()" class="close">X</div>
      <div class="title">注册</div>
      <div id="registerInput" class="input">
        <input
          v-model="registerUserInfo.username"
          placeholder="请输入需要注册的用户名"
          ref="input2"
          type="text"
        />
        <div class="warning">
          <p
            v-if="
              (registerUserInfo.username.length < 4 ||
                registerUserInfo.username.length > 15) &&
              registerUserInfo.username.length > 0
            "
          >
            请输入4-15位的用户名
          </p>
        </div>
        <input
          v-model="registerUserInfo.email"
          placeholder="请输入邮箱地址"
          type="text"
        />
        <div class="warning">
          <p
            v-if="
              registerUserInfo.email.indexOf('@') == -1 &&
              registerUserInfo.email.length > 0
            "
          >
            请输入正确的邮箱地址
          </p>
        </div>
        <input
          v-model="registerUserInfo.password"
          placeholder="请输入密码"
          type="password"
        />
        <div class="warning">
          <p
            v-if="
              registerUserInfo.password.length < 6 &&
              registerUserInfo.password.length > 0
            "
          >
            请输入6位以上的密码
          </p>
        </div>
        <input
          v-model="registerUserInfo.repassword"
          placeholder="请重复密码"
          type="password"
        />
        <div class="warning">
          <p v-if="registerUserInfo.repassword != registerUserInfo.password">
            密码不一致，请重新输入
          </p>
        </div>
        <button @click="register()">立即注册</button>
      </div>
      <div
        id="registerOther"
        class="other"
        @click="registerWindow = !registerWindow"
      >
        <p>已有账号?去登陆</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userpromptInfo: false,
      pwdpromptInfo: false,
      loginUserInfo: {
        username: "",
        password: "",
      },
      registerUserInfo: {
        username: "",
        email: "",
        password: "",
        repassword: "",
      },
      registerWindow: false,
    };
  },
  methods: {
    async login() {
      try {
        let { username, password } = this.loginUserInfo;
        if (!username) {
          this.userpromptInfo = true;
        } else this.userpromptInfo = false;
        if (!password) {
          this.pwdpromptInfo = true;
        } else this.pwdpromptInfo = false;

        if (this.userpromptInfo != true && this.pwdpromptInfo != true) {
          let result = await this.$store.dispatch("loginAndRegister/login", {
            username,
            password,
          });
          this.$message({
            showClose: true,
            message: result,
            type: "success",
          });
          this.$bus.$emit("loginClose");
        }
      } catch (error) {
        this.$message({
          showClose: true,
          message: error,
          type: "warning",
        });
      }
    },
    async register() {
      try {
        let { username, password, repassword, email } = this.registerUserInfo;
        if (
          username.length >= 4 &&
          username.length <= 15 &&
          password == repassword &&
          password.length >= 6 &&
          email.indexOf("@") != -1
        ) {
          let result = await this.$store.dispatch("loginAndRegister/register", {
            username,
            password,
            email,
          });
          this.$message({
            showClose: true,
            message: result,
            type: "success",
          });
          setTimeout(() => {
            this.registerWindow = !this.registerWindow;
          }, 2000);
        } else {
          this.$message({
            showClose: true,
            message: "请输入正确信息",
            type: "warning",
          });
        }
      } catch (error) {
        this.$message({
          showClose: true,
          message: error,
          type: "warning",
        });
      }
    },
    closeLoginWindow() {
      this.$bus.$emit("loginClose");
    },
  },
  mounted() {
    this.$bus.$on("register", (t) => {
      this.registerWindow = t;
    });
    this.$bus.$on("focus1", () => {
      this.$nextTick(() => {
        this.$refs.input1.focus();
      });
    });
    this.$bus.$on("focus2", () => {
      this.$nextTick(() => {
        this.$refs.input2.focus();
      });
    });
  },
};
</script>

<style scoped>
.close {
  position: absolute;
  color: rgb(144, 144, 144);
  font-size: 2rem;
  top: 15%;
  right: 30.5%;
  cursor: pointer;
}
.loginBox {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgb(249, 246, 243, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.boxContent {
  display: flex;
  background-image: url(../../public/images/recordImages/A140C7DBB8B76D43058F8FCDB3DEC160.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: -6rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 70%;
  box-shadow: 0 0 3rem rgb(123, 125, 128);
  border-radius: 1.5rem;
}
.title {
  font-size: 4rem;
}
.input {
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
#registerInput {
  height: 70%;
}
.input input {
  font-size: 1.5rem;
  border: 0;
  border-radius: 0.5rem;
  width: 100%;
  height: 4rem;
  padding: 0.5rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 2rem rgb(123, 125, 128);
  outline: none;
}
.input button {
  width: 10rem;
  height: 4rem;
  border: 0;
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 0.6rem;
  padding: 0.5rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 2rem rgb(123, 125, 128);
  transition: all 0.2s;
}
.input button:hover {
  scale: 1.1;
  background-color: rgb(198, 235, 222);
}
.input .warning {
  width: 100%;
  height: 4rem;
  position: relative;
}
.input .warning p {
  position: absolute;
  color: red;
}
.other {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
#registerOther {
  padding-bottom: 4rem;
  color: rgb(26, 28, 90);
}
.other p {
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.2s;
}
.other p:hover {
  scale: 1.1;
}
</style>