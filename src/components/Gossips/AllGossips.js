import React from 'react'
import { useEffect ,useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { getPost } from '../../redux/actions'
import Demo from '../Comments/Comments'

const AllGossips = () => {

  const [load, setLoad] = useState(true)
  const dispatch = useDispatch()


  const postss = useSelector(state => state.allPost.posts)
 


  useEffect(() => {
    dispatch(getPost())
    setLoad(false)
    
  }, [])

  
  useEffect(() => {
    console.log("state is ",postss.map((post)=>{
      return console.log("Use Effects" ,post.map((pos)=>{
        return console.log("Useeffects are",pos.post)
      }) )
    }))
   }, [])
  
    return (
      <div>

 {postss.map((post)=>{
   return post.map((pos)=>{
     return <p>{pos.post}</p>
   })
 })}
       {/*<Demo/>*/}
    </div>
    )
}

export default AllGossips
