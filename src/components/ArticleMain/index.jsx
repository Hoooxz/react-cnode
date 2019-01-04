import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Info from './subComp/Info'
import Content from '../Content'

import './style.less'

class ArticleMain extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    const {data} = this.props
    return (
      <div>
        <h2 className="article-title">{data.title}</h2>
        <Info data={data} />
        <Content content={data.content} />
      </div>
    )
  }
}

export default ArticleMain