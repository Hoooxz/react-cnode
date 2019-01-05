export const preventBackgroundScroll = (e) => {
  const target = e.currentTarget
  if (
    (e.deltaY < 0 && target.scrollTop <= 0) ||
    (e.deltaY > 0 && target.scrollHeight - target.clientHeight - target.scrollTop <= 0)
  ) {
    console.log('haha')
    e.stopPropagation()
    e.preventDefault()
  }
}