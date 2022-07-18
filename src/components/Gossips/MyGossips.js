import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getSinglePost, post } from '../../redux/actions'



const MyGossips = () => {
const [load, setLoad] = useState(true)
    const posts = useSelector(state => state.getSinglePost.payload)
  //   // const posts = useSelector(state => state.getSinglePost)

    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getSinglePost())
       setLoad(false)
      
    }, [])

    
  useEffect(() => {
      console.log("post is ",posts)
  }, [])

 


  
  
    
   
    
   
    return (
       <div>
{load?"Loading":posts.map((post)=>{
  return <p>{post.post}</p>
})}
       </div>
    )
}

export default MyGossips
