import React, { useState } from 'react'
import axios from './../node_modules/axios/lib/axios';
const App = () => {


    const [data, setData] = useState([])

    // get data using the Fetch API

    // const getData = async () => {

    //     const responce = await fetch('https://jsonplaceholder.typicode.com/todos')

    //     const data = await responce.json()

    //     console.log(data);

    //     // const responce = await axios.get('')



    // }



    // get data using the Axios API

    async function getData() {

        const responce = await axios.get('https://picsum.photos/v2/list')

        setData(responce.data)

        
        console.log(data);
    }

    return (
        <div>
            <button onClick={getData}>Get Data</button>


            {data.map((e, idx) => {
                return <div key={idx}>
                    <h1 >{e.author}</h1>
                    <img src={e.download_url} alt="" />  
                </div>

            })}
        </div>
    )
}

export default App