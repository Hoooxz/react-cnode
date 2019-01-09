/** 分类 - 分类名 之间的映射关系 */

let topicPair = {
  /** 分类: 分类名 */
  ask: '问答',
  share: '分享',
  job: '招聘',
  good: '精华',
  dev: '开发'
}

export function getTopicName(topic) {
  let topicName = topicPair[topic]
  return topicName ? topicName : ''
}