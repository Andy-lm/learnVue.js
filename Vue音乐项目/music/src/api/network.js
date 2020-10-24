import axios from 'axios';
// import { reject, resolve } from 'core-js/fn/promise';


axios.defaults.baseURL = 'http://127.0.0.1:3000/';
axios.defaults.timeout = 5000;

export default {
    // 封装我们的get与post方法
    get: function (path = '', data = {}) {
        return new Promise(function (resolve, reject) {
            axios.get(path, {
                params: data
            }).then(function (response) {
                resolve(response.data);
            }).catch(function (error) {
                reject(error);
            })
        })
    },
    post: function (path = '', data = {}) {
        return new Promise(function (resolve, reject) {
            axios.post(path, data).then(function (response) {
                resolve(response.data);
            }).catch(function (error) {
                reject(error);
            })
        })
    },
    all: function (list) {
        return new Promise(function (resolve, reject) {
            axios.all(list).then(axios.spread(function (...result) {
                resolve(result)
            })).catch(function (err) {
                reject(err);
            })
        })
    }
}