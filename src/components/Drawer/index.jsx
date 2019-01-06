import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Drawer } from 'antd-mobile'
import List from './subComp/List'

import './style.less'
import AvatarDefault from '../../static/image/avatar_default.png'

function toggleBodyScroll(scroll) {
  document.body.style.overflow = scroll ? 'auto' : 'hidden'
}

class DrawerComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      userInfo: {
        text: '请登陆',
        avatar: AvatarDefault,
        router: '/login'
      },
      topics: [
        { text: '全部', topic: 'all',   icon: 'all',   router:'/', selected: true },
        { text: '精华', topic: 'good',  icon: 'good',  router:'/topic/good' },
        { text: '分享', topic: 'share', icon: 'share', router:'/topic/share' },
        { text: '问答', topic: 'ask',   icon: 'ask',   router:'/topic/ask' },
        { text: '招聘', topic: 'job',   icon: 'job',   router:'/topic/job' },
      ],
      funcs: [
        { text: '消息', icon: 'mesg',    router:'/' },
        { text: '设置', icon: 'setting', router:'/' },
        { text: '关于', icon: 'about',   router:'/' },
      ]
    }
  }
  
  render() {
    const sidebar = (
      <div>
        <List title="当前用户" list={ [this.state.userInfo] } clickHandle={this.clickHandle.bind(this)} />
        <List title="分类" list={this.state.topics} clickHandle={this.clickHandle.bind(this)} />
        <List title="我的" list={this.state.funcs} clickHandle={this.clickHandle.bind(this)} />
      </div>
    )

    return (
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.props.isOpen}
      >
        {''}
      </Drawer>
    )
  }

  /** 点击抽屉中的项目跳转页面 */
  clickHandle(router) {
    this.props.clickHandle(router)
  }

  /** 根据传入的topic刷新Drawer中话题分类的选中状态 */
  refreshTopicSelected(newTopic) {
    let topics = this.state.topics
    topics = topics.map((item) => {
      item.selected = item.topic === newTopic
      return item
    })
    this.setState({
      topics
    })
  }

  componentDidMount() {
    if(this.props.isOpen) {
      // 若抽屉的状态为开
      toggleBodyScroll(false);
    }

    this.refreshTopicSelected(this.props.topic)
  }

  setUserInfo() {
    const userInfo = this.props.userInfo
    if(!userInfo.loginname) {
      return;
    }
    
    this.setState({
      userInfo: {
        text: userInfo.loginname,
        avatar: userInfo.avatar_url,
        router: '/user'
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(!this.props.isOpen && prevProps.isOpen) {
      // 新的状态为关，旧的状态为开
      toggleBodyScroll(true);
    }
    if(this.props.isOpen && !prevProps.isOpen) {
      // 新的状态为开，旧的状态为关
      toggleBodyScroll(false);
    }
    if(this.props.topic !== prevProps.topic) {
      this.refreshTopicSelected(this.props.topic)
    }

    // 若发生改变，则将用户信息拷贝进state
    if(prevProps.userInfo.loginname !== this.props.userInfo.loginname) {
      this.setUserInfo()
    }
  }

  componentWillUnmount() {
    if(this.props.isOpen) {
      toggleBodyScroll(true);
    }
  }

}

export default DrawerComponent
/** I think the UI of the project should migrate to Material UI */