<script>
import indexJs from '@/jsInAppVue/index.js'
import i18nJs from "@/commonJs/i18n";
import userStore from "@/store/modules/user";
import acCommonStore from "@/store/modules/acCommon";
import acCommon from "@/store/modules/acCommon";

export default {
  created() {

  },
  onLaunch(e) {
    // 清理前缀是"requestNumber:"的缓存
    indexJs.clearRequestNumberCache();

    // 获取系统字典
    i18nJs.getDictI18nMapOfAppFront();

    userStore.requestUserInfoSelf();

    acCommonStore.requestSetting();


    if(e.query.inviteCode){
      uni.setStorageSync('inviteCode',e.query.inviteCode);
    }


  },
  onShow: function () {
  },
  onHide: function () {
  },
  methods: {
  }
}
</script>

<style>
/*每个页面公共css */
</style>
