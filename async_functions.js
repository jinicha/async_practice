const axios = require('axios');
const Promise = require('bluebird');
const fs = require('fs');
const data = {};

module.exports = {
  getData: (url) => {
    return axios.get(url)
  },
  postData: (url, data) => axios(url, data),
  updateData: url => axios.put(url),
  deleteData: (url) => { },
  readFile: (file) => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    })
  },
  writeFile: (file, cb) => {},
  asyncTask1: (val1, val2, duration = 1500) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(val1 + val2), duration)
    })
  },
  asyncTask2: (cb) => { },
  asyncTask3: (cb) => { },
  asyncTask4: (cb) => { },
  asyncTask5: (cb) => new Promise(resolve => resolve(setTimeout(()=>{console.log('2).'); return new Promise(res => res('2).'))}, 500))),
}