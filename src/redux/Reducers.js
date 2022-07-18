import { act } from "react-dom/cjs/react-dom-test-utils.production.min"
import {  GET_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS, GET_SINGLE_POST_FAILURE, GET_SINGLE_POST_REQUEST, GET_SINGLE_POST_SUCCESS, POST_FAILURE, POST_REQUEST, POST_SUCCESS, UPDATE_POST_FAILURE, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./Contants"



export const reducer1 = async(state={user:{}},action)=>{
    switch(action.type){
        case USER_REGISTER_REQUEST:return{
            loading:true,
            user:state
        }
        case USER_REGISTER_SUCCESS:return{
            loading:false,
            user:action.payload
        }
        case USER_REGISTER_FAILURE:return{
            loading:false,
            user:action.payload
        }
        default:return state
    }
}



export const reducer2 = async(state={user:{}},action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:return{
            loading:true,
            user:state
        }
        case USER_LOGIN_SUCCESS:return{
            loading:false,
            user:action.payload
        }
        case USER_LOGIN_FAILURE:return{
            loading:false,
            user:action.payload
        }
        default:return state
    }
}


export const reducer3 = async(state={post:{}},action)=>{
    switch(action.type){
        case POST_REQUEST:return{
            loading:true,
            post:state
        }
        case POST_SUCCESS:return{
            loading:false,
            post:action.payload
        }
        case POST_FAILURE:return{
            loading:false,
            post:action.payload
        }
        default:return state
    }
}


export const reducer4 = (state = {posts:{}},action)=>{
    switch(action.type){
        case GET_POST_REQUEST:return{
            
            loading:true,
            ...state
        }
        case GET_POST_SUCCESS:
            console.log("success",action.payload);    
        return{
            
            loading:false,
            posts:action.payload
        }
        case GET_POST_FAILURE:return{
            loading:false,
            posts:action.payload
        }
        
        default:return state

    }
}

export const reducer5 = async(state = {user:{}},action)=>{
    switch(action.type){
        case UPDATE_USER_REQUEST:return{
            loading:true,
            ...state
        }
        case UPDATE_USER_SUCCESS:return{
            laoding:false,
            payload:action.payload
        }
        case UPDATE_USER_FAILURE:return{
            loading:false,
            payload:action.payload
        }
        default:return state
    }
}


export const reducer6 = (state = {posts:{}},action)=>{
    switch(action.type){
        case UPDATE_POST_REQUEST:return{
            loading:true,
            ...state
        }
        case UPDATE_POST_SUCCESS:return{
            laoding:false,
            payload:action.payload
        }
        case UPDATE_POST_FAILURE:return{
            loading:false,
            payload:action.payload
        }
        default:return state
    }
}

export const reducer7 = (state = {post:{}},action)=>{

    switch(action.type){
        case GET_SINGLE_POST_REQUEST:return{
            loading:true,
            ...state
        }
        case GET_SINGLE_POST_SUCCESS:return{
            loading:false,
            payload:action.payload
        }
        case GET_SINGLE_POST_FAILURE:return{
            loading:false,
            payload:action.payload
        }
        default:return state
    }

}