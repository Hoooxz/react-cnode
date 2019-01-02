import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Icon from '../IconBar'

class LoadMore extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <div ref="wrapper">
        <Icon type={ this.props.isLoadingMore ? 'loading' : 'down' } />
      </div>
    )
  }

  loadMoreHandle() {
    // 执行传递过来的 loadMoreData 函数
    this.props.loadMoreFn()
  }

  componentDidMount() {
    const loadMoreFn = this.props.loadMoreFn
    const wrapper = this.refs.wrapper
    let timeoutId
    // 滚动到底触发的回调函数
    function callback() {
      const top = wrapper.getBoundingClientRect().top
      const windowHeight = window.screen.height
      if(top && top < windowHeight) {
        // 当 wrapper 已经被滚动到暴露在页面的可视范围之内的时候触发
        loadMoreFn()
      }
    }
    window.addEventListener('scroll', function() {
      if(this.props.isLoadingMore) {
        return
      }
      if(timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(callback, 50)
    }.bind(this))
  }
}

export default LoadMore