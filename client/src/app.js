import React, { Fragment } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {NavBar} from './nav/nav.js'
import {SignUp,LogIn,LogOut,Home, ForgotPassword} from './components/form.js'
import { ErrorBoundary } from './components/error.js';

function App(props){
        return(<Fragment>
          <NavBar/> 
          </Fragment>
        )    
}
 function addRouter(WrappedComponent){
    return (props)=>{
     return (<BrowserRouter>
                 <WrappedComponent/>
                 <ErrorBoundary>
                    <Switch>
                      <Route path='/'  component={Home} exact/>
                      <Route path='/signup'  component={SignUp}/>
                      <Route path='/login' component={LogIn}/>
                      <Route path='/logout' component={LogOut}/>
                      <Route path='/forgotpassword' component={ForgotPassword}/>
                      <Route path='*' component={()=><Redirect to='/'/>}/>
                      
                    </Switch>
                </ErrorBoundary>
            </BrowserRouter>  
        )
     }
}

export default addRouter(App)
