import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Content extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <div dangerouslySetInnerHTML = {{ __html: this.props.content }} />
    )
  }
}

export default Content