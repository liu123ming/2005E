import axios from 'axios'
import $loading from '@/components/index'
import Vue from 'vue'
Vue.use($loading)
const server =axios.create({
    baseURL:'http://mockjs.com',
    timeout:5000
})
server.interceptors.request.use(config=>{
    Vue.$loading.show('加载。。。')
    if(localStorage.getItem('token')){
        config.headers.token=localStorage.getItem('token')
    }
    return config
},err=>{
    Promise.reject(err)
})
server.interceptors.response.use(res=>{
    Vue.$loading.hide()
    switch(res.data.code){
        case 500:
            alert('服务器错误')
        case 404:
            alert('资源找不到')
        return
    }
    return res.data
})
export default server