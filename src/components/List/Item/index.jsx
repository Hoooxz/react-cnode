import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { List, Flex } from 'antd-mobile'
import Icon from '../../Icon'
import Label from '../../Label'

import './style.less'

const Item = List.Item
const Brief = Item.Brief;

class ItemComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    // 获取传入的文章信息
    const data = this.props.data
    // 渲染一条文章
    const ItemContent = (
      <div onClick={this.clickArticleHandle.bind(this)}>
        { data.top || data.good
          ? <Label text={ data.top ? '置顶' : '精华'} type='top' />
          : ''
        }
        {data.title}
        <Brief>
          {data.content.replace(/<[^>]+>/g,"")}
        </Brief>
        <Brief>
          <Flex direction="row" justify="between">
            <span className="icon-box">
              <Icon type="user" />&nbsp;{data.author.loginname}
            </span>
            <span className="icon-box">
              <Icon type="comment" />&nbsp;{data.reply_count}&nbsp;|&nbsp;
              <Icon type="scan" />&nbsp;{data.visit_count}
            </span>
          </Flex>
        </Brief>
      </div>
    )
    // 放入 antd-mobile 的 List.Item 组件中渲染
    return (
      <Item arrow="empty" multipleLine onClick={() => {}} >
        {ItemContent}
      </Item>
    )
  }

  clickArticleHandle() {
    const clickHandle = this.props.clickHandle
    const article = this.props.data
    clickHandle(article.id)
  }
}

export default ItemComponent