import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <div className='flex gap-5 justify-center m-5'>

                <Link to='/product/men' >Men's</Link>
                <Link to='/product/women' >Women's</Link>

            </div>
            <Outlet />
        </div>
    )
}

export default Product
