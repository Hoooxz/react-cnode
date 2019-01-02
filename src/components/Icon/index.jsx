import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import IcoMoon from 'react-icomoon';

import { getIconName } from '../../config/icon'

class Icon extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <IcoMoon icon={getIconName(this.props.type)} />
    )
  }
}

export default Icon