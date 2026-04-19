import React from 'react'

const Navbar = (props) => {

    function changeTheme() {
        console.log('Theme Change', props.theme);

        props.setTheme('dark')

    }

    return (
        <div>

            <button onClick={changeTheme} >Change Theme</button>
        </div>
    )
}

export default Navbar
