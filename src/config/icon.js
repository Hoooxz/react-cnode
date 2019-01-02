/** 自定义图标名 - icomoon 图标名 之间的映射关系 */
/** icomoon 图标名： https://www.npmjs.com/package/react-icomoon */

let iconPair = {
  /** 自定义图标名: icomoon 图标名 */
  user: 'user',
  comment: 'bubble2',
  loading: 'spinner2',
  menu: 'menu',
  smile: 'smile',
  scan: 'eye',
  loadit: 'flickr2',
}

export function getIconName(customName) {
  let originalName = iconPair[customName]
  return originalName ? originalName : 'smile'
}