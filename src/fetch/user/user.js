import { post } from '../http'

let getUserInfo = (accessToken) => {
  return new Promise((resolve, reject) => {
    post('https://cnodejs.org/api/v1/accesstoken', {
      accesstoken: accessToken
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export {
  getUserInfo
}