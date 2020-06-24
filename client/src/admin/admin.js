import React, { Fragment } from 'react';
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import { CartStore } from './../states/store.js';


ReactDom.render(<Provider store={CartStore}><Main/></Provider>,document.getElementById('root'))


function Main(props){
    return(<Fragment>
      <h1>WelCOme Admin</h1>
      </Fragment>
    )    
}
function addRouter(WrappedComponent){
    return (props)=>{
     return (<BrowserRouter>
                 <WrappedComponent/>
                 <Switch>
                   <Route path='/'  exact/>
                   
                   <Route path='*' component={()=><Redirect to='/'/>}/>
                   
                </Switch>
            </BrowserRouter>  
        )
     }
}
 
const App=addRouter(Main)