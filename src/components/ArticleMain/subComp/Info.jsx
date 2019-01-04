import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Flex } from 'antd-mobile'
import Icon from '../../Icon'
import Label from '../../Label'

import './style.less'

import { getTopicName } from '../../../config/topic'
import { getDateDiff } from '../../../utils/time'

class Info extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    // 获取基本信息
    const { 
      author: {avatar_url, loginname}, 
      top, tab, create_at, visit_count, is_collect 
    } = this.props.data

    const topicName = getTopicName(tab)
    const createDate = getDateDiff(create_at)

    return (
      <Flex justify="between">
        <div>
          <Flex>
            {/* 头像 */}
            <div>
              <img src={avatar_url} alt={loginname} className="article-info-avatar" />
            </div>
            <div>
              <Flex direction="column" align="start">
                {/* 置顶、标签、昵称 */}
                <div>
                  { top
                    ? <Label text='置顶' type='top' />
                    : ''
                  }
                  <Label text={topicName} type='topic' />
                  <span className="article-info-username">{loginname}</span>
                </div>
                {/* 创建时间、浏览量 */}
                <div>
                <span className="article-info-visit">{createDate}创建 · {visit_count}次浏览</span>
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
        {/* 收藏 */}
        <div>
          <Icon type={ is_collect ? 'star' : 'star-o'} />
        </div>
      </Flex>
    )
  }
}

export default Info