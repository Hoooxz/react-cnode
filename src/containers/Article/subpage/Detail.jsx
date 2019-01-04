import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { WingBlank } from 'antd-mobile'
import IconBar from '../../../components/IconBar'
import Main from '../../../components/ArticleMain'

import { getArticleDetail } from '../../../fetch/article/article'

class Detail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: {},  // 文章详情
      isLoading: true,  // 是否正在加载文章详情
    }
  }
  
  render() {
    const { data, isLoading } = this.state
    return (
      <div>
        {
          isLoading
          ? <IconBar type="loading" />
          : <WingBlank size="md">
              <Main data={data} />
            </WingBlank>
        }
      </div>
    )
  }

  componentDidMount() {
    this.loadArticleDetail(this.props.articleId)
  }

  async loadArticleDetail(id) {
    let data = await getArticleDetail(id)
    console.log(data)
    this.setState({
      data,
      isLoading: false
    })
  }
}

export default Detail