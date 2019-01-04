import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Badge } from 'antd-mobile'

const colorTable = {
  /** type - color */
  top: '#f19736',
  topic: '#aaa'
}

function transferType2Color(type) {
  let color = colorTable[type]
  return color ? color : '#aaa'
}

class Label extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    const { text, type } = this.props
    const color = transferType2Color(type)
    return (
      <Badge
        text={text}
        style={{ padding: '0 3px', marginRight: '3px', backgroundColor: color, borderRadius: 2 }}
      />
    )
  }
}

export default Label