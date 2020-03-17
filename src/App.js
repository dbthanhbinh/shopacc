import React from 'react'

import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import configureStore from './stores/configureStore'

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

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);
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
      <Provider store={store}>
        <Router>
          <Switch>
            {this.buildPages().map((router) => <Route {...router} />)}
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
