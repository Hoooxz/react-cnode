import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Detail from './subpage/Detail'

class Article extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    const { id } = this.props.match.params
    return (
      <div>
        <Header title="文章详情" />
        <Detail articleId={id} />
      </div>
    )
  }
}

export default Article