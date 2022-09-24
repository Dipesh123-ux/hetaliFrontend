import React from 'react'
import Design from '../components/design'

const companies = () => {
    return (
        <div className="">
            <div className="p-5 text-xl font-cinzel text-center mt-5">
            Group Companies
            </div>
            <Design className="" w={10} />
            <div className="h-96 w-full flex justify-center items-center">


                <div className="h-5/6  text-center w-1/5">
                    <div className="one h-full w-full rounded-lg shadow-lg"></div>
                    <div className="text-lg font-bold opacity-70">Agriculture</div>
                </div>
                <div className="h-5/6  text-center w-2/5">
                    <div className="two h-full w-full rounded-lg shadow-lg"></div>
                    <div className="text-lg font-bold opacity-70">Fuel</div>
                </div>
                <div className="h-5/6  text-center w-1/5">
                    <div className="three h-full w-full rounded-lg shadow-lg"></div>
                    <div className="text-lg font-bold opacity-70">Foods</div>
                </div>

            </div>
        </div>
    )
}

export default companies