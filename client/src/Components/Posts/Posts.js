import './Posts.css'
import React from 'react'
import {PostsData} from './PostsData'
import Post from '../Post/Post'
const Posts = () => {
    return (
        <div className="Posts">
       {console.log(PostsData)}
            {PostsData.map((post, id)=>{
                return <Post data={post} id={id}/>
            })}
        </div>
      )
}

export default Posts