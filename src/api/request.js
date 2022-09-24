//对于axios进行二次封装、
import axios from 'axios'
//引入进度条,start:进度条开始  done：进度条结束
import nprogress from 'nprogress'
import store from '../store/index'
//引入进度条样式
import 'nprogress/nprogress.css'

//1.利用axios对象方法create去创建一个axios实例
//2.request就是axios，只不过稍微配置下
const requests = axios.create({
    //配置对象
    //基础路径，发起请求的时候，路径当中会出现api
    baseURL: 'http://localhost:3000',
    timeout: 5000,
})

//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    //config：配置对象，对象里面有一个属性很重要，headers请求头
    nprogress.start()//开始请求进度条
    return config
})


//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done()//结束请求进度条
    //成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    return res.data
}, (error) => {
    //响应失败的回调函数
    return Promise.reject(new Error('faile'))
})




export default requests