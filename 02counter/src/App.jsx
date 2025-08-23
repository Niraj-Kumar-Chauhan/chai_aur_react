import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, ncCounter] = useState(1)

//  let count = 12;

 const addCount = ()=>{
  counter = counter + 1
  ncCounter(counter)
  console.log("Add button clicked , count = ", counter)
 }
  const removeCount = ()=>{
  if(counter != 0){
    // counter = counter - 1
    ncCounter(counter-1)
  }
  console.log("Remove button clicked , count = ", counter)
 }
  return (
    <>
      <h1>HII CHAI AUR CODE</h1>
      <h2>The Count is : {counter}</h2>
      <button onClick={addCount}>Add Value : {counter}</button>
      <button onClick={removeCount}>Remove Value : {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
