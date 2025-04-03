import React , {useState,useEffect} from 'react'
import Assembler from './components/Assembler'
import details from "./details"

const App = () => {

  return (
<>
  <div >

      <h1 style={{textAlign:"center",fontFamily:"cursive",color:"rgb(150,50,150)",fontStyle:"italic"}}>Shopping Cart</h1>
      {
        details.map((elem,idx)=>{
          return <Assembler {...elem}/>
        })}
      
    </div>
</>

  )
}

export default App