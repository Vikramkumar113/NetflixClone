import React from 'react'
import { useNavigate } from 'react-router-dom';
const SuccessSignUp = () => {
  const navigate = useNavigate();
 
  function clickHandler(){
    navigate('/')
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-center text-3xl text-bold'>Congratulations your account is created</h1>
      <button className='w-[5rem] bg-red-600 text-white m-2 px-4 py-2 rounded-sm' onClick={clickHandler}>logout</button>
    </div>
  )
}

export default SuccessSignUp
