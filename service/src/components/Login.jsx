
import {  useLocation, useNavigate } from 'react-router';
 
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
// import { Helmet } from 'react-helmet-async';
import { valueContext } from '../Rootlayout';
const Login = () => {

    const {handlelogin,handleForgetpassword,handlegooglelogin}=useContext(valueContext)

    const[userEmail,setUserEmail]=useState("")

    const navigate=useNavigate()
    const location=useLocation()
     const f= location?.state?.from
    // const from =location.state.from
    //  console.log(from)

    const handleLogin=(e)=>{
        e.preventDefault()

       const password= e.target.password.value
       const email=e.target.email.value
        handlelogin(email,password)
        .then((userCredential) => {
                 // Signed up 
                 const user = userCredential.user;
                 toast.success('Loged in Successfully!');
                f?navigate(f):navigate('/')

                 // ...
               })
               .catch((error) => {
                 // const errorCode = error.code;
                 // const errorMessage = error.message;
                 toast.error('Incorrect credential');
                 // ..
               });
      
    }
    return (

       <>
        <form onSubmit={handleLogin} class=" bg-base-200 border-base-300 mx-auto mt-24 rounded-box w-xs border p-4">
    
                   <title>Login | HobbyHub</title>
                 

  <label class="label">Email</label>
  <input type="email" onChange={(e)=>setUserEmail(e.target.value)}  class="input" name='email' placeholder="Email" />

  <label class="label">Password</label>
  <input type="password" class="input" name='password' placeholder="Password" />

 <div className='flex justify-between items-center  gap-3'>
 <button type='submit' class="btn btn-neutral mt-4"> Login</button>
 <p className='ml-2 text-yellow-400'>
  If you do not have an account,then{" "}
  <span
    onClick={() => navigate('/register')}
    className='text-blue-800 font-semibold cursor-pointer hover:underline'
  >
    register
  </span>
</p>
 
  
 </div>
   
</form>
<div className=' flex  items-center justify-center gap-5 mt-5'>
<button onClick={()=>handleForgetpassword(userEmail)} className='border  rounded-2xl bg-blue-600 text-white p-0.5 text-sm md:text-base md:p-2 hover:bg-blue-100'>Forgot password??</button>
      
      <p className='font-bold text-red-700 text-sm md:text-2xl'>Or,</p>
       <button  onClick={()=>handlegooglelogin()}className="btn bg-white text-black border-[#e5e5e5]">
        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
        Register with Google
      </button>
</div>
       </>

    );
};

export default Login;