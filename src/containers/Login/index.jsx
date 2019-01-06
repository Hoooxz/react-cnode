import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Toast } from 'antd-mobile'
import Header from '../../components/Header'
import LoginForm from '../../components/LoginForm'

import LocalStore from '../../utils/localStore'
import { getUserInfo } from '../../fetch/user/user'

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      submitable: true
    }
  }
  
  render() {
    return (
      <div>
        <Header title='请登录' />
        <LoginForm
          submitHandle={this.submitHandle.bind(this)}
          submitable={this.state.submitable}
          />
      </div>
    )
  }

  submitSuccessHandle(token) {
    Toast.success('登陆成功!')
    LocalStore.setItem('accessToken', token)
    this.props.history.push('/')
  }

  submitFailHandle() {
    Toast.fail('登陆失败，请检查Token!')
    this.setState({
      submitable: true
    })
  }

  async submitHandle(token) {
    try {
      this.setState({
        submitable: false
      })
      let userInfo = await getUserInfo(token)
      if(userInfo.loginname) {
        this.submitSuccessHandle(token)
      } else {
        throw new Error('check accessToken from cnodejs.org failed.')
      }
    } catch (e) {
      this.submitFailHandle()
    }
  }
}

export default Login