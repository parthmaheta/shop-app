import React, { createRef, useState, useEffect, createContext} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { Slider } from '../slider/slider';
import './form.css'

export const NAME=createContext('parth')

export function Home(props) {
    return (<Slider />);
}

export function ForgotPassword(props){
    
    
    let uidRef=createRef()
    let pwRef=createRef()
    let numRef=createRef()
    let [ErrUid,setErrUid]=useState('') 
    let [ErrNum,setErrNum]=useState('') 
    let [ErrPw,setErrPw]=useState('') 
    let [ErrMain,setErrMain]=useState('') 
    let [Success,setSuccess]=useState(false) 

    function clearError(){
         if(ErrMain)
          setErrMain('')

         if(ErrUid)
         { if(uidRef.current.value.length>4)
           setErrUid('')
         }
         if(ErrNum){
             if(numRef.current.value.length>9)
               setErrNum('')
         }
         if(ErrPw)
         {             
            if(pwRef.current.value.length>4)
            setErrPw('')
         }
    }
    function valid(uid,mobile,pw){
        let result=true
        if(uid.length<3)
        { result=false; setErrUid('more than 3 char')}
        if(mobile.length<10)
        { result=false; setErrNum('number should be 10 char')}
        if(pw.length<3)
         { result=false; setErrPw('more than 3 char') }
        return result
    }
   function handleSubmit(){
        let uid=uidRef.current.value
        let pw=pwRef.current.value
        let mobile=numRef.current.value
        if(valid(uid,mobile,pw))
        {      
                axios.post('http://localhost:3000/forgotpassword',{uid,mobile,pw})
                .then(result=>{
                    if(result.data.success===1)
                    {  
                        setSuccess(true)
                    }
                    if(result.data.success===0)
                     setErrMain(result.data.msg)
                    })
                .catch(err=>alert(err))
        }
    }
    if(Success){
        setTimeout(()=>props.history.push('/login'),3000)
        return (<h1 align='center'>Success,You Are Being Redirected</h1>)
    }
    return(<form>
        <div>
            <label>User Id:</label>
            <input ref={uidRef} placeholder='Enter UserId' onChange={clearError}/><br/>
            <span className='err-msg'>{ErrUid}</span>
        </div>
        <div>
            <label>Mobile :</label>
            <input ref={numRef} type='number' placeholder='Enter Mobile' onChange={clearError}/><br/>
            <span className='err-msg'>{ErrNum}</span>
        </div>
        <div>
            <label>Password:</label>
            <input ref={pwRef} type='password' placeholder='Enter Password' onChange={clearError}/><br/>
            <span className='err-msg'>{ErrPw}</span>
        </div>
        <div>
            <br/>
        <button type='button' onClick={handleSubmit}>Sign Up</button><br/>
        <span className='err-msg'>{ErrMain}</span>
        </div>
    </form>)


}

export function SignUp(props) {
    
    let uidRef=createRef()
    let pwRef=createRef()
    let numRef=createRef()
    let [ErrUid,setErrUid]=useState('') 
    let [ErrNum,setErrNum]=useState('') 
    let [ErrPw,setErrPw]=useState('') 
    let [ErrMain,setErrMain]=useState('') 
    let [Success,setSuccess]=useState(false) 

    function clearError(){
         if(ErrMain)
          setErrMain('')

         if(ErrUid)
         { if(uidRef.current.value.length>4)
           setErrUid('')
         }
         if(ErrNum){
             if(numRef.current.value.length>9)
               setErrNum('')
         }
         if(ErrPw)
         {             
            if(pwRef.current.value.length>4)
            setErrPw('')
         }
    }
    function valid(uid,mobile,pw){
        let result=true
        if(uid.length<3)
        { result=false; setErrUid('more than 3 char')}
        if(mobile.length<10)
        { result=false; setErrNum('number should be 10 char')}
        if(pw.length<3)
         { result=false; setErrPw('more than 3 char') }
        return result
    }
   function handleSubmit(){
        let uid=uidRef.current.value
        let pw=pwRef.current.value
        let mobile=numRef.current.value
        if(valid(uid,mobile,pw))
        {      
                axios.post('http://localhost:3000/signup',{uid,mobile,pw})
                .then(result=>{
                    if(result.data.success===1)
                    {  
                        setSuccess(true)
                    }
                    if(result.data.success===0)
                     setErrMain(result.data.msg)
                    })
                .catch(err=>alert(err))
        }
    }
    if(Success){
        setTimeout(()=>props.history.push('/login'),3000)
        return (<h1 align='center'>Success,You Are Being Redirected</h1>)
    }
    return(<form>
        <div>
            <label>User Id:</label>
            <input ref={uidRef} placeholder='Enter UserId' onChange={clearError}/><br/>
            <span className='err-msg'>{ErrUid}</span>
        </div>
        <div>
            <label>Mobile :</label>
            <input ref={numRef} type='number' placeholder='Enter Mobile' onChange={clearError}/><br/>
            <span className='err-msg'>{ErrNum}</span>
        </div>
        <div>
            <label>Password:</label>
            <input ref={pwRef} type='password' placeholder='Enter Password' onChange={clearError}/><br/>
            <span className='err-msg'>{ErrPw}</span>
        </div>
        <div>
            <br/>
        <button type='button' onClick={handleSubmit}>Sign Up</button><br/>
        <span className='err-msg'>{ErrMain}</span>
        </div>
    </form>)

}
function LOGOUT(props) {
    useEffect(()=>{
        axios.post('http://localhost:3000/logout',{})
        .then(result=>{
            if(result.data.success==1){
                props.dispatch({type:'LOGOUT_SUCCESS'})
                props.history.push('/')
            }
        })
        .catch(err=>{
           console.log(err)
        })
    },[])
    return (<h1 align='center'>:)  Bbye  :)</h1>)
}
export const LogOut=connect()(LOGOUT)

function LOGIN(props) {
    let uidRef=createRef()
    let pwRef=createRef()
    let [ErrUid,setErrUid]=useState('') 
    let [ErrPw,setErrPw]=useState('') 
    let [ErrMain,setErrMain]=useState('') 

    function clearError(){
         if(ErrMain)
          setErrMain('')

         if(ErrUid)
         { if(uidRef.current.value.length>4)
           setErrUid('')
         }
         if(ErrPw)
         {
             
            if(pwRef.current.value.length>4)
            setErrPw('')
         }
    }
    function valid(uid,pw){
        let result=true
        if(uid.length<3)
        { result=false; setErrUid('more than 3 char')}
        if(pw.length<3)
         { result=false; setErrPw('more than 3 char') }
        return result
    }
   function handleSubmit(){
        let uid=uidRef.current.value
        let pw=pwRef.current.value
        if(valid(uid,pw))
        {      
                axios.post('http://localhost:3000/login',{uid,pw})
                .then(result=>{
                    if(result.data.success==1){
                        props.dispatch({type:'LOGIN_SUCCESS'})
                        props.history.push('/')
                    }
                    if(result.data.success===-1)
                    {  setErrUid(result.data.uid?result.data.uid:'')
                    setErrPw(result.data.pw?result.data.pw:'')
                    }
                    if(result.data.success===0)
                    setErrMain(result.data.msg)
                    })
                .catch(err=>alert(err))
        }
    }

    return(<form>
        <div>
            <label>User Id:</label>
            <input ref={uidRef} placeholder='Enter UserId' onChange={clearError}/><br/>
            <span className='err-msg'>{ErrUid}</span>
        </div>
        <div>
            <label>Password:</label>
            <input ref={pwRef} placeholder='Enter Password' onChange={clearError}/><br/>
            <span className='err-msg'>{ErrPw}</span>
        </div>
        <div>
            <br/>
        <button type='button' onClick={handleSubmit}>LogIn</button><br/>
        <span className='err-msg'>{ErrMain}</span>
        <Link to='/forgotpassword'>forgot password ?</Link>
        </div>
        
    </form>)
}

export const LogIn=connect()(LOGIN)






