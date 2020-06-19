import React, { useEffect } from 'react';
import  './nav.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const navbar = (props) => { 
    useEffect(()=>{
        //props.dispatch({type:'INCREMENT'})
        console.log(props);
        
    },[])
    
   return (<div className='navbar'>
       <div className='navbar-logo'><Link to='/'>MySHOP</Link></div>
       <div className='navbar-right-col'>
         <Link to='/cart'>   <span className='fa fa-cart-plus'>{props.totalItems>0&&<Badge num={props.totalItems}/>}</span></Link>
         <Link to='/signup'> <button className='navbar-btn'>SignUp</button></Link>
         <Link to='/login'>  <button className='navbar-btn'>Login</button></Link>
       </div>
   </div>)
}
 function Badge(props){
 return(<span className='badge' id='lblCartCount'>{props.num}</span>)
 }
const mapStateToProps=({totalItems})=>{return {totalItems}}


 export let NavBar=connect(mapStateToProps,null)(navbar)