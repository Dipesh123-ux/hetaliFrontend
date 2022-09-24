import React from 'react'
import final from '../assets/finallogo.png'
import des from '../assets/path.png'

const footer = () => {
  return (
    <div className="foot mt-8">
      <div className="foo">
        <div className="logo">
          <img src={final} alt="" />
        </div>
        <div className="grid grid-cols-3 gap-5 links mt-5">
          <div className="flex flex-col">
            <div className="text-sm font-bold mt-2 mb-4 text-white">Quick Links</div>
            <div className="flex flex-col space-y-1/4 text-white">
              <a href="">Contact Us</a>
              <a href="">About Us</a>
              <a href="">Testimonial</a>
              <a href="">Gallery</a>
              <a href="">Site Map</a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-bold mt-2 mb-4 text-white">Flats in Mumbai</div>
            <div className="flex flex-col space-y-1/4 text-white">
              <a href="">1BHK Andheri West</a>
              <a href="">2BHK Andheri West</a>
              <a href="">3BHK Andheri West</a>
              <a href="">1BHK Goregaon East</a>
              <a href="">2BHK Goregaon East</a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-bold mt-2 mb-4 text-white">Projects in Mumbai</div>
            <div className="flex flex-col space-y-1/4 text-white">
              <a href="">Ongoing</a>
              <a href="">Upcoming</a>
              <a href="">Completed</a>
              <a href="">Hetali Blessings</a>
              <a href="">SHetali Anuchhaya</a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-4 mt-5 w-full flex justify-center items-center space-x-3">
        <div style={{width:`40%`}} className="line"></div>
        <img style={{height:"30px"}} src={des} alt="" />
        <div style={{width:`40%`}} className="line"></div>
    </div>

    </div>
  )
}

export default footer