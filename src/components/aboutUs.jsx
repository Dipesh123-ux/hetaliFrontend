import React from 'react'
import Design from '../components/design'
import back from '../assets/happy-parents-laughing-together-with-daughter 2.png'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'

const aboutUs = () => {
    return (
        <div className="container mx-auto">
            <div className="p-5 text-xl font-cinzel text-center mt-5">
                ABOUT US
            </div>
            <Design className="mt-8" w={10} />
            <div className="back w-100 h-48 mt-8">
            </div>
            <div className="about-content">
                <div className="p-20 w-2/4 text-center m-auto italic font-bold text-sm">
                    We endeavour to build homes which make it's residents happy and proud of their address.
                    Residents are at heart of everything we do, we build homes to live in, not houses to stay in.
                </div>
                <Design className="mt-12" w={30} />

                <div className="grid grid-cols-2 gap-4 w-2/4 m-auto mt-8">
                    <div className="h-64 rounded box ">
                        <img className="m-auto h-16 mt-4" src={one} alt="" />
                        <div className="text-sm  m-5 font-base">
                            Our track record has been impeccable with project completion on time and have surpassed expectations many a time, society members have positively received our redevelopment plans and encourage our modern and urbane designs to their neighbours.
                        </div>
                    </div>
                    <div className="h-64 rounded box">
                        <img className="m-auto h-16 mt-4" src={two} alt="" />
                        <div className="text-sm  m-5 font-base">
                            The Hetali Group is a redeveloper like no other with a profound focus on quality and long term satisfaction of its residents.
                        </div>
                    </div>
                    <div className="h-64 rounded box">
                        <img className="m-auto h-16 mt-4" src={three} alt="" />
                        <div className="text-sm  m-5 font-base">
                            They just don't endeavour but build homes which make it's residents proud of their address by putting home-owners at the heart and soul of everything they do from start to finish and post completion.

                        </div>
                    </div>
                    <div className="h-64 rounded box">
                        <img className="m-auto h-16 mt-4" src={four} alt="" />
                        <div className="text-sm  m-5 font-base">
                            Hetali Group lives by the ethos of building homes to live and not houses to stay in.
                        </div>
                    </div>

                </div>
                <div className="bg-black h-32 mt-8 opacity-90 mb-12"></div>
                <div className="w-2/4 m-auto mt-10">
                    Established in 1992, Hetali Group is a leading real estate developer of residential spaces across Mumbai and have earned an unmatched reputation amongst its very loyal customers. The company's customer-centric values, project management proficiency and technical expertise are amplified with over 6.5 lakh sq.ft. built and almost 1 lakh sq.ft underway leading to more than families!

                    The Hetali Group promises a lifestyle second to none. In a span of over four decades, the group has proved to be one of the most reputed real estate builders in the western suburbs of Mumbai with residences in prime locations such as Andheri, Goregaon, Vile Parle and Juhu.

                    Spearheaded by Mr Jayesh Pandya, the company's central ideology is to provide homes customized to the customer's requirements and home’s that are superior in nature keeping in mind the needs of the modern home user.

                </div>

                <div className="mt-8 back-2 h-56">

                    <div style={{ top: "26%" }} className="relative h-1/2 bg-black opacity-90 text-center">
                        <div className="text-xl mt-4 font-cinzel text-white">VISION</div>
                        <div className="w-2/4 text-center text-white mt-5 m-auto italic font-bold text-sm">
                        We aim to ensure top-class service to our stakeholders & diversify our business to other service-oriented sectors with the ultimate goal of achieving customer satisfaction & end-user interaction.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default aboutUs