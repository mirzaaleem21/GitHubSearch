import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (



    






    <div className="navbar bg-neutral text-neutral-content">
    <div className="flex-1">
      <FaGithub className='inline pr-2 text-3xl' /> <Link to='/' className='text-lg font-bold align-middle'>GitHub Search</Link>  
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li> <Link to='/' >Home </Link> </li>
        
        <li> <Link to='/About' >About </Link> </li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar