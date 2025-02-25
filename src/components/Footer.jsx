import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer() {
  return (
    <div>
      <div className="bg-gray-900 text-white py-12 mt-8">
      <div className='grid grid-cols-1 md:grid-cols-3 pl-10 gap-10 text-center md:text-left container mx-auto'>
        <div >
          <h1 className="text-xl font-semibold mb-4">About Us</h1>
          <p>This project aims to create a game review platform where users
            can rate and comment on games. Using React, Redux, Firebase, MUI
             the goal is to develop an efficient system with
            a modern, user-friendly interface.</p>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <p>&copy; 2025 Ahmet. All Rights Reserved.</p>
        </div>
       
        <div className='flex flex-row justify-center items-center'>
        <a href="https://www.instagram.com/ahmetkkaleli/" target='_blank'> <InstagramIcon/> <span className='mr-5'>Instagram</span> </a>
        <a href="https://www.linkedin.com/in/ahmet-kaleli-28308a270/" target='_blank'> <LinkedInIcon/> <span className='mr-5'>Linkedin</span> </a>
        <a href="https://github.com/ahmetKaleli" target='_blank'> <GitHubIcon/> <span className='mr-5'>Github</span></a>
        </div>
      </div>
    </div>
    </div>
  )
}
