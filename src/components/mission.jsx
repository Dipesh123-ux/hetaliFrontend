import React from 'react'
import Design from '../components/design'

const mission = () => {
  return (
    <div className="container mx-auto">
         <div className="p-5 text-xl font-cinzel text-center mt-5">
                MISSION
            </div>
            <Design className="mt-8" w={10} />
            <div className="mt-8 h-80 grid grid-cols-2 ml-36 mr-36">
                <div className="img1 w-11/12 shadow-lg rounded-lg bg-white"></div>
                <div className="flex flex-col">
                    <div id="m-content2" className="m-content">
                        <div className="text-sm font-bold font-rb m-3">Personalised</div>
                        <div className="m-3">Our core idealogy is to provide personalised homes to meet the very specific needs of residents.</div>
                    </div>
                    <div className="m-content  text-base font-bold opacity-60">
                        <p className="m-2">Commited</p>
                    </div>
                    <div className="m-content text-base font-bold opacity-60">
                    <p className="m-2">Quality & Service Oriented</p>
                    </div>
                    <div className="m-content text-base font-bold opacity-60">
                    <p className="m-2">Timely</p>
                    </div>
                </div>
            </div>
            <div className="cooperate">
            <div className="p-5 text-xl font-cinzel text-center mt-5">
            Corporate Social Responsibility
            </div>
            <Design className="mt-8" w={10} />
            <div className="mt-8 h-80 grid grid-cols-2 gap-10 ml-36 mr-36 mb-20">
                <div className="flex flex-col">
                    <div id="m-content3" className="m-content">
                        <div className="text-sm font-bold font-rb m-3">Education for the under-privileged</div>
                        <div className="m-3">We believe that our future lies in the holistic educational foundation of the youth and we have nurtured that cause by providing the necessary books and monetary support to the under-privileged children of Mumbai & also at several villages in Gujarat. As the Trustees of the H A Desai Boarding School in Matunga, Mumbai, we have been providing living and hospitality services to the academically bright students from the weaker monetary sections of the society.
</div>
                    </div>
                    <div className="m-content  text-base font-bold opacity-60">
                        <p className="m-2">Support for Rural Farmers</p>
                    </div>
                    <div className="m-content text-base font-bold opacity-60">
                    <p className="m-2">Spiritual</p>
                    </div>
                </div>
                <div className="img2 w-11/12 shadow-lg rounded-lg bg-white"></div>
            </div>
            </div>
    </div>
  )
}

export default mission