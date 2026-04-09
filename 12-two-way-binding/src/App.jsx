import React, { useState } from 'react'

const App = () => {


    const [title, setTitle] = useState('')


    const submitHandler = () => {
        console.log('Form Submitted');
        setTitle('')
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                submitHandler()
            }}>
                <input
                    type="text"
                    placeholder='Enter your name'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);

                    }}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App


