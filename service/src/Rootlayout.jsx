import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import { auth } from './firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import { CiCloudMoon } from "react-icons/ci";
import { FaCloudMoon } from "react-icons/fa";
import { FadeLoader } from 'react-spinners';
 export const valueContext=createContext()
const Rootlayout = () => {
     const [currentUser,setCurrentUser]=useState(null)
 
     const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : true; 
   });

   useEffect(() => {
  localStorage.setItem('theme', JSON.stringify(theme));
       }, [theme]);


        const handleTheme=()=>{
          setTheme(prev => !prev);
      }

    const [loading,setLoading]=useState(true)
     
    
  
 

    const forceSetCurrentUser = (user) => {
        setCurrentUser({ ...user });
      };
     
     

    const handlelogin=(email,password)=>{
     
      return  signInWithEmailAndPassword(auth, email, password)
        
 }

  
 const handleregister=(email,password)=>{

  return  createUserWithEmailAndPassword(auth, email, password)
   
 }
      
   
 
 const handlelogout=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        toast.success('Logged out Successfully!');
      }).catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
 }

 const handleForgetpassword=(email)=>{
  console.log(email)
  toast.success('Reset email sent to your email');
    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 }
 
 const handlegooglelogin=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

 }

const context={
    handlelogin,
    handleregister,
    loading,
    currentUser,
    handlelogout,
    forceSetCurrentUser,
    handleForgetpassword,
    handlegooglelogin,
    theme
    
}
// useEffect(() => {
//     AOS.init({
//       duration: 1000, // animation duration in ms
//       once: true,     // animation only happens once
//     });
//   }, []);
//   console.log()

useEffect(()=>{
     
    
     const unsubscribe=   onAuthStateChanged(auth, (user) => {
          
              
            setCurrentUser(user)
            
            setLoading(false)
              
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              
              // ...
            } else {
              // User is signed out
              // ...
            }
          })

          return()=>{
            unsubscribe()
          }
    
},[]);
     
if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-black">
        <FadeLoader color="#ba1676"
  height={60}
  radius={12}
  speedMultiplier={0}
  width={8} />
      </div>
    );
  }

    return (
        <div  className={`pacifico-regular relative ${theme?`bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500`:`bg-black`}`}>
               <p onClick={()=>handleTheme()} className='absolute w-8  z-50 top-4 right-56 md:left-100'>{<FaCloudMoon className={`text-3xl ${theme?`text-yellow-400 hover:text-black`:`text-black hover:text-yellow-500`}  transition duration-300`} />}</p>
<valueContext.Provider  value={context}>
            <Navbar></Navbar>
              <Toaster position="top-right" reverseOrder={false} />
              
            <Outlet></Outlet>
               <Footer></Footer>
</valueContext.Provider>

            
        </div>
    );
};

export default Rootlayout;