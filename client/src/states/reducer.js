import { INCREMENT,DECREMENT } from "./action.js"

let initState={
    totalItems:0
}
export function CartReducer(state=initState,action){
    switch(action.type){
        case INCREMENT:
            return {...state,totalItems:state.totalItems+1}
        case DECREMENT:
            return  {...state,totalItems:state.totalItems-1}   
        default   :
           return state
    }
}

export function AuthReducer(state={isLogged:false},action){
    switch(action.type){

        case 'LOGIN_SUCCESS':
            return {isLogged:true}
 
        case 'LOGIN_FAILURE':
            return {isLogged:false}

        case 'LOGOUT_SUCCESS':
            return {isLogged:false}
        default :
            return {...state}    
        }
}