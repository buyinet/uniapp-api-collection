<template>
  <view class="content">
    <div class="box">
      <view :style="'height:'+statusBarHeight+'px'"></view>
      <kt-nav-bar background-color="rgba(255,255,255,0)"></kt-nav-bar>
      <view
          style="position: relative;"
      >
        <text
            style="font-size: 70rpx;font-weight: bold"
        >注册
        </text>
        <view style="text-align: center;position: relative;height: 300rpx">
          <image
              class="login-img"
              :src="$kt.file.byPath('image/login.png')"></image>
        </view>
        <view style="height: 20rpx"></view>
        <text
            class="to-register"
            @click="$kt.util.reTo('/pages/login/login')"
        >前往登录
        </text>
      </view>

      <view style="height: 20rpx"></view>

      <view class="input" v-if="requestParam.username.indexOf('@') == -1">
        <view style="height: 10rpx;"></view>
        <u-row>
          <u-col :span="1.5">
            <u-icon
                @click="tipPhone()"
                :name="requestParam.phoneAreaCode" :size="'28rpx'" color="#333333"></u-icon>
          </u-col>
          <u-col :span="10.5">
            <input
                :placeholder="'手机号 / 邮箱'"
                v-model.trim="requestParam.username"
            ></input>
          </u-col>
        </u-row>
        <view style="height: 10rpx;"></view>
      </view>

      <view class="input" v-else>
        <view style="height: 10rpx;"></view>
        <u-row>
          <u-col :span="1">
            <u-icon name="email" :size="'40rpx'" color="#333333"></u-icon>
          </u-col>
          <u-col :span="11">
            <!-- 正在发送验证码时，不可修改 -->
            <input
                :disabled="isSendingVarCode"
                :placeholder="'手机号 / 邮箱'"
                v-model.trim="requestParam.username"
            ></input>
          </u-col>
        </u-row>
        <view style="height: 10rpx;"></view>
      </view>


      <view style="height: 40rpx"></view>

      <view
          class="input">
        <view style="height: 5rpx;"></view>

        <u-row>
          <u-col :span="2">
            <u-icon name="minus-square-fill" :size="'50rpx'" color="#333333"></u-icon>
          </u-col>
          <u-col :span="8">
            <input
                style="border: none;
                  text-align: center;
                  background-color: rgba(0,0,0,0)"
                :placeholder="'验证码'"
                v-model.trim="requestParam.varCode"
            ></input>
          </u-col>
          <u-col :span="2">
            <view style="text-align: center">
              <view
                  v-if="sendVarCodeTime>0"
                  class="send-btn"
                  @click="sendVarCode()"
                  style="font-size: 28rpx;font-weight: bold;"
              >{{ sendVarCodeTime }}
              </view>
              <view
                  v-else-if="!isSendingVarCode"
                  class="send-btn"
                  @click="sendVarCode()"
                  style="font-size: 28rpx"
              >发送
              </view>
              <view
                  v-else
                  class="send-btn"
                  style="font-size: 28rpx"
              >···
              </view>
            </view>

          </u-col>
        </u-row>
        <view style="height: 5rpx;"></view>
      </view>

      <view style="height: 40rpx"></view>

      <view
          class="input">
        <view style="height: 10rpx;"></view>

        <u-row>
          <u-col :span="1.5">
            <u-icon name="lock" :size="'40rpx'" color="#333333"></u-icon>
          </u-col>
          <u-col :span="9.5">
            <input
                style="border: none;background-color: rgba(0,0,0,0)"
                :placeholder="'密码'"
                :type="passwordIsVisible ? null : 'password'"
                v-model.trim="requestParam.password"
            ></input>
          </u-col>
          <u-col :span="2">
            <div
                @click="passwordIsVisible = !passwordIsVisible"
            >
              <u-icon name="eye"
                      v-if="!passwordIsVisible"
                      :size="'40rpx'" color="#333333"></u-icon>
              <u-icon name="eye-off"
                      v-else
                      :size="'40rpx'" color="#333333"></u-icon>
            </div>
          </u-col>
        </u-row>
        <view style="height: 10rpx;"></view>

      </view>


      <view style="height: 40rpx"></view>

      <view
          v-if="!passwordIsVisible"
          class="input">
        <view style="height: 10rpx;"></view>

        <u-row>
          <u-col :span="1.5">
            <u-icon name="lock" :size="'40rpx'" color="#333333"></u-icon>
          </u-col>
          <u-col :span="10.5">
            <input
                style="border: none;background-color: rgba(0,0,0,0)"
                :placeholder="'确认密码'"
                :type="passwordIsVisible ? null : 'password'"
                v-model.trim="password2"
            ></input>
          </u-col>
        </u-row>
        <view style="height: 10rpx;"></view>

      </view>

      <view style="height: 60rpx"></view>
      <kt-button
          ref="ktButton"
          @click="register()"
          :is-open-box-shadow="false"
      >注册
      </kt-button>
      <view style="height: 30rpx"></view>
      <view style="text-align: center;"></view>
      <!-- 协议勾选 -->
      <view style="font-size: 25rpx">
        <text style="margin-left: 30rpx;color: #8f8f94">注册即代表您已同意</text>
        <text style="color: #000000;font-weight: bold;">《用户协议》</text>
        <text style="color: #8f8f94">和</text>
        <text style="color: #000000;font-weight: bold;">《隐私政策》</text>
      </view>
    </div>
  </view>
