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
      <DrawerComponent
        topic={this.props.topic}
        isOpen={this.props.isOpen}
        closeHandle={this.props.closeHandle}
        clickHandle={this.props.clickHandle}
      />
    )
  }
}

export default Drawer