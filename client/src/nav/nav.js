import React, { useEffect, Fragment, createRef } from 'react';
import  './nav.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const navbar = (props) => { 
    let menu=createRef()
    
   function toggleMenu(){
     menu.current.classList.toggle('show')
   
   }
        
   return (<div className='navbar'>
       <div className='navbar-logo'><Link to='/' style={{color:'green'}}>MySHOP</Link></div>
       <div className='navbar-right-col' ref={menu}>
         <Link to='/cart'>   <span className='fa fa-cart-plus'>{props.totalItems>0&&<Badge num={props.totalItems}/>}</span></Link>
         {props.LOGGED?<NavbarBtn  path='/logout' value='LogOut'/>:<Fragment><NavbarBtn path='/signup' value='SignUp'/> <NavbarBtn path='/login' value='LogIn'/></Fragment>}
         
       </div>
       <button className='toggle-menu-btn fa fa-bars' onClick={toggleMenu}></button>
   </div>)
}

function NavbarBtn(props){
   return (<Link to={props.path}> <button className='navbar-btn'>{props.value}</button></Link>)
}

 function Badge(props){
 return(<span className='badge' id='lblCartCount'>{props.num}</span>)
 }
const mapStateToProps=(state)=>{return {totalItems:state.CartStore.totalItems,LOGGED:state.AuthStore.isLogged} }


 export let NavBar=connect(mapStateToProps,null)(navbar)