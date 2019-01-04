import { get } from '../http'

let getArticleDetail = (id) => {
  return new Promise((resolve, reject) => {
    let params = {
      mdrender: true, // 渲染出现的所有 markdown 格式文本
    }
    get(`https://cnodejs.org/api/v1/topic/${id}`, params).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export {
  getArticleDetail
}