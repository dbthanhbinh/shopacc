import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import {DefaultLayout, BlogLayout} from './layouts'
import {
  Home,
  SingleProduct,
  Blogs,
  BlogDetail,
  ProductsView,
  ShopCarts
} from './containers'
class App extends React.PureComponent {
  
  buildPages () {
    return [
      { path: '/', key: 'home-page', render: () => this.withLayout(<Home />), exact: true },
      { path: '/single', key: 'single-page', render: () => this.withLayout(<SingleProduct />), exact: true },
      { path: '/blogs', key: 'blogs', render: () => this.withLayout(<Blogs />, BlogLayout), exact: true },
      { path: '/blog-detail', key: 'blog-detail', render: () => this.withLayout(<BlogDetail />, BlogLayout), exact: true },
      { path: '/products', key: 'products', render: () => this.withLayout(<ProductsView />, BlogLayout), exact: true },
      { path: '/carts', key: 'carts', render: () => this.withLayout(<ShopCarts />, BlogLayout), exact: true },
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
