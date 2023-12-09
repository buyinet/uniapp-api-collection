<template>
  <view class="box">
    <view>
      <image src="https://img.yzcdn.cn/vant/cat.jpeg"
             mode="aspectFill"
             class="avatar"
      />
    </view>
    <view
    style="vertical-align: top;margin-left: 20rpx"
    >
      <view>
        <!-- 既不是会员也不是合伙人 -->
        <text class="small-text"
              style="font-size: 20rpx"
              v-if="!userInfo.isRoleVip&&!userInfo.isRolePartner"
        >[非会员]</text>
        <image
          v-if="userInfo.isRoleVip&&!userInfo.isRolePartner"
          :src="$kt.file.byPath('icon/vip.svg')" class="small-text-icon"></image>
        <image
            v-if="userInfo.isRolePartner"
            :src="$kt.file.byPath('icon/partner.svg')" class="small-text-icon"></image>
        <text class="big-text"
       v-if="userInfo.nickname"
       >{{userInfo.nickname}}</text>

        <text class="big-text"
              style="opacity: .8"
              v-else>无昵称</text>

        <text class="small-text"
        v-if="userInfo.phone"
        >（{{hidePhone(userInfo.phone)}}）</text>

        <text class="text-btn"
              style="font-size: 20rpx"
              v-else-if="isSelf">
          绑定手机号
        </text>

        <text class="text-btn"
              style="font-size: 20rpx"
              v-else>
          未绑定手机号
        </text>


      </view>

      <view style="height: 5rpx"></view>
      <view>


        <text
            v-if="userInfo.directCode"
            class="small-text">直属码：DSKN <text
            @click.prevent="toCopy('DSKN')"
            class="text-btn">复制</text>
        </text>

        <text
            v-if="!userInfo.directCode"
            class="small-text">直属码：<text
          <text class="text-btn"
                v-if="isSelf"
          >生成</text>
          <text
              v-else
              @click.prevent="toCopy(userInfo.wechat)"
          >暂无</text>
        </text>

        <text class="small-text">微信号：
          <text class="text-btn"
          v-if="isSelf"
          >设置</text>
          <text
                v-else
                @click.prevent="toCopy(userInfo.wechat)"
          >暂无</text>
        </text>
      </view>
    </view>

  </view>
</template>

<script>

export default {
  props: {
    userInfo: {
      type: Object,
      default: () => {
        return {}
      }
    },
    isSelf: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    };
  },
  methods: {
    toCopy(text) {
      uni.setClipboardData({
        data: text,
        success: ()=> {
          uni.showToast({
            title: '复制成功',
            icon: 'none',
            duration: 2000
          })
        }
      });
    },
    /**
     * 隐藏手机号中间四位
     */
    hidePhone(phone) {
      let phoneStr = phone+"";
      if(phone.startsWith('+86')){
        phoneStr = phoneStr.substring(3);
      }
      return phoneStr.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
    }
  }
}
</script>

<style lang="scss" scoped>

.box {
  width: 100%;
  background-color: #fff;
  display: flex;
  text-align: left;
  padding: 20rpx;
}

.avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 55%;
}

.small-text-icon{
  width: 40rpx;
  height: 40rpx;
  vertical-align: middle;
  margin-right: 5rpx;
  border-radius: 55%;
}

.small-text {
  font-size: 24rpx;
  color: #666666;
  margin-right: 20rpx;
}

.text-btn{
  color: #000000;
  margin-left: 5rpx;
  border-bottom: 2rpx solid #000000;
}

.text-btn:active {
  transform: scale(0.9);
}

.big-text {
  font-size: 28rpx;
  color: #333333;
}

</style>
