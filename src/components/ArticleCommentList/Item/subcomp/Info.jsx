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
  }
  
  render() {
    // 获取基本信息
    const { 
      author: {avatar_url, loginname}, 
      create_at, is_uped, floor, ups
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
            <Icon type={ is_uped ? 'thumb' : 'thumb-o'} />&nbsp;{ups.length} &nbsp;
            {/* 回复该评论 */}
            <Icon type='reply' />
          </div>
        </Flex>
      </div>
    )
  }
}

export default Info