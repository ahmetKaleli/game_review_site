import React from 'react'
import Logo from "./navbarElements/Logo"
import Redirect from './navbarElements/Redirect'
import Search from './navbarElements/Search'
import LoginRegisterBtn from './navbarElements/LoginRegisterBtn'

import AuthState from './AuthState'
export default function Navbar() {
  return (
    <div className='flex flex-row items-center justify-between h-[100px] bg-[rgba(44,43,43,0.12)] p-4 shadow-2xl'>
      <Logo/>
      <Redirect/>
      {/* <Search/> */}
      <AuthState/>

    </div>
  )
}
