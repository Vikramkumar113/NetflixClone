import React from 'react'
import {movies} from "./data"

const Card = () => {
    const movieElements = movies.map((element) => {
        return (

          <div key={element.id} className=' bg-black text-white'>
            {
                element.id%2===1 ? (
            <>
            <div className='flex justify-center item-center py-5'>   
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-5xl font-[900] w-2/3'>{element.heading}</h1>
              <p className='mt-5 w-2/3 font-[2rem] text-2xl'>{element.para}</p>
            </div>
            <div>
              <img src={element.image} alt="" />
            </div>
            </div>
            <div className='bg-gray-900 h-[0.5rem]'></div>
            </>
                ) : (
            <>
            <div className='flex justify-center item-center py-5'>
            <div>
              <img src={element.image} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-5xl font-[900] w-2/3'>{element.heading}</h1>
              <p className='mt-5 w-2/3 font-[2rem] text-2xl'>{element.para}</p>
            </div>
            </div>
            <div className='bg-gray-900 h-[0.5rem]'></div>
            </>
            
                )
            }
          </div> 
        );
      });
  return <div>{movieElements}</div>
}

export default Card