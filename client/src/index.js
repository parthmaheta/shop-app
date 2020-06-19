import React, { Fragment } from 'react';
import ReactDom from 'react-dom'
import App from './app.js'
import {Provider} from 'react-redux'
import { CartStore } from './states/store.js';


ReactDom.render(<Provider store={CartStore}><App/></Provider>,document.getElementById('root'))








 