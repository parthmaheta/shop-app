import React, { createRef, useState, Fragment, useEffect } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './../components/form.css'
axios.defaults.withCredentials = true;

function login(uid, pw) {

  return function (dispatch) {
    dispatch({ type: 'LOGGING' })
    axios.post('http://localhost:3000/admin/login', { uid, pw })
      .then(result => {
        if (result.data.success == 1)
          dispatch({ type: 'LOGIN_SUCCESS' });


        if (result.data.success === 0)
          dispatch({ type: 'LOGGING_FAILURE', msg: result.data.msg });
      })
      .catch(err => dispatch({ type: 'LOGGING_FAILURE', msg: 'SomeThing Went Wrong' }))

  }
}

function Login(props) {
  let uidRef = createRef()
  let pwRef = createRef()
  let [ErrUid, setErrUid] = useState('')
  let [ErrPw, setErrPw] = useState('')

  useEffect(() => {
    if (document.cookie.indexOf('auth=') > -1)
      props.dispatch({ type: 'LOGIN_SUCCESS' })
  }, [])

  function clearError() {
    if (props.ErrMain)
      props.dispatch({ type: 'LOGGING_FAILURE', msg: '' })

    if (ErrUid) {
      if (uidRef.current.value.length > 4)
        setErrUid('')
    }
    if (ErrPw) {

      if (pwRef.current.value.length > 4)
        setErrPw('')
    }
  }
  function valid(uid, pw) {
    let result = true
    if (uid.length < 3) { result = false; setErrUid('more than 3 char') }
    if (pw.length < 3) { result = false; setErrPw('more than 3 char') }
    return result
  }
  function handleSubmit() {

    let uid = uidRef.current.value
    let pw = pwRef.current.value
    if (valid(uid, pw))
      props.dispatch(login(uid, pw))

  }

  return (<form>
    <div>
      <label>User Id:</label>
      <input ref={uidRef} placeholder='Enter UserId' onChange={clearError} /><br />
      <span className='err-msg'>{ErrUid}</span>
    </div>
    <div>
      <label>Password:</label>
      <input ref={pwRef} placeholder='Enter Password' onChange={clearError} /><br />
      <span className='err-msg'>{ErrPw}</span>
    </div>
    <div>
      <br />{props.isLoading ? <h1>Loading.....</h1> : props.isLogged ? <Redirect to='/admin/dashboard' /> : <Fragment>
        <button type='button' onClick={handleSubmit}>LogIn</button><br />
        <span className='err-msg'>{props.ErrMain}</span></Fragment>}
    </div>

  </form>)
}
const mapStateToProps = ({ AuthStore }) => {
  return { isLoading: AuthStore.isLogging, isLogged: AuthStore.isLogged, ErrMain: AuthStore.MSG }
}


export const LOGIN = connect(mapStateToProps, null)(Login)


function logout(){
   return function(dispatch){
      axios.post('http://localhost:3000/admin/logout')
      .then(result=>{
             if(result.data.success===1)
              dispatch({type:'LOGOUT_SUCCESS'})
              
      })
      .catch(err=>console.log(err))
    }
}

const LogOut=(props)=>{
    useEffect(()=>{
          props.dispatch(logout())
    },[])
    if(!props.isLogged)
    return <Redirect to='/admin'/>

    return (<h1 align='center'>please wait....</h1>)
}
const mapStateToProps1=({AuthStore})=>{
    return {isLogged:AuthStore.isLogged}
}
export const Logout=connect(mapStateToProps1,null)(LogOut)