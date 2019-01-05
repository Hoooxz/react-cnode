/** 自定义图标名 - icomoon 图标名 之间的映射关系 */
/** icomoon 图标名： https://www.npmjs.com/package/react-icomoon */

let iconPair = {
  /** 自定义图标名: icomoon 图标名 */
  user: 'user',
  comment: 'bubble2',
  loading: 'spinner2',
  menu: 'menu',
  back: 'arrow-left2',  /** 导航条上的返回（左箭头） */
  thumb: 'smile2',
  'thumb-o': 'smile',
  reply: 'undo2',
  scan: 'eye',
  loadit: 'flickr2',
  star: 'star-full',
  'star-o': 'star-empty',
  /** for topics in Drawer */
  all: 'home2',
  good: 'point-up',
  share: 'share2',
  ask: 'magic-wand',
  job: 'briefcase',
  /** for funcs in Drawer */
  mesg: 'bullhorn',
  setting: 'cog',
  about: 'notification',
}

export function getIconName(customName) {
  let originalName = iconPair[customName]
  return originalName ? originalName : 'info'
}