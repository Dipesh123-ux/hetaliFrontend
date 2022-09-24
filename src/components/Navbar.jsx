import React from 'react'
import logo from '../assets/hetali logo_final_29.7 1.png'

const Navbar = () => {
    return (
        <div className=" flex flex-row w-full nav" >
           <div className="basis-1/4 ml-12">
            <img src={logo} style={{height:"65px"}} />
           </div>
           <div className="basis-3/4" >
            <div className="flex flex-row space-x-6 mt-7 text-sm font-base font-rb text-slate-400"> 
             <a href="" className="">ABOUT US</a>
             <a href="" className="">PROJECTS</a>
             <a href="" className=" ">DIVRSIFICATION</a>
             <a href="" className=" ">OUR PROCESS</a>
             <a href="" className=" ">TESTIMONIALS</a>
             <a href="" className="">CAREERS</a>
             <a href="" className="">CONTACT US</a>
             </div>
           </div>
        </div>
    )
}

export default Navbar