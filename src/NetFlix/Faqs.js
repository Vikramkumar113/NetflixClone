import React, { useState } from 'react'

const Faqs = ({question , Answer}) => {
    const [show, setShow] = useState(false);
  return (
    <div className='flex  justify-center items-center '>
        <div className='bg-zinc-800 hover:bg-zinc-700 m-1 p-5 text-white w-3/4'>
            <h2 className='text-2xl relative' onClick={()=> setShow(!show)}>{question}</h2>
            <p className='text-2xl mt-3 '>{show && Answer}</p>
          
           
        </div>
    </div>
  )
}

export default Faqs