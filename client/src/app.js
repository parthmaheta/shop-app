import React, { Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Slider } from './slider/slider';
import {NavBar} from './nav/nav.js'

function App(props){
        return(<Fragment>
          <NavBar/>
          <Slider/>
          </Fragment>
        )    
}
 function addRouter(WrappedComponent){
    return (props)=>{
     return (<BrowserRouter>
                 <WrappedComponent/>
                 <Switch>
                </Switch>
            </BrowserRouter>  
        )
     }
}

export default addRouter(App)
