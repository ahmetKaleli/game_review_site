import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchComments, deleteComment } from '../redux/slices/commentSlice'

export default function CommentList() {

  const dispatch = useDispatch()
  const { id: gameID } = useParams()

  const { user } = useSelector((store) => store.comment)
  const comments = useSelector((state) => state.comment.comments[gameID] || []);
  const { loading, error } = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(fetchComments(gameID))
  }, [dispatch, gameID])

  const handleDelete = (commentID, commentUserEmail) => {
    if (user?.email !== commentUserEmail) return; // Başka kullanıcı silmeye çalışırsa izin verme
    dispatch(deleteComment({ commentID, gameID }));
  };


  return (
    <div>
      {
        comments && comments.map((comment, id) => (
          <div key={id} className='bg-white shadow-lg rounded-lg p-4 mt-6 mb-6 border border-gray-200'>
            <div className='flex items-center space-x-4'>
              <div className='h-12 w-12 bg-gray-300  rounded-full flex items-center justify-center  text-gray-600 font-bold'>
                {comment.userEmail?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>{comment?.userEmail}</h3>
                <p className="text-sm text-gray-500">{new Date().toLocaleDateString()}</p>
              </div>

            </div>
            <hr className="my-3 border-gray-300" />
            <p className="text-gray-800 leading-relaxed">{comment.text}</p>
            {user?.email === comment.userEmail && (
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => handleDelete(comment.id, comment.userEmail)}
              >
                Sil
              </Button>
            )}
          </div>
        ))
      }
    </div>
  )
}
