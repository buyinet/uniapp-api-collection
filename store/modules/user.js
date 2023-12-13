import $kt from '@/uni_modules/uniapp-kantboot';

let store = {
    state: {
        selfInfo: {
            id: null,
            username: null,
            nickname: null,
            fileIdOfAvatar: null,
            phone: null,
            email: null,
            inviteUser: null,
            inviteCount: null,
            inviteCountIndirect: null,
            balance:{
                score: 0,
            }
        }
    },
    setSelfInfo(selfInfo) {
        store.state.selfInfo = selfInfo
        uni.setStorageSync("selfInfo", selfInfo);
    },
    getSelfInfo() {
        return store.state.selfInfo
    },
    // 获取用户信息 system-user-web/user/getSelf
    requestUserInfoSelf() {
        $kt.request.request({
            url: '/system-user-web/user/getSelf',
            method: 'POST',
            stateSuccess: res => {
                store.setSelfInfo(res.data);
            },
            stateFail: res => {
                if (res.stateCode == 'notLogin') {
                    store.setSelfInfo(null);
                    // 获取当前页面路径
                    let pages = getCurrentPages();
                    let currentPage = pages[pages.length - 1];
                    if (currentPage.route != 'pages/login/login') {
                        uni.navigateTo({
                            url: '/pages/login/login'
                        });
                    }
                }
            }
        })
    }
}

store.state.selfInfo = uni.getStorageSync("selfInfo") || store.state.selfInfo;

export default store;