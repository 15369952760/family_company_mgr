//进行远程调用
import axios from 'axios'
//包装param参数
import qs from 'qs'
// 声明基础访问地址
axios.defaults.baseURL = 'http://localhost:6782'

//声明一个调用方法
export const requestLogin = params => {return axios.post('/security/login',qs.stringify(params)).then(res => res.data)}

