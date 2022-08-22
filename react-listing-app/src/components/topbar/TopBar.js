import React from 'react'
import './TopBar.css'
import { Link } from 'react-router-dom'; //we can also use link in place of NavLink
//React component returns JSX kind of markups
function TopBar() {
  return ( // returning JSX here 
    <div className = "topbar">
     
   <div className="topbar-left" >
   <i className="topbar-social-icon fa-brands fa-instagram"></i>
      <i className="topbar-social-icon fa-brands fa-facebook"></i>
      <i className="topbar-social-icon fa-brands fa-linkedin"></i>
      <i className="topbar-social-icon fa-brands fa-twitter"></i>
   </div>
   <div className="topbar-center" >
    <ul className='topbar-list'>
    <li className='topbar-list-item'>
      <Link to='/'>HOME</Link></li>
    <li className='topbar-list-item'>ABOUT</li>
    <li className='topbar-list-item'>CONTACT</li>
    <li className='topbar-list-item'>
    <Link to='/create'>CREATE LISTING</Link></li>
    <li className='topbar-list-item'>LOGOUT</li>
    </ul>
   
   </div>
   <div className="topbar-right" >
<img className='topbar-profile-pic' src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
<i className="topbar-search fa-solid fa-magnifying-glass"></i>

   </div>
    </div>
  )
}

export default TopBar // to that we can export this function to some other file

// every JSX should be wrapped around from a react fregment or a parent element only then it works