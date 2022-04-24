import Axios from 'axios'
import env from './env'
import { Message } from 'element-ui'

// 创建axios实例

const http = Axios.create({
    baseURL: env.prod.baseURL,
    Timeout: 3000
})
// 请求拦截

http.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})


// 响应拦截
http.interceptors.response.use((res) => {
    console.log(res);
    const {
        meta: {
            msg,
            status: code
        },
        data: result
    } = res.data
    const successCode =[200,201,204]
    if(successCode.includes(code)){
        Message({
            message:msg,
            type:'success'
        })
        if(res.config.url==='/login'){
            sessionStorage.setItem('token',result.token)
        }
        return result
    }
    Message({
        message:mag,
        type:'error'
    })
   return Promise.reject(msg)

}, (error) => {
    return Promise.reject(error)
})


export default http