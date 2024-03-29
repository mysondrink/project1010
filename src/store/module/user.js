import storageService from '@/service/storageService';
import userService from '@/service/userService';

const userModule = {
    namespaced: true,
    state: {
        token: storageService.get(storageService.USER_TOKEN),
        userInfo: storageService.get(storageService.USER_INFO) ? JSON.parse(storageService.get(storageService.USER_INFO)) : null, //eslint-disable-line
    },

    mutations: {
        SET_TOKEN(state, token) {
            // 更新本地缓存
            storageService.set(storageService.USER_TOKEN, token);
            // 更新state
            state.token = token;
        },
        SET_USERINFO(state, userInfo) {
            // 更新本地缓存
            storageService.set(storageService.USER_INFO, JSON.stringify(userInfo));
            // 更新state
            state.userInfo = userInfo;
        },
    },

    actions: {
        register(context, { name, telephone, password }) {
            return new Promise((resolve, reject) => {
                userService.register({ name, telephone, password }).then((res) => {
                    // 保存token
                    context.commit('SET_TOKEN', res.data.data.token);
                    return userService.info();
                }).then((res) => {
                    // 保存用户信息
                    context.commit('SET_USERINFO', res.data.data.user);
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        login(context, { telephone, password }) {
            return new Promise((resolve, reject) => {
                userService.login({ telephone, password }).then((res) => {
                    // 保存token
                    context.commit('SET_TOKEN', res.data.data.token);
                    return userService.info();
                }).then((res) => {
                    // 保存用户信息
                    context.commit('SET_USERINFO', res.data.data.user);
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        logout( context ) {
            // 清除token
            context.commit('SET_TOKEN', "");

            // 清除用户信息
            context.commit('SET_USERINFO', "");

            // 清除本地缓冲
            storageService.set(storageService.USER_TOKEN, "");
            storageService.set(storageService.USER_INFO, "");
        },
        // 轨道请求
        trailinfo(context, { controller_type }) {
            return new Promise((resolve, reject) => {
                userService.trailinfo({ controller_type }).then((res) => {
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        // 模块请求
        moduleinfo(context, { controller_type }) {
            return new Promise((resolve, reject) => {
                userService.moduleinfo({ controller_type }).then((res) => {
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
    },
};
export default userModule;
