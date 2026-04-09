import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {


    return (
        <div className=' absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
            <h2 className=' bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id + 1}</h2>
            <div>
                <p className='text-lg text-shadow-2xs  leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum.</p>
                <div className=' flex justify-between items-center'>
                    <button style={{ backgroundColor: props.color }} className='  text-white font-medium px-7 py-2 rounded-full '>{props.tag}</button>
                    <button style={{ backgroundColor: props.color }} className='  text-white font-medium px-3 py-2 rounded-full'><ArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
