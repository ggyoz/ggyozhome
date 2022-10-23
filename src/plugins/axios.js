"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.BASE_URL || process.env.apiUrl || "",
  timeout: 60 * 1000, // Timeout
	proxy : {
		host : 'localhost',
		port : process.env.VUE_APP_SERVER_PORT,
	}
  // withCredentials: true, // Check cross-site Access-Control
};

// axios 생성
const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {

    const { $Progress } = Vue.prototype;
    if($Progress) $Progress.start();

    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {

    const { $Progress, $toast } = Vue.prototype;
    const {data, status} = response;
    let msg = "";
    console.log("AJAX", response);
    
    if(status != 200){
      msg = "서버접속 실패";
    }

    if(data && data.err){
      msg = data.err;
    }

    if(msg){
      if($toast) $toast.error(msg);
      if($Progress) $Progress.fail();
      console.warn(msg);
      return false;
    }else{
      if($Progress) $Progress.finish();
      return data;
    }
    
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

const Plugin = {};
Plugin.install = function(Vue, options) {
  Vue.axios = _axios;  
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

// 간편하게 아래와 같은 방식으로도 사용할 수 있음
//Vue.prototype.$axios = _axios;

export default _axios;
