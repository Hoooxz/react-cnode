import axios from 'axios'

let get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then(res => {
      if(res.status === 200 && res.data.success === true) {
        resolve(res.data)
      } else {
        reject('HTTP Get Response: Error.')
      }
    }).catch(err => {
      reject(err)
    })
  })
}

let post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      if(res.status === 200 && res.data.success === true) {
        resolve(res.data)
      } else {
        reject('HTTP Post Response: Error.')
      }
    }).catch(err => {
      reject(err)
    })
  })
}

export {
  get,
  post
}