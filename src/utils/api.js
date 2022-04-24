import http from './request';

// 获取登录接口
export function getLogin(data){
    return http({
        url:'/login',
        method:'POST',
        data
    })
}