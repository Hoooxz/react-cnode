import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { NavBar, Icon } from 'antd-mobile';

import { getTopicName } from '../../config/topic'

class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    const topicName = getTopicName(this.props.topic)
    return (
      <div>
        <NavBar
          mode="dark"
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >CNode社区{ topicName ? ` · ${topicName}` : '' }</NavBar>
      </div>
    )
  }
}

export default HomeHeader