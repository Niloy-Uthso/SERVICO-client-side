import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
 
import { valueContext } from '../Rootlayout';
 
 
import toast from 'react-hot-toast';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const Register = () => {
    const {handleregister,handlegooglelogin,forceSetCurrentUser}=useContext(valueContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate=useNavigate()
     
    
    const location=useLocation()
    
     console.log(location)
    
    const handleRegister=(e)=>{
        e.preventDefault()

       const password= e.target.password.value
       const email=e.target.email.value
       const displayName= e.target.displayName.value;
       const photoURL=e.target.photoURL.value
       console.log( photoURL)
       const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        
if (!regex.test(password)) {
    toast.error('Password must be at least 6 characters and contain both uppercase and lowercase letters.');
 
  return;
}
       
       handleregister(email,password,photoURL)
       .then((userCredential) => {
          
        const user = userCredential.user;
        // console.log(user)
        toast.success('Registered Successfully!');
          updateProfile(user, {
            displayName: displayName,
            photoURL:photoURL
          }).then(() => {
            
            forceSetCurrentUser(auth.currentUser);
             
          }).catch((error) => {
             
          });
        // ...
        navigate('/')
           
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        toast.error('Invalid credentials');
      });
      
    }
    return (
        <>
           
                <title>Register | HobbyHub</title>
               
         <form onSubmit={handleRegister} class=" bg-base-200 border-base-300 mx-auto mt-24 rounded-box w-xs border p-4">
       

       <label class="label">Email</label>
       <input type="email" class="input" name='email' placeholder="Email" />
     
       <div className="relative ">
       <label class="label">Password</label>
  <input
    type={showPassword ? 'text' : 'password'}
    name="password"
    className="input w-full pr-10"
    placeholder="Password"
    required
  />
  <span
    className="absolute top-9 right-3 text-gray-600 cursor-pointer"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye/>}
  </span>
</div>
       <label className="label">Name</label>
       <input  type="text"  class="input"  name='displayName'  placeholder="Enter name"/>
       <label className="label">Photo URL</label>
       <input  type="url"  class="input"  name='photoURL'  placeholder="Enter photo URL"/>
     
      <div className='flex justify-between items-center  gap-3'>
      <button type='submit' class="btn btn-neutral mt-4"> Register</button>
      <p className='ml-2 text-yellow-400'>
       If you already have an account, then{" "}
       <span
         onClick={() => navigate('/login')}
         className='text-blue-800 font-semibold cursor-pointer hover:underline'
       >
         login
       </span>
     </p>
      
       
      </div>
     </form>
<div className='flex justify-center items-center mt-5 gap-3'>
<p className='font-bold text-2xl text-red-700 '>Or,</p>
       <button  onClick={()=>handlegooglelogin()}className="btn bg-white text-black border-[#e5e5e5]">
        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
        Login with Google
      </button>
</div>
        </>
       
    );
};

export default Register;