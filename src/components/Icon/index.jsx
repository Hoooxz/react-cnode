import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import IcoMoon from 'react-icomoon';

import { getIconName } from '../../config/icon'

import './style.less'

class Icon extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    const iconName = getIconName(this.props.type)
    const spinFlag = this.props.type === 'loading'
    return (
      <IcoMoon
        className={ spinFlag ? 'spin' : ''}
        icon={iconName}
      />
    )
  }
}

export default Icon