import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { NavBar } from 'antd-mobile';
import Icon from '../../components/Icon'

import { getTopicName } from '../../config/topic'

class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    const topicName = getTopicName(this.props.topic)
    const { isDrawOpen } = this.props
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type={ isDrawOpen ? 'back' : 'menu'} />}
          onLeftClick={this.clickLeftHandle.bind(this)}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >CNode社区{ topicName ? ` · ${topicName}` : '' }</NavBar>
      </div>
    )
  }

  clickLeftHandle() {
    this.props.toggleDrawer()
  }
}

export default HomeHeader