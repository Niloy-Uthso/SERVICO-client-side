 import React, { useContext } from 'react';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router';
import { valueContext } from '../Rootlayout';

const Navbar = () => {
    const navigate=useNavigate()
    const {pathname}=useLocation()

    const {handlelogout,currentUser,theme}=useContext(valueContext)
     
    
     
    return (
        <>
        <div className={`navbar px-4 py-2 ${theme ? `bg-blue-950` : `bg-slate-800`} shadow-sm`}>
  <div className="flex-1">
    <a className="font-bold text-pink-700 text-xl md:text-3xl">ℌ𝔬𝔟𝔟𝔶ℌ𝔲𝔟</a>
  </div>

  
  <div className="md:hidden flex gap-2">
    <details className="dropdown dropdown-end">
      <summary className="btn btn-sm btn-ghost text-white">☰</summary>
      <ul className={`menu menu-sm dropdown-content mt-3 p-2 shadow ${theme ? "bg-blue-900" : "bg-slate-700"} rounded-box w-52`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/mygroups">My Groups</NavLink></li>
        <li><NavLink to="/createGroup">Create Groups</NavLink></li>
        <li><NavLink to="/groups">All Groups</NavLink></li>
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
        <div className="flex  gap-1">
          <p className={` md:block ${theme ? `text-white` : `text-red-200`} font-semibold`}>
            {currentUser.displayName}
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
          ? 'text-[#D4AF37] text-sm font-bold'
          : 'text-white text-sm font-semibold'
      }>
      Home
    </NavLink>

    <NavLink
      to="/mygroups"
      className={({ isActive }) =>
        isActive
          ? 'text-indigo-400 text-sm font-bold'
          : 'text-[#EFE1C6] text-sm font-semibold'
      }>
      My Groups
    </NavLink>

    <NavLink
      to="/createGroup"
      className={({ isActive }) =>
        isActive
          ? 'text-indigo-400 text-sm font-bold'
          : 'text-red-600 text-sm font-semibold'
      }>
      Create Groups
    </NavLink>
    <NavLink
      to="/groups"
      className={({ isActive }) =>
        isActive
          ? 'text-indigo-400 text-sm font-bold'
          : 'text-[#EFE1C6] text-sm font-semibold'
      }>
      All groups
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
          <p className={`hidden md:block ${theme ? `text-white` : `text-red-200`} font-semibold`}>
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
