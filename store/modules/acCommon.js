import $kt from '@/uni_modules/uniapp-kantboot';

let store = {
    state: {
        setting:{
            vipPriceOfYear: null,
            // 一元人民币兑换多少积分
            moneyOfOneToScore: null,
            // 普通用户邀请可获得的积分
            scoreOfInvite: null,
        }
    },
    setSeeting(setting) {
        store.state.setting = setting
        uni.setStorageSync("setting", setting);
    },
    getSeeting() {
        if (uni.getStorageSync("setting")) {
            store.state.setting = uni.getStorageSync("setting") || store.state.setting;
        }
        return store.state.setting
    },
    // 获取用户信息 system-user-web/user/getSelf
    requestSetting() {
        $kt.request.request({
            url: '/business-ac-web/ac/common/getAcProjectSetting',
            method: 'POST',
            stateSuccess: res => {
                store.setSeeting(res.data);
            },
            stateFail: res => {
            }
        })
    }
}

store.state.setting = uni.getStorageSync("setting") || store.state.setting;

export default store;