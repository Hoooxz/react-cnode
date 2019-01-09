import { get, post } from '../http'

let getArticleDetail = (id, token) => {
  return new Promise((resolve, reject) => {
    let params = {
      mdrender: true, // 渲染出现的所有 markdown 格式文本
      accesstoken: token,
    }
    get(`https://cnodejs.org/api/v1/topic/${id}`, params).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

let upCommentToggle = (commentId, token) => {
  return new Promise((resolve, reject) => {
    post(`https://cnodejs.org/api/v1/reply/${commentId}/ups`, {
      accesstoken: token,
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

let postComment = (articleId, token, content, commentId) => {
  return new Promise((resolve, reject) => {
    let data = {
      accesstoken: token,
      content,
    }
    if(commentId) {
      data.reply_id = commentId
    }
    post(`https://cnodejs.org/api/v1//topic/${articleId}/replies`, data)
    .then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export {
  getArticleDetail,
  upCommentToggle,
  postComment
}