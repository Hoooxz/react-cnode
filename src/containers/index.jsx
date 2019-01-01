import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './Home'
import Article from './Article'
import User from './User'
import About from './User'
import NotFound from './404'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/article" component={Article} />
          <Route path="/user" component={User} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App