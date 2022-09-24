import React from 'react'
import Design from '../components/design'

const founder = () => {
    return (
        <div className="founder h-screen space-y-5">
            <div style={{ background: "rgba(255,255,255,0.7)" }} className="shadow-lg rounded-lg h-3/4 w-2/4">
                <div className="p-5 text-xl font-cinzel text-center ">
                    Founder's Message
                </div>
                <div className="h-28 w-28 fo"></div>
                <Design className="" w={20} />
                <div className="w-25 text-center mt-2 text-lg font-bold opacity-70">Mr. Jayesh H. Pandya</div>
                <div className="w-96 text-center m-auto text-sm italic font-bold opacity-80">“When a customer buys a home, he is giving up a major chunk of his life's savings to do so. It is imperative to give him exactly what he looks for in his home.”
                </div>
                <div style={{ fontSize: "12px" }} className="m-5">
                    We bring to our clients much wanted human values, integrity, trust and an assurance of responsibility all coupled with our expertise in construction, engineering & management. Our biggest assets have always been our small but highly trained team of professional managers and engineers who are backed by a very able team of administrators. We have a clear vision about building on our strengths and our achievements while holding dear to us our basic principles
                </div>
            </div>
            <Design  className="" w={40} />
        </div>
    )
}

export default founder