import React, { useState } from 'react'

const App = () => {


  // let a = 20

  // function changeA() {
  //   console.log(a);
  //   a++
  //   console.log(a);
  // }


  // const [num, setNum] = useState(0)
  // const [username, setUsername] = useState('Rahul')
  // const [users, setUsers] = useState([10, 20, 30])

  // function changeNum() {
  //   setNum(num + 1)
  //   setUsername("Kundan")

  // }


  // const [num, setNum] = useState(0)

  // function increseNum() {
  //   setNum(num + 1)
  // }
  // function decreseNum() {
  //   if (num > 0) {

  //     setNum(num - 1)
  //   }
  // }

  // function jump5Num() {
  //   setNum(num + 5)
  // }

  // function resetNum() {
  //   setNum(0)
  // }



  // const [num, setnum] = useState({ user: 'Rahul', age: 20 })
  // const [num, setnum] = useState(10)

  // const [num, setnum] = useState([10, 20, 30])

  function btnClicked() {

    // const newNum = { ...num }
    // newNum.user = 'kundan'
    // newNum.age = 21
    // setnum(newNum)

    // const newArr = [...num]
    // newArr.push(40)
    // setnum(newArr)


    // setnum(prev => ({ ...prev, age: 21 }))

    // batch update
    // setnum(prev => prev + 1)
    // setnum(prev => prev + 1)
    // setnum(prev => prev + 1)

  }



  return (
    <div>
      {/* <h1>Value of num is {num} <br /> {users} <br />
        Value of user is {username}
      </h1>
      <button onClick={changeNum}>Click</button> */}

      {/* <h1>{num}</h1>
      <button onClick={increseNum}>Increse</button>
      <button onClick={decreseNum}>Decrese</button>
      <button onClick={jump5Num}>Jump By 5</button>
      <button onClick={resetNum}>Reset</button> */}


      {/* <h1>{num.user}, {num.age},</h1> */}
      <h1>{num}</h1>
        

      <button onClick={(btnClicked)} >Clcik</button>


    </div>
  )
}

export default App