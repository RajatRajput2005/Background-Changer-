import { useState } from 'react'

// import './App.css'
// import Colorcard from '/.components/colorcard'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
    
    <div className=' w-full h-screen duration-200'
     style={{backgroundColor: color}}>
<div className='fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2'>
  <div className="flex flex- wrap justify center gap-3 shadow-lg bg-white px-2 py-1 rounded-2xl cursor-pointer">
     <button 
     onClick={()=>setColor("red")}
     className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
     style={{backgroundColor:"red"}}>Red</button>
       <button 
       onClick={()=>setColor("blue")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
     style={{backgroundColor:"blue"}}>blue</button>
  <button 
  onClick={()=>setColor("green")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
     style={{backgroundColor:"green"}}>green</button>
  <button
  onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
     style={{backgroundColor:"yellow"}}>yellow</button>
  <button 
  onClick={()=>setColor("aqua")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
     style={{backgroundColor:"aqua"}}>Aqua</button>
  <button
  onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
     style={{backgroundColor:"black"}}>black</button>
  <button 
  onClick={()=>setColor("pink")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
     style={{backgroundColor:"pink"}}>pinkish  .</button>
  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
     ></button>
     <button 
  onClick={()=>setColor("olive")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
     style={{backgroundColor:"olive"}}>REFRESH</button>
  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
     ></button>


  </div>
</div>

    </div>
    
  )
}

export default App
