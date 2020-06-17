import React from 'react';
import ReactDom from 'react-dom'

ReactDom.render(<App name='prinse'/>,document.getElementById('root'))


function App(props){
   
return <h1>Welcome {props.name}</h1>
}




 