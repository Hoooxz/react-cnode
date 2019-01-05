import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Drawer } from 'antd-mobile'
import List from './subComp/List'

import './style.less'

function toggleBodyScroll(scroll) {
  document.body.style.overflow = scroll ? 'auto' : 'hidden'
}

class DrawerComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      userInfo: [
        { text: 'hoooxz', avatar: 'http://hooxz.com/images/avatar.jpg' },
      ],
      topics: [
        { text: '全部', topic: 'all',   icon: 'all', selected: true },
        { text: '精华', topic: 'good',  icon: 'good' },
        { text: '分享', topic: 'share', icon: 'share' },
        { text: '问答', topic: 'ask',   icon: 'ask' },
        { text: '招聘', topic: 'job',   icon: 'job' },
      ],
      funcs: [
        { text: '消息', icon: 'mesg' },
        { text: '设置', icon: 'setting' },
        { text: '关于', icon: 'about' },
      ]
    }
  }
  
  render() {
    const sidebar = (
      <div>
        <List title="当前用户" list={this.state.userInfo} />
        <List title="分类" list={this.state.topics} />
        <List title="我的" list={this.state.funcs} />
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

  componentDidMount() {
    if(this.props.isOpen) {
      // 若抽屉的状态为开
      toggleBodyScroll(false);
    }
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
  }

  componentWillUnmount() {
    if(this.props.isOpen) {
      toggleBodyScroll(true);
    }
  }

}

export default DrawerComponent
/** I think the UI of the project should migrate to Material UI */