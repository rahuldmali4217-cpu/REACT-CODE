// import React, { useEffect, useState } from 'react'

import { useEffect, useState } from "react"

// const App = () => {

//     // function rendom() {
//     //     const a = Math.random()
//     //     console.log(a);
//     // }


//     // const [num, setNum] = useState(0)
//     // const [num2, setNum2] = useState(100)

//     // useEffect(function () {
//     //     console.log('use efftect is running...');
//     // }, [num])



//     const [a, setA] = useState(0)
//     const [b, setB] = useState(0)

//     function aChnaging() {
//         console.log('value of a is changing');

//     }
//     function bChnaging() {
//         console.log('value of b is changing');
//     }


//     useEffect(function () {
//         aChnaging()
//         console.log('Use effect is runing');

//     }, [a])
//     useEffect(function () {
//         bChnaging()
//         console.log('Use effect is runing');

//     }, [b])


//     return (
//         <div>
//             {/* <h1>num {num}</h1>
//             <h1>num2 {num2}</h1>
//             <button onMouseEnter={() => {
//                 setNum(num + 1)
//             }}
//                 onMouseLeave={() => {
//                     setNum2(num2 + 10)

//                 }}
//             >Hover</button> */}

//             <h1>A is {a}</h1>
//             <h1>A is {b}</h1>
//             <button onClick={() => {
//                 setA(a + 1)
//             }}>Change A</button>
//             <button onClick={() => {

//                 setB(b - 1)
//             }}>Change B</button>

//         </div>
//     )
// }

// export default App




const App = () => {


    // function random() {
    //     const a = Math.random()
    //     console.log(a);
    // }

    // const [num, setNum] = useState(0)
    // const [num2, setNum2] = useState(100)

    // useEffect(() => {
    //     console.log('useeffect is running');
    // }, [num])


    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    function aChnaging() {
        console.log('Value of a is Changing');
    }
    function bChnaging() {
        console.log('Value of a is Changing');
    }


    useEffect(function () {
        aChnaging()
        console.log('useEffect is running');

    }, [a])
    useEffect(function () {
        bChnaging()
        console.log('useEffect is running');

    }, [b])


    return (
        <div>
            {/* <h1>num {num}</h1>
            <h1>num2 {num2}</h1>
            <button onMouseEnter={() => {
                setNum(num + 1)
            }}
                onMouseLeave={() => {
                    setNum2(num2 + 10)

                }}
            >Hover</button> */}

            <h1>A is {a}</h1>
            <h1>B is {b}</h1>

            <button onClick={() => {
                setA(a + 1)
            }}>Change A</button>
            <button onClick={() => {
                setB(b - 1)
            }}>Change B</button>


        </div >
    )
}



export default App
