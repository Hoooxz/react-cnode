import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { List } from 'antd-mobile'
import Item from './Item'

class ListComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <div>
        <List className="my-list">
          {
            this.props.data.map((item, index)=> {
              return (
                <Item key={index} data={item} clickHandle={this.props.clickHandle} />
              )
            })
          }
        </List>
      </div>
    )
  }
}

export default ListComponent