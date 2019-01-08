import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Flex } from 'antd-mobile'
import Icon from '../../../Icon'

import './style.less'

import { getDateDiff } from '../../../../utils/time'

class Info extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      is_uped: false,
      ups: [],
      canUpToggle: true
    }
  }

  componentDidMount() {
    this.setState({
      is_uped: this.props.comment.is_uped,
      ups: this.props.comment.ups
    })
  }
  
  render() {
    // 获取基本信息
    const { 
      author: {avatar_url, loginname}, 
      create_at, floor,
    } = this.props.comment

    const createDate = getDateDiff(create_at)

    return (
      <div className="comment-info">
        <Flex justify="between">
          <div>
            <Flex>
              {/* 头像 */}
              <div>
                <img src={avatar_url} alt={loginname} className="article-info-avatar" />
              </div>
              <div>
                <Flex direction="column" align="start">
                  {/* 昵称 */}
                  <div>
                    <span className="article-info-username">{loginname}</span>
                  </div>
                  {/* 楼层、评论时间 */}
                  <div>
                  <span className="article-info-visit">{floor}楼 · {createDate}</span>
                  </div>
                </Flex>
              </div>
            </Flex>
          </div>
          <div className="comment-info-right">
            {/* 点赞数：若自己已点赞，显示实心笑脸；否则为空心 */}
            <div className="comment-info-right-up" onClick={this.upToggleHandle.bind(this)}>
              <Icon
                type={ this.state.is_uped ? 'thumb' : 'thumb-o'}
              />&nbsp;{this.state.ups.length} &nbsp;
            </div>
            {/* 回复该评论 */}
            <Icon type='reply' />
          </div>
        </Flex>
      </div>
    )
  }

  async upToggleHandle() {
    // 避免重复点击
    if(!this.state.canUpToggle) {
      return
    }
    this.setState({
      canUpToggle: false
    })

    const commentId = this.props.comment.id
    let up = await this.props.upToggleHandle(commentId)
    if(!up) {
      return
    } else if(up === 'up') {
      this.setState({
        is_uped: true,
        ups: this.state.ups.concat(['']),
        canUpToggle: true
      })
    } else {
      this.setState({
        is_uped: false,
        ups: this.state.ups.slice(0, this.state.ups.length - 1),
        canUpToggle: true
      })
    }
  }
}

export default Info