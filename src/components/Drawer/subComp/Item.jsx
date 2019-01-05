import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Item extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <div>
        Item
      </div>
    )
  }
}

export default Item