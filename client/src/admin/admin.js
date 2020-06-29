import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from './../states/store.js';
import { DashBoard } from './dashboard'
import {LOGIN,Logout} from './login.js'


function App(props) {
  return (
    <Switch>
      <Route path='/admin' exact component={LOGIN} />
      <Route path='/admin/dashboard' component={DashBoard} />
      {/* <Route path='/admin/addproduct' component={AddProduct} /> */}
      <Route path='/admin/logout' component={Logout} />

    </Switch>
  )
}

ReactDom.render(<Provider store={Store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'))
