import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { WingBlank } from 'antd-mobile'
import IconBar from '../../../components/IconBar'
import Main from '../../../components/ArticleMain'
import CommentList from '../../../components/ArticleCommentList'

import LocalStore from '../../../utils/localStore'
import { getArticleDetail, upCommentToggle } from '../../../fetch/article/article'

class Detail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: {},  // 文章详情
      isLoading: true,  // 是否正在加载文章详情
      token: '', // 用户 token
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
              <CommentList
                comments={data.replies}
                articleId={data.id}
                upToggleHandle={this.upToggleHandle.bind(this)}
              />
            </WingBlank>
        }
      </div>
    )
  }

  componentDidMount() {
    let token = LocalStore.getItem('accessToken')
    this.setState({
      token 
    })
    this.loadArticleDetail(this.props.articleId, token)
  }

  async loadArticleDetail(id, token) {
    let data = await getArticleDetail(id, token)
    this.setState({
      data,
      isLoading: false
    })
  }

  async upToggleHandle(commentId) {
    try {
      let res = await upCommentToggle(commentId, this.state.token)
      return res.action
    } catch(err) {
      return ''
    }
  }
}

export default Detail