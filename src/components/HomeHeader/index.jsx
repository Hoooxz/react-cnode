import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { NavBar, Icon } from 'antd-mobile';

class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >CNode社区</NavBar>
      </div>
    )
  }
}

export default HomeHeader