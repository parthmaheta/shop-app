import { INCREMENT,DECREMENT } from "./action.js"

let initState={
    totalItems:220
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