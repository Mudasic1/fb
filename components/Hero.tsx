import React from 'react'
import HorizontalLineWithText from './Horizontal'

const Hero = () => {
  return (
    <section className='mt-28 mx-96 mr-96 md:mx-96  content-center text-center box-border pb-40'>
        <div>
        <h1 className='text-6xl text-blue-500 font-bold'>facebook</h1>
        <p className='text-2xl mt-5'>Facebook helps you connect and <br/>share with the people in your life.</p>
        </div>
        <div className='mx-96 mr-32 rounded-lg mt-14 md:mx-32 pt-7 space-y-5'>
            <input type="text" name="" id="" placeholder='Email or phone number' className='border-2 rounded-lg h-14 w-80 px-5 hover:border-blue-600'/>
            <br />
            <input type="text" name="" id="" placeholder='Password' className='border-2 rounded-lg h-14 w-80 px-5 hover:border-blue-600'/>
            <br />
            <button className='text-white bg-blue-500 w-80 h-14 rounded-lg hover:bg-blue-600'>Log In</button>
            <br />
            <br />
            <a href="#" className='text-blue-500 hover:text-black'>Forgot password?</a>
           <br />
           <HorizontalLineWithText text="or" />
           <br />
           <button className='text-white bg-green-500 w-80 h-14 rounded-lg hover:bg-green-600'>Create New Account</button>
           <br />
           <p><a href="#" className='hover:underline'><b>Create a Page</b></a> for a celebrity, brand or business.</p>
        <br />
        <p>Meta © 2024</p>
        </div>
    </section>
  )
}

export default Hero
