import React,{Component} from 'react'
import './nav.css'

export function NavBar(props){
    return (<div className="navbar">
      <div onClick={toggleNav} className='nav-btn'>
          <div></div>
          <div></div>
          <div></div>
      </div>
      <div className='nav-menu-list'>
            <div><i className='fa fa-cart-plus'></i>
                <span className='nav-menu-text'>Cart</span></div>
            <div><i className='fa fa-user-o'></i><span className='nav-menu-text'>Profile</span></div>
            <div><i className='fa fa-sign-out'></i><span className='nav-menu-text'>Logout</span></div>
      </div>
    </div>)
}
function toggleNav(){
    document.getElementsByClassName('navbar')[0].classList.toggle('navbar-open')
    let menu_text=document.getElementsByClassName('nav-menu-text')
    for(let elem of menu_text)
     elem.classList.toggle('show')
}