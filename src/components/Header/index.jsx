import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.clickHandle.bind(this)}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >{this.props.title}</NavBar>
      </div>
    )
  }

  // 点击左侧按钮
  clickHandle() {
    const backRouter = this.props.backRouter
    if(backRouter) {
      // 若传入返回路由，则返回至传入的路由
      this.props.history.push(backRouter)
    } else {
      window.history.back()
    }
  }
}

export default withRouter(Header)