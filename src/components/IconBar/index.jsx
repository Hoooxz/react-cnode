import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Flex } from 'antd-mobile'
import Icon from '../Icon'

class IconBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <Flex justify="center" style={{padding: "10px 0"}}>
        <Icon type={ this.props.type } />
      </Flex>
    )
  }
}

export default IconBar