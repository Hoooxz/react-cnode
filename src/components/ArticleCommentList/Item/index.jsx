import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Info from './subcomp/Info'
import Content from '../../Content'

import './style.less'

class Item extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    const {comment} = this.props
    return (
      <div className="comment-item">
        <Info className="comment-info" comment={comment} upToggleHandle={this.props.upToggleHandle} />
        {
          comment.reply_floor
          ? <div className="comment-reply-floor">回复: {comment.reply_floor}楼</div>
          : ''
        }
        <Content content={comment.content} />
      </div>
    )
  }
}

export default Item