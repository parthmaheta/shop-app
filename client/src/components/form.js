import React, { createRef, forwardRef, Component, useState} from 'react';
import axios from 'axios'
import { Slider } from '../slider/slider';
import './form.css'

export function Home(props) {
    return (<Slider />);
}

export function SignUp(props) {
    return <h1>Signing...</h1>
}
export function LogOut(props) {
    return <h1>:)  Bbye  :)</h1>
}

export function LogIn(props) {
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
        </div>
    </form>)
}







