 import React, { useContext } from 'react';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router';
import { valueContext } from '../Rootlayout';
import { FaCloudMoon } from 'react-icons/fa';

const Navbar = () => {
    const navigate=useNavigate()
    const {pathname}=useLocation()

    const {handlelogout,currentUser,theme,handleTheme}=useContext(valueContext)
     
    
     
    return (
        <>
        <div className={`navbar sticky top-0 z-50 px-4 py-2 ${theme ? 'bg-white' : 'bg-gradient-to-br from-slate-900 to-gray-800'} shadow-sm`}>
  <div className="flex-1">
    <a className="font-bold text-pink-700 text-xl md:text-3xl">★彡𝔰𝔢𝔯𝔳𝔦𝔠𝔬彡★</a>
     <button
    onClick={handleTheme}
    className="ml-4 z-[999] md:ml-8"
    aria-label="Toggle Theme"
  >
    <FaCloudMoon
      className={`text-3xl ${
        theme
          ? 'text-yellow-400 hover:text-black'
          : 'text-black hover:text-yellow-500'
      } transition duration-300`}
    />
  </button>
  </div>

  
  <div className="md:hidden flex gap-2">
    <details className="dropdown dropdown-end">
      <summary className="btn btn-sm btn-ghost text-red-500">☰</summary>
      <ul className={`menu menu-sm dropdown-content mt-3 p-2 shadow ${theme ? "bg-blue-900" : "bg-slate-700"} rounded-box w-52`}>
        <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/about">About</NavLink></li>
        {
          currentUser && (
             <li><NavLink to="/myservice">My Services</NavLink></li>
          )
        }
        
        {
          currentUser && (
                   <li><NavLink to="/myreviews">My Reviews</NavLink></li>
          )
        }
                       
        {
          currentUser && (
                       
             <li><NavLink to="/createservice">Create Service</NavLink></li>
          )
        }
       
        <li><NavLink to="/services">All Services</NavLink></li>
        {
          currentUser
            ? <li><button onClick={handlelogout}>Logout</button></li>
            : <li><button onClick={() => navigate('/login')}>Login</button></li>
        }
        {
          !currentUser &&
          <li><button onClick={() => navigate('/register')}>Register</button></li>
        }
      </ul>
    </details>
     {
      currentUser && (
        <div className="flex items-center ">
          <p className={`md:block ${theme ? `text-black` : `text-red-200`} text-[7px]  font-semibold`}>
            {currentUser.displayName.split(' ')[0]}
          </p>
          <div
            className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
            data-tip={currentUser.displayName || 'No name set'}
          >
            <div className="w-5 rounded-full">
              <img src={currentUser.photoURL} alt="avatar" />
            </div>
          </div>
        </div>
      )
    }
  </div>

   
  <div className="hidden md:flex items-center gap-6">
   <NavLink
  to="/"
  className={({ isActive }) =>
     isActive
          ? 'text-green-700 text-sm font-bold'
          : 'text-red-600 text-sm font-semibold'
  }
>
  Home
</NavLink>
<NavLink
  to="/about"
  className={({ isActive }) =>
     isActive
          ? 'text-green-700 text-sm font-bold'
          : 'text-red-600 text-sm font-semibold'
  }
>
  About
</NavLink>


{
  currentUser && (
         
    <NavLink
      to="/myservice"
      className={({ isActive }) =>
        isActive
          ? 'text-green-700 text-sm font-bold'
          : 'text-red-600 text-sm font-semibold'
      }>
      My Services
    </NavLink>

  )
}
    

    {
      currentUser && (

        <NavLink
      to="/createservice"
      className={({ isActive }) =>
        isActive
          ? 'text-green-700 text-sm font-bold'
          : 'text-red-600 text-sm font-semibold'
      }>
      Create Service
    </NavLink>

      )
    }
    

     {
      currentUser && ( <NavLink
      to="/myreviews"
      className={({ isActive }) =>
        isActive
          ? 'text-green-700 text-sm font-bold'
          : 'text-red-600 text-sm font-semibold'
      }>
      My reviews
    </NavLink>     )
     }   

    <NavLink
      to="/services"
      className={({ isActive }) =>
        isActive
          ? 'text-green-700 text-sm font-bold'
          : 'text-red-600 text-sm font-semibold'
      }>
      All Services
    </NavLink>

    {
      !currentUser &&
      <button onClick={() => navigate('/register')} className={`btn btn-xs sm:btn-sm`}>
        Register
      </button>
    }

    <button
      onClick={currentUser ? handlelogout : () => navigate('/login')}
      className={`btn btn-xs sm:btn-sm`}
    >
      {currentUser ? "Logout" : "Login"}
    </button>

     
    {
      currentUser && (
        <div className="flex items-center gap-2">
          <p className={`hidden md:block ${theme ? `text-black` : `text-red-200`} font-semibold`}>
            {currentUser.displayName}
          </p>
          <div
            className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
            data-tip={currentUser.displayName || 'No name set'}
          >
            <div className="w-10 rounded-full">
              <img src={currentUser.photoURL} alt="avatar" />
            </div>
          </div>
        </div>
      )
    }
  </div>
</div>

       
        </>
    );
};

export default Navbar;
