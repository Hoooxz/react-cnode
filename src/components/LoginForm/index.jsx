import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { List, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      token: '',
      btnDisable: false
    }
  }
  
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => '登录'}>
          <InputItem
            {...getFieldProps('inputclear')}
            clear
            placeholder="请输入您的AccessToken"
            value={this.state.token}
            onChange={this.changeHandle.bind(this)}
          >Token</InputItem>
        </List>
        <Button
          type="ghost"
          style={{width: '200px', margin: '30px auto'}}
          disabled={!this.props.submitable || !this.state.token.length}
          onClick={this.submitHandle.bind(this)}
        >提交</Button>
      </div>
    )
  }

  changeHandle(token) {
    this.setState({
      token
    })
  }

  submitHandle() {
    this.setState({
      btnDisable: true
    })
    this.props.submitHandle(this.state.token)
  }
}


const LoginFormComponent = createForm()(LoginForm);

export default LoginFormComponent