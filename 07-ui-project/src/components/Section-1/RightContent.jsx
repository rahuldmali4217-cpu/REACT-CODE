import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {


    return (
        <div id='right' className=' h-full p-6 w-2/3 flex gap-3 overflow-x-auto'>

            {props.users.map((element, idx) => {
                return <RightCard key={idx} color={element.color} id={idx} img={element.img} tag={element.tag} />
            })}

        </div>
    )
}

export default RightContent