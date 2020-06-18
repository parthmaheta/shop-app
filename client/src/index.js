import React, { Fragment } from 'react';
import ReactDom from 'react-dom'
import {NavBar} from './nav/nav.js'
import {Slider} from './slider/slider.js'
ReactDom.render(<App/>,document.getElementById('root'))


function App(props){
  return <Fragment><NavBar/><Slider/></Fragment>
}





 