import React from 'react'
import { useSelector } from 'react-redux'

export default function CommentList() {

  const {comments} = useSelector((store)=>store.comment)


  return (
    <div>
      {
        comments && comments.map((comment,id)=>(
          <div key={id}>
            {comment.text}
          </div>
        ))
      }    
    </div>
  )
}
