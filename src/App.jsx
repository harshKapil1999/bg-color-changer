import { useState } from "react"


function App() {
  
  const colorArray = [
    'White',
    'Black',
    'Green',
    'Red',
    'Blue',
    'Yellow',
    'Pink',
    'Olive',
    'Lavender',
    'Purple',
    'Brown',
    'Gold',
    'Teal',
    'Crimson',
  ]
  const [color, setColor] = useState("White");

  return (
    <>
      <div 
        className="w-full h-screen"
        style={{backgroundColor: color}}
      >
        <h1 className='text-3xl text-center text-slate-900 '>Bg-Changer</h1>
        <div className="m-auto fixed flex flex-wrap justify-center bottom-12 inset-x-0 bg-slate-300  p-2 text-white w-fit rounded-xl">
          {colorArray.map((col, index) => {
            return (<button key={index} className="mx-1 px-6 py-2 rounded-full" style={{backgroundColor: col}} onClick={() => setColor(col)}>{col}</button>)
          })}
        </div>
      </div>
    </>
  )
}

export default App
