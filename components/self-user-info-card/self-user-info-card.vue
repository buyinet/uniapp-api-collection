<template>
  <view>
    <user-info-card
    :userInfo="userStore.state.selfInfo"
    :is-self="true"
    ></user-info-card>
  </view>
</template>

<script>
import userStore from "@/store/modules/user";

export default {
  data() {
    return {
      userStore
    };
  }
}
</script>

<style lang="scss">

</style>
