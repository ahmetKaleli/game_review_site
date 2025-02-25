import { TextField } from '@mui/material'
import React from 'react'

export default function Search() {
  return (
    <div className='hidden sm:block'>
        <TextField sx={{width:500}} variant='filled' size='small' label='search'/>
    </div>
  )
}