</template>

<script>
import rsa from "@/commonJs/rsa";
import {JSEncrypt} from "@/uni_modules/jsencrypt";
import phoneAndEmail from "@/commonJs/phoneAndEmail";
import userStore from "@/store/modules/user.js";
import user from "@/store/modules/user.js";

export default {
  computed: {
    user() {
      return user
    }
  },
  data() {
    return {
      userStore,
      statusBarHeight: 0,
      requestParam: {
        // 账号
        username: '',
        // 密码
        password: '',
        // 手机号码国际区号
        phoneAreaCode: '+86',
        // 登录方式编码
        loginTypeCode: 'password',
        // 验证码
        varCode: '',
        // 微信登录code
        loginCode: '',
      },
      // 密码是否可见
      passwordIsVisible: false,
      password2: "",
      // 是否登录中，防止重复点击
      isLogining: false,
      // 剩余时间
      sendVarCodeTime: 0,
      // 正在发送验证码中
      isSendingVarCode: false,
    }
  },
  created() {
    this.initVarCodeTime();
    this.intervalVarCodeTime();
  },
  mounted() {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
  },
  methods: {
    initVarCodeTime() {
      // 上次发送注册登录验证码的时间
      let lastSendVarCodeTime = uni.getStorageSync('lastSendVarCodeTimeOfRegister');
      if (lastSendVarCodeTime) {
        // 60秒内不可再次发送
        if (new Date().getTime() - lastSendVarCodeTime < 60 * 1000) {
          this.sendVarCodeTime = 60 - Math.floor((new Date().getTime() - lastSendVarCodeTime) / 1000);
        }
      }
    },
    intervalVarCodeTime() {
      if (this.sendVarCodeTime > 0) {
        this.sendVarCodeTime--;
        setTimeout(() => {
          this.intervalVarCodeTime();
        }, 1000);
      }
    },
    // 发送验证码
    sendVarCode() {
      this.initVarCodeTime();

      if (this.sendVarCodeTime > 0) {
        return;
      }


      if (this.requestParam.username == '') {
        this.$refs.ktButton.error('请输入手机号码或邮箱');
        return;
      }

      // 验证手机号码
      if (this.requestParam.username.indexOf('@') == -1 && phoneAndEmail.checkPhone(this.requestParam.phoneAreaCode, this.requestParam.username) == false) {
        this.$refs.ktButton.error('请输入正确的手机号码');
        return;
      }

      // 验证邮箱
      if (this.requestParam.username.indexOf('@') != -1 && phoneAndEmail.checkEmail(this.requestParam.username) == false) {
        this.$refs.ktButton.error('请输入正确的邮箱');
        return;
      }

      // 如果是验证码登录，且是邮箱
      if (this.requestParam.username.indexOf('@') != -1) {
        this.$refs.ktButton.loading();
        this.isSendingVarCode = true;
        this.$request({
          url: "/api-varcode/varCode/send",
          method: "post",
          data: {
            typeCode: "email",
            sceneCode: 'register',
            to: this.requestParam.username,
          },
          stateSuccess: (json) => {
            this.$refs.ktButton.success(json.msg);
            // 存储发送注册登录验证码的时间
            uni.setStorageSync('lastSendVarCodeTimeOfLogin', new Date().getTime());
            this.isSendingVarCode = false;
            this.initVarCodeTime();
            this.intervalVarCodeTime();
          },
          stateFail: (json) => {
            if (json.errMsg) {
              this.$refs.ktButton.error(json.errMsg);
            }
            setTimeout(() => {
              this.isSendingVarCode = false;
            }, 3000);
          }
        });
        return;
      }

      // 如果验证码登录，且是手机号码
      if (this.requestParam.username.indexOf('@') == -1) {
        this.$refs.ktButton.loading();
        this.isSendingVarCode = true;
        this.$request({
          url: "/api-varcode/varCode/send",
          method: "post",
          data: {
            typeCode: "sms",
            sceneCode: 'register',
            to: this.requestParam.phoneAreaCode + this.requestParam.username,
          },
          stateSuccess: (json) => {
            this.$refs.ktButton.success(json.msg);
            // 存储发送注册登录验证码的时间
            uni.setStorageSync('lastSendVarCodeTimeOfLogin', new Date().getTime());
            this.isSendingVarCode = false;
            this.initVarCodeTime();
            this.intervalVarCodeTime();
          },
          stateFail: (json) => {
            if (json.errMsg) {
              this.$refs.ktButton.error(json.errMsg);
            }
            setTimeout(() => {
              this.isSendingVarCode = false;
            }, 3000);
          }
        });
        return;
      }
    },
    tipPhone() {
      uni.showToast({
        title: '目前仅支持中国大陆手机号码',
        icon: 'none',
        duration: 2000
      })
    },
    async register() {

      if (this.requestParam.username == '') {
        this.$refs.ktButton.error('请输入手机号码或邮箱');
        return;
      }

      // 验证码不可为空
      if (this.requestParam.varCode == '') {
        this.$refs.ktButton.error('验证码不可为空');
        return;
      }

      // 验证手机号码
      if (this.requestParam.username.indexOf('@') == -1 && phoneAndEmail.checkPhone(this.requestParam.phoneAreaCode, this.requestParam.username) == false) {
        this.$refs.ktButton.error('请输入正确的手机号码');
        return;
      }

      // 验证邮箱
      if (this.requestParam.username.indexOf('@') != -1 && phoneAndEmail.checkEmail(this.requestParam.username) == false) {
        this.$refs.ktButton.error('请输入正确的邮箱');
        return;
      }

      if (this.requestParam.password == '') {
        this.$refs.ktButton.error("密码不可为空");
        return;
      }

      if (!this.passwordIsVisible && this.requestParam.password != this.password2) {
        this.$refs.ktButton.error("两次密码不一致");
        return;
      }
      if (this.requestParam.username.indexOf('@') == -1) {
        this.isLogining = true;
        let phone = "";
        let password = "";
        let varCode = "";
        let encrypt = new JSEncrypt();
        await rsa.getPublicKey().then((res) => {
          encrypt.setPublicKey(res);
          phone = res + "&&" + encrypt.encrypt(this.requestParam.phoneAreaCode + this.requestParam.username);
          console.log("username", phone);
        });
        await rsa.getPublicKey().then((res) => {
          encrypt.setPublicKey(res);
          password = res + "&&" + encrypt.encrypt(this.requestParam.password);
        });

        await rsa.getPublicKey().then((res) => {
          encrypt.setPublicKey(res);
          varCode = res + "&&" + encrypt.encrypt(this.requestParam.varCode);
        });

        console.log("phone", phone);
        console.log("password", password);
        this.$refs.ktButton.loading();
        this.$request({
          url: "/system-user-web/user/securityPhoneRegisterWithVarCode",
          method: "post",
          data: {
            phone,
            password,
            varCode
          },
          stateSuccess: (json) => {
            this.$refs.ktButton.success(json.msg);
            this.$kt.request.setToken(json.data.token);
            this.userStore.setSelfInfo(json.data.userInfo);
            this.loginSuccess(json);
          },
          stateFail: (json) => {
            console.log(json);
            if(res.errMsg){
              this.$refs.ktButton.error(json.errMsg);
            }
            this.isLogining = false;
          }
        });
      }

    },
    /**
     * 登录完成后的跳转
     * @param res
     */
    loginSuccess(res) {
      if (res.data.userInfo.isTemporary) {
        // 关闭此页面，前往绑定页面
        uni.redirectTo({
          url: '/pages/bind/bind'
        });
        return;
      }

      if (!res.data.userInfo.isInit) {
        // 关闭此页面，前往初始化页面
        uni.redirectTo({
          url: '/pages/init/init'
        });
        return;
      }

      // 判断是否有上一页
      if (getCurrentPages().length > 1) {
        uni.navigateBack();
      } else {
        uni.navigateTo({
          url: '/pages/body/body'
        });
      }
    },

  }
}
</script>

<style scoped>

.content {
}

.box {
  padding: 30px;
  box-sizing: border-box;
}

.box-2 {
  height: 100%;
  color: #333333;
  border-radius: 60rpx 60rpx 0 0;
  padding: 30rpx;
  box-sizing: border-box;
  text-align: center;
  font-size: 30rpx;
}

.input {
  border-radius: 60rpx;
  background-color: #f0f0f0;
  padding: 20rpx;
  font-size: 30rpx;
  text-align: left;
}

.send-btn:active {
  transform: scale(0.9);
}

.to-register {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #666666;
  font-size: 30rpx;
  vertical-align: bottom;
}

.to-register:active {
  transform: scale(0.9);
}

.login-img {
  position: absolute;
  width: 600rpx;
  height: 600rpx;
  right: -150rpx;
  bottom: 30rpx;
}
</style>
