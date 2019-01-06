import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DrawerComponent from '../../../components/Drawer'

import LocalStore from '../../../utils/localStore'
import { getUserInfo } from '../../../fetch/user/user'

class Drawer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      userInfo: {},
    }
  }
  
  render() {
    return (
      <DrawerComponent
        userInfo={this.state.userInfo}
        topic={this.props.topic}
        isOpen={this.props.isOpen}
        closeHandle={this.props.closeHandle}
        clickHandle={this.props.clickHandle}
      />
    )
  }

  async componentDidMount() {
    let userInfo = {}
    let accessToken = LocalStore.getItem('accessToken')
    if(accessToken) {
      try {
        userInfo = await getUserInfo(accessToken)
        userInfo.accessToken = accessToken
      } catch (e) {
        userInfo.err = e
      }
    }
    this.setState({
      userInfo
    })
  }
}

export default Drawer