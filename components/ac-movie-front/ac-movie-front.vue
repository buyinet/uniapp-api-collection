<template>
  <view>
    <view class="box" style="padding-bottom: 0rpx">
      <u-row>
        <u-col :span="6">
          <view>
            <view style="height:10rpx"></view>
            <location-tab class="location-tab"></location-tab>
          </view>
        </u-col>
        <u-col :span="6">
          <view style="text-align: right">
            <view class="m-box">
              <view class="m m1"
                    @click="select('movie')"
                    :style="mSelected == 'movie' ? 'background-color: #333;color: #fff;' : ''"
              >电影
              </view>
              <view class="m m2"
                    @click="select('cinema')"
                    :style="mSelected == 'cinema' ? 'background-color: #333;color: #fff;' : ''"
              >影院
              </view>
            </view>
          </view>
        </u-col>
      </u-row>

    </view>


    <template v-if="mSelected == 'movie'">

      <view class="box" style="padding-bottom: 10rpx">
        <view class="box-sel">
          <view
              @click="movieSelect('hot')"
              :class="movieSelected=='hot'?'box-sel-item box-sel-item-selected':'box-sel-item'">正在热映</view>
          <view
              @click="movieSelect('coming')"
              :class="movieSelected=='coming'?'box-sel-item box-sel-item-selected':'box-sel-item'">即将上映</view>
        </view>
      </view>
      <view class="box">

        <view class="box-input">
          <u-row>
            <u-col :span="1">
              <u-icon name="search" size="40rpx"></u-icon>
            </u-col>
            <u-col :span="11">
              <input placeholder="输入影片查找" border-style="none"></input>
            </u-col>
          </u-row>
        </view>
      </view>

      <!-- 电影列表 -->
      <view class="box" style="background-color: rgba(0,0,0,0);">
        <view style="height: 20rpx"></view>
        <view class="movie-box" v-for="item in 10">
          <u-row>
            <u-col :span="3">
              <image :src="$kt.file.byPath('image/defaultShow.png')"
                     mode="aspectFill"
                     class="movie-box-img"></image>
            </u-col>
            <u-col :span="5.5">
              <view style="padding: 10rpx;vertical-align: top;padding: 0 0 0 20rpx;box-sizing: border-box">
                <view style="font-size: 32rpx;color: #000000;">测试的一部电影</view>
                <view style="height: 15rpx"></view>
                <view style="color: #666666;font-size: 26rpx">
                  <view>评分：9.3</view>
                  <view style="height: 10rpx"></view>
                  <view>类型：剧情,犯罪,悬疑</view>
                  <view style="height: 10rpx"></view>
                  <view>导演：张三</view>
                </view>
              </view>
            </u-col>
            <u-col :span="3.5">
              <view style="padding: 5rpx;box-sizing: border-box;text-align: center">
                <view style="font-size: 18rpx">
                  <text style="color:#666666">市场￥<text style="text-decoration: line-through;">51.63</text></text>
                </view>
                <view style="font-size: 20rpx">
                  <text style="color:red">省<text>￥1.63</text></text>
                </view>
                <view style="height: 10rpx"></view>
                <view style="text-align: center;font-size: 24rpx">
                  <u-row>
                    <u-col :span="6">
                      <view class="btn btn1">
                        <view>￥1.4</view>
                        <view>分享赚</view>
                      </view>
                    </u-col>
                    <u-col :span="6">
                      <view class="btn btn2">
                        <view>￥50</view>
                        <view>自购</view>
                      </view>
                    </u-col>
                  </u-row>
                </view>
              </view>
            </u-col>
          </u-row>
        </view>
      </view>

    </template>

    <!-- 电影院 -->
    <template v-if="mSelected == 'cinema'">

      <view class="box">
        <view style="height: 20rpx"></view>
        <view class="box-input">
          <u-row>
            <u-col :span="1">
              <u-icon name="search" size="40rpx"></u-icon>
            </u-col>
            <u-col :span="11">
              <input placeholder="输入影院名称或地址搜索" border-style="none"></input>
            </u-col>
          </u-row>
        </view>
      </view>

      <!-- 电影院列表 -->
      <view class="box" style="background-color: rgba(0,0,0,0);">
        <view style="height: 20rpx"></view>
        <view class="cinema-box" v-for="item in 10">
          <u-row>
            <u-col :span="9">
              <view style="padding: 10rpx;vertical-align: top;box-sizing: border-box">
                <view style="font-size: 35rpx;color: #000000;">随便乱写的影院</view>
                <view style="height: 15rpx"></view>
                <view style="font-size: 28rpx;color: #666666;">
                  南昌市西湖区北京东路与北京西路交汇处
                </view>
              </view>
            </u-col>
            <u-col :span="3">
              <view
              style="position: absolute;top:0;font-size: 18rpx;background-color: #f0f0f0;padding: 10rpx;right: 0;border-radius: 0 20rpx 0 20rpx;"
              ><text style="font-weight: bold;margin-right: 10rpx">PK</text>
               <text style="color: #666666">市场￥<text style="text-decoration: line-through;">29.90</text></text>
              </view>
              <view style="color:red;text-align: center;">
                <view style="font-size: 32rpx;">￥22.32</view>
                <view style="font-size: 24rpx">VIP再省1.2</view>
              </view>
              <view style="
              position: absolute;
              bottom: 15rpx;
              right: 15rpx;
              text-align: right;
              color: #666666;
              font-size: 26rpx;text-align: right;font-size: 26rpx;">1.22km</view>
            </u-col>
          </u-row>
        </view>
      </view>

    </template>


    <view style="height: 120rpx"></view>

  </view>
