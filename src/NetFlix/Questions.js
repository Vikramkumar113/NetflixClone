import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { questions } from "./queData"
import Faqs from './Faqs'

const Questions = () => {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleStarted() {
    navigate('/password', { state: { email } })
  }
  return (
    <div className='bg-black '>
    <div>
        <h1 className='text-5xl text-center font-[900] text-white p-12'>Frequently Asked Questions</h1>
        {
            questions.map((element)=>{
                const { id } = element;
                return <Faqs key={id} {...element}/>
            })
        }
    </div>
    <div>
      <h1 className='text-white text-center m-2 py-5 text-2xl font-semibold'>Ready to watch? Enter your email to create or restart your membership.</h1>
      <div className='flex justify-center items-center'>
          <div>
            <input  
            className='w-[25rem] px-4 py-4 placeholder:text-white bg-zinc-400 bg-opacity-10 border-zinc-800 border-[1px] rounded-sm text-white' type="text" placeholder='Email Address' onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div>
            <button className='m-5 px-10 py-3 bg-red-700 rounded-sm text-white text-2xl font-semibold' onClick={handleStarted}>Get Started</button>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Questions