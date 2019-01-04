import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'

import './style.less'

function getFloorById(comments, comment_id) {
  let floor = 0
  comments.some((item, index) => {
    if(item.id === comment_id) {
      floor = index
      return true;
    }
    return false;
  })
  return floor
}

class CommentList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    const comments = this.props.comments
    const length = comments.length
    const CommentsJsx = comments.map((comment, index) => {
      comment.floor = index + 1
      if(comment.reply_id) {
        comment.reply_floor = getFloorById(comments, comment.reply_id) + 1
      }
      return <Item key={index} comment={comment} />
    })
    return (
      <div>
        <h3 className="comments-title">{length}条评论</h3>
        {CommentsJsx}
      </div>
    )
  }
}

export default CommentList