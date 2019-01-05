import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import List from './subpage/List'
import Drawer from './subpage/Drawer'

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      isDrawOpen: false
    }
  }
  
  render() {
    const topic = this.props.match.params.topic ? this.props.match.params.topic : 'all'
    return (
      <div>
        <HomeHeader
          topic={topic}
          isDrawOpen={this.state.isDrawOpen}
          toggleDrawer={this.toggleDrawer.bind(this)}
        />
        <Drawer
          topic={topic}
          isOpen={this.state.isDrawOpen}
          closeHandle={this.closeDrawerHandle.bind(this)}
          clickHandle={this.clickHandle.bind(this)}
        />
        <List topic={topic} />
      </div>
    )
  }

  toggleDrawer() {
    this.setState({
      isDrawOpen: !this.state.isDrawOpen
    })
  }

  closeDrawerHandle() {
    this.setState({
      isDrawOpen: false
    })
  }

  /** 用户点击了Drawer中的条目进行页面跳转 */
  clickHandle(router) {
    this.closeDrawerHandle()
    this.props.history.push(router)
  }
}

export default Home