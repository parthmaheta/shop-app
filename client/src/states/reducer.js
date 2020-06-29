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

export function AuthReducer(state={isLogged:false,isLogging:false},action){
    switch(action.type){

        case 'LOGIN_SUCCESS':
            return {isLogged:true,isLogging:false}
        
        case 'LOGOUT_SUCCESS':
            return {isLogged:false,isLogging:false}            
        case 'LOGGING': 
            return {isLogged:false,isLogging:true}
        case 'LOGGING_FAILURE':
            return {isLogged:false,isLogging:false,MSG:action.msg}
            

        default :
            return {...state}    
        }
}