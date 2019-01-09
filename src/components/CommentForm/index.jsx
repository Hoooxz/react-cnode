import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { List, TextareaItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

import './style.less'

class CommentForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      comment: '',
      canInput: true
    }
  }
  
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => '评论'}>
          <TextareaItem
            {...getFieldProps('count')}
            rows={5}
            count={100}
            placeholder="请输入..."
            value={this.state.comment}
            onChange={this.changeHandle.bind(this)}
          />
        </List>
        <Button
          className="comment-form-btn"
          type="ghost"
          disabled={!this.state.canInput || !this.state.comment.length}
          onClick={this.submitHandle.bind(this)}
        >提交</Button>
      </div>
    )
  }

  changeHandle(value) {
    this.setState({
      comment: value
    })
  }

  async submitHandle() {
    if(this.state.comment.trim().length === 0) {
      return
    }
    this.setState({
      canInput: false
    })
    let rst = await this.props.commentHandle(this.state.comment)
    this.setState({
      canInput: true,
      comment: rst ? '' : this.state.comment
    })
  }
}

const CommentFormComponent = createForm()(CommentForm);
export default CommentFormComponent