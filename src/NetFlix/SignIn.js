
import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
//import logo from './netflix.png'
import logo from "./cineHub.png"
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase"
const SignIn = () => {
const [values, setValues] = useState({email:"", password:""});
const [errorMessage, setErrorMesaage] = useState("");
const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function clickHandler(){
    navigate("/")
  }

  const { email , password } = values;
  function onclickSignIn(event){
    event.preventDefault();
    if(values.email || values.password)
    {
      const res = fetch('https://netflix-clone-ee2a0-default-rtdb.firebaseio.com/netflixcloneData.json',
      {
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({ email, password})
      })
    }

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then((res)=> {
      setSubmitButtonDisabled(false)
      navigate("/login")
      console.log(res)
    })
    .catch((err)=>{
      setErrorMesaage(err.message)
      setSubmitButtonDisabled(true);
      console.log(err)
    })
  }


  
  return (
    <div className='w-full h-screen'>

<img src="https://assets.nflxext.com/ffe/siteui/vlv3/70805ddd-f38c-4e25-94cd-b5015e444ee0/6e99205c-e34b-4dbe-ba45-b026023791bc/IN-en-20230508-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" className='absolute w-full h-full object-cover'/>
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      
      <div>
        <Link to="/"> <img src={logo} className='ml-10 mt-5 w-[154px] absolute z-20'alt="" /> </Link>
      </div>
      <form  className='fixed z-20 bg-black bg-opacity-75 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10'>
      <div>
       <div>
        <h1 className='text-3xl font-semibold py-5'>Sign In</h1>  
       </div>
       <div className='py-2 ' >
        <label htmlFor="email"></label>
       <input className="bg-zinc-700 w-[19.1rem] px-4 py-3 rounded-sm  " type="email" name="email"  id="email" placeholder='Enter your email address'
        onChange={(event)=>setValues((prev)=>({...prev, email: event.target.value}))}/>
       </div>
       <div className='py-2' >
        <label htmlFor="password"></label>
       <input className='bg-zinc-700 w-[19.1rem] px-4 py-3 rounded-sm' type={showPassword ? "text" : "password"} 
       name="password"  id="password"placeholder='Enter password'
       onChange={(event)=>setValues((prev)=>({...prev, password: event.target.value}))}/>
       </div>
       <div>
         <span className='absolute ml-[15.5rem] -mt-[44px] text-zinc-400 ' onClick={()=>{setShowPassword(prev => !prev)}}>
          { showPassword ? (<p>SHOW</p>) : (<p>HIDE</p>)}
         </span>
       </div>
       <div className='py-5'>
        <button className='bg-red-700 px-32 py-3 rounded-sm' onClick={onclickSignIn} disabled={submitButtonDisabled} >Sign In</button>
       </div>
       <div className="text-red-600">{errorMessage}</div>
       <div className='flex justify-between py-2'>
        <div>
        <input type="checkbox" id="CheckBox" />
        <label  className="text-zinc-400" htmlFor="CheckBox">Remember me</label>
        </div>
        <Link className='text-zinc-400 hover:underline'>Need Help ?</Link>
       </div>
       </div>
       <div className='flex py-2 pt-10'>
        <p className='text-zinc-400'>New to Netflix?</p>
        <p onClick={clickHandler}>Sign up now</p>
       </div>
       <div className='w-[19.25rem]'>
        <p className='text-zinc-400 text-sm leading-none'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<Link className='text-blue-800 hover:underline text-sm'>Learn more</Link></p>
       </div>
       </form>
       
    </div>
  )
}

export default SignIn 



