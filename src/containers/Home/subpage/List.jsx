import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import Icon from '../../../components/IconBar'

import { PER_PAGE_LIMIT } from '../../../constants/list'
import { getList } from '../../../fetch/Home/list'

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: [],             // 存储列表信息
      hasMore: false,       // 记录当前状态下还有无更多的数据可供加载
      isLoadingMore: false, // 记录当前状态下，是“加载中”还是“点击加载更多”
      page: 1               // 下一页的页码
    }
  }
  
  render() {
    return (
      <div>
        {
          this.state.data.length
          ? <ListComponent data={this.state.data}/>
          : <Icon type="loading" />
        }
        {
          this.state.hasMore
          ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
          : ''
        }
      </div>
    )
  }

  componentDidMount() {
    this.loadFirstPageData()
  }

  // 获取首屏数据
  async loadFirstPageData () {
    const listData = await getList('all', 1, PER_PAGE_LIMIT)
    this.resultHandle(listData)
  }

  // 加载更多数据
  async loadMoreData() {
    // 记录状态
    this.setState({
      isLoadingMore: true
    })
    const page = this.state.page  // 下一页的页码
    const listData = await getList('all', page, PER_PAGE_LIMIT)
    this.resultHandle(listData)

    // 增加 page 计数
    this.setState({
      page: page + 1,
      isLoadingMore: false
    })
  }

  // 数据处理
  resultHandle(list) {
    const hasMore = Boolean(list.length)

    // 存储
    this.setState({
      hasMore,
      data: this.state.data.concat(list)
    })
  }

}

export default List