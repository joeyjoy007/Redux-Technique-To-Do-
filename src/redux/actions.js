
import {  USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, POST_REQUEST, POST_SUCCESS, POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE, UPDATE_USER_FAILURE,UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, UPDATE_POST_REQUEST, GET_SINGLE_POST_SUCCESS, GET_SINGLE_POST_REQUEST, GET_SINGLE_POST_FAILURE } from "./Contants"
import axios from 'axios'

export const RegisterUser = (data)=>async(dispatch)=>{
    console.log(1);
        const{name,email,password} = data
        console.log(2);
    try {
        console.log(3);
        dispatch({type:USER_REGISTER_REQUEST})
        const user = await axios.post('/register',{name,email,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(4);
        dispatch({type:USER_REGISTER_SUCCESS,payload:user})



    } catch (error) {

        dispatch({type:USER_REGISTER_FAILURE,payload:error.message})
        
    }
}

export const LoginUser = (data)=>async(dispatch)=>{
    const {email,password}=data

    try {

        dispatch({type:USER_LOGIN_REQUEST})
        const user = await axios.post('/login',{email,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({type:USER_LOGIN_SUCCESS,payload:user})
        
    } catch (error) {

        dispatch({type:USER_LOGIN_FAILURE,payload:error.message})
        
    }
}

export const post = (data)=> async(dispatch)=>{

    const{post}=data
   
    try {
        console.log(2);
        dispatch({type:POST_REQUEST})
        console.log(3);
        const posts =await  axios.post('/post',{post},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        

        dispatch({type:POST_SUCCESS,payload:posts})
        
    } catch (error) {
        
        dispatch({type:POST_FAILURE,payload:error.message})
    }
}



export const getPost = ()=>async(dispatch)=>{
   

    try {
       

        dispatch({type:GET_POST_REQUEST})
        

        const data = await axios.get('/getPost')

        const data1 = data.data.getPost

        // console.log("GETPOST DATA IS ",data1.map((datas)=>{
        //     return console.log("datas is",datas.post)
        // }))


        dispatch({type:GET_POST_SUCCESS,payload:data1.map((datas)=>{
            return datas.post
        })})
        
        
    } catch (error) {
        dispatch({type:GET_POST_FAILURE,payload:error.message})
        
    }

}


export const updateUser = (data)=>async(dispatch)=>{
   
    const {name,email} = data

    try {
       console.log(1);

        dispatch({type:UPDATE_USER_REQUEST})
        console.log(2);

        const data = await axios.patch('/updateUser',{name,email},{
            headers:{"Content-Type":"application/json"}
        })
console.log(3);
        console.log("reducer data is",data);
       
console.log(4);
        dispatch({type:UPDATE_USER_SUCCESS,payload:data})
        console.log(5);
        
    } catch (error) {
        dispatch({type:UPDATE_USER_FAILURE,payload:error.message})
        
    }

}
export const updatePost = (data)=>async(dispatch)=>{
   
    const {post} = data

    try {
      

        dispatch({type:UPDATE_POST_REQUEST})
       

        const data = await axios.patch('/updatePostss',{post},{
            headers:{"Content-Type":"application/json"}
        })

        console.log("reducer data is",data);
       

        dispatch({type:UPDATE_POST_SUCCESS,payload:data})
       
        
    } catch (error) {
        dispatch({type:UPDATE_POST_FAILURE,payload:error.message})
        
    }

}

export const getSinglePost = ()=>async(dispatch)=>{
    try {
        dispatch({type:GET_SINGLE_POST_REQUEST})

        const {data} = await axios.get('/getSinglePost')
console.log("Reducer Data",data.post.post)
        dispatch({type:GET_SINGLE_POST_SUCCESS,payload:data.post.post})
        
    } catch (error) {
        
        dispatch({type:GET_SINGLE_POST_FAILURE,payload:error.message})
    }
}

