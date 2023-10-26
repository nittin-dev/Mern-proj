import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <div className = 'bg-black'>
       <div className= 'flex items-center justify-between mx-auto max-w-6xl p-3'>
       <Link to='/'>
       <h1 className = 'text-white'> MERN AUTH </h1>
       </Link>
       <ul className = 'flex gap-4 text-white'>
       <Link to = '/profile'>             
       <li>Profile</li>
       </Link>
       <Link to = 'signin'>             
       <li>SignIn </li>
       </Link>
       <Link to = 'signup'>             
       <li>SignUp</li>
       </Link>
       </ul>
      </div>
      </div>
    </div>
  )
}
