import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function CommentList() {

  const { comments, user, gameID } = useSelector((store) => store.comment)

  return (
    <div>
      {
        comments && comments.map((comment, id) => (
          <div key={id} className='bg-white shadow-lg rounded-lg p-4 mt-6 mb-6 border border-gray-200'>
            <div className='flex items-center space-x-4'>
              <div className='h-12 w-12 bg-gray-300  rounded-full flex items-center justify-center  text-gray-600 font-bold'>
                {user?.email.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>{user?.email}</h3>
                <p className="text-sm text-gray-500">{new Date().toLocaleDateString()}</p>
              </div>

            </div>
            <hr className="my-3 border-gray-300" />
            <p className="text-gray-800 leading-relaxed">{comment.text}</p>
          </div>
        ))
      }
    </div>
  )
}
