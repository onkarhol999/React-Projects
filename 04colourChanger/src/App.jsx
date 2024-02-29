import { useState,useEffect } from 'react'

function App() {
  const [color,setColur] = useState("olive");

  // const click = color =>{
  //   setColur(color);
  // }

  // useEffect(()=>{
  //   document.body.style.backgroundColor = color
  // },[color])

  return (
    <>
    <div className='changeColor w-full h-screen'>
          style={{bagroundColor:"#000"}}
    </div>
    </>
  )
}

export default App