</template>

<script>
export default {
  data() {
    return {
      /**
       * 选中的菜单
       * movie: 电影
       * cinema: 影院
       */
      mSelected: "movie",
      /**
       * 正在热映：hot
       * 即将上映：coming
       */
      movieSelected: "hot",
    };
  },
  methods: {
    select(code) {
      this.mSelected = code;
    },
    movieSelect(code) {
      console.log(code);
      this.movieSelected = code;
    }
  }
}
</script>

<style lang="scss" scoped>
.m-box {
  background-color: #fff;
  margin: 0;
  padding: 0;
  display: inline-block;

  .m {
    display: inline-block;
    font-size: 32rpx;
    color: #333;
    width: 50%;
    padding: 10rpx 20rpx;
    border: 1rpx solid #333;
    box-sizing: border-box;
    // 文字间距
    letter-spacing: 2rpx;
    margin: 0;
  }

  .m1 {
    border-radius: 30rpx 0 0 30rpx;
  }

  .m2 {
    border-radius: 0 30rpx 30rpx 0;
  }
}

.box {
  position: relative;
  width: 100%;
  padding: 0 30rpx 30rpx 30rpx;
  box-sizing: border-box;
  margin: 0;
  background-color: #FFFFFF;

  .location-tab {
    margin-top: 10rpx;
  }

  .box-input {
    background-color: #f0f0f0;
    padding: 20rpx;
    border-radius: 50rpx;
    font-size: 32rpx;
  }

  .box-sel{
    margin: 0;

    .box-sel-item{
      display: inline-block;
      margin: 10rpx;
      font-size: 30rpx;
      color: #333333;
    }

    .box-sel-item{
      display: inline-block;
      margin: 10rpx;
      font-size: 30rpx;
      color: #666666;
      padding: 0 0 10rpx 0;
      box-sizing: border-box;
    }
    .box-sel-item-selected{
      color: #000000;
      border-bottom: 2rpx solid #333333;
    }
  }

}

.cinema-box{
  position: relative;
  background-color: #fff;
  padding: 20rpx;
  border-radius: 20rpx;
  margin-bottom: 30rpx;
}

.movie-box{
  background-color: #fff;
  padding: 20rpx;
  margin: 0 0 30rpx 0;
  border-bottom: 1rpx solid #f0f0f0;
  height: 220rpx;
  border-radius: 20rpx;

  .movie-box-img{
    width: 100%;
    height: 220rpx;
    border-radius: 20rpx;
    vertical-align: top;
  }

  .btn{
    background-color: #f0f0f0;
    box-sizing: border-box;
    color: #333333;
    text-align: center;
    padding: 10rpx 0 10rpx 0;
    font-size: 20rpx;
  }

  .btn1{
    border-radius: 10rpx 0 0 10rpx;
    background-color: rgba(255, 0, 0, 0.2);
    color: rgba(255, 0, 0, 1);
  }

  .btn2{
    border-radius: 0 10rpx 10rpx 0;
    background-color: rgba(255, 0, 0, 1);
    color:#fff;
  }

  .btn:active{
    opacity: .8;
  }
}


.cinema-box:active{
  transform: scale(0.98);
}

</style>
