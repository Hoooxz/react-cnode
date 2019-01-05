import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DrawerComponent from '../../../components/Drawer'

class Drawer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <DrawerComponent isOpen={this.props.isOpen} closeHandle={this.props.closeHandle} />
    )
  }
}

export default Drawer