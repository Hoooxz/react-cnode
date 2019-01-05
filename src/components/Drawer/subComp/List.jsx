import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { List } from 'antd-mobile'
import Icon from '../../Icon'

const Item = List.Item

class ListComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    const list = this.props.list
    return (
      <List renderHeader={this.props.title}>
      {
        list.map((item, index) => {
          return <Item
            thumb={
              item.avatar
              ? <img src={item.avatar} alt={item.text} style={{borderRadius: '50%'}} />
              : <Icon type={item.icon}
            />}
            onClick={this.clickHandle.bind(this, item.router)}
            extra={ item.selected === true ? '√' : ''}
            key={index}
          >{item.text}</Item>
        })
      }
      </List>
    )
  }

  clickHandle(router) {
    if(!router) {
      router = '/'
    }
    this.props.clickHandle(router)
  }
}

export default ListComponent