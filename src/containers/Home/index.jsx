import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import List from './subpage/List'

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    const topic = this.props.match.params.topic ? this.props.match.params.topic : 'all'
    return (
      <div>
        <HomeHeader topic={topic} />
        <List topic={topic} />
      </div>
    )
  }
}

export default Home