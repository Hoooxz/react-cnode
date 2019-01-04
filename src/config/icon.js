/** 自定义图标名 - icomoon 图标名 之间的映射关系 */
/** icomoon 图标名： https://www.npmjs.com/package/react-icomoon */

let iconPair = {
  /** 自定义图标名: icomoon 图标名 */
  user: 'user',
  comment: 'bubble2',
  loading: 'spinner2',
  menu: 'menu',
  thumb: 'smile2',
  'thumb-o': 'smile',
  reply: 'undo2',
  scan: 'eye',
  loadit: 'flickr2',
  star: 'star-full',
  'star-o': 'star-empty',
}

export function getIconName(customName) {
  let originalName = iconPair[customName]
  return originalName ? originalName : 'info'
}