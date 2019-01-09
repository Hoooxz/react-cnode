import { get } from '../http'

let topics = ['ask', 'share', 'job', 'good', 'dev']

let getList = (topic, page, limit) => {
  return new Promise((resolve, reject) => {
    let params = {
      page,
      limit,
      mdrender: true, // 渲染出现的所有 markdown 格式文本
    }
    if(topics.indexOf(topic) > -1) {
      params.tab = topic
    }
    get('https://cnodejs.org/api/v1/topics', params).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export {
  getList
}