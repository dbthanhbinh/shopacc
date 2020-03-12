import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import {DefaultLayout} from './layouts'
import {Home} from './containers'
class App extends React.PureComponent {
  
  buildPages () {
    return [
      { path: '/home', key: 'home-page', render: () => this.withLayout(<Home />), exact: true },
      { key: 'default', render: () => <Redirect to='/home' /> }
    ]
  }

  withLayout (component, layout) {
    const Layout = layout || DefaultLayout

    return (
      <Layout>
        {component}
      </Layout>
    )
  }

  render () {
    return (
      <Router>
        <Switch>
          {this.buildPages().map((router) => <Route {...router} />)}
        </Switch>
      </Router>
    )
  }
}

export default App
