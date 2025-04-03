import React from 'react'
import "./Acard.css"

const Rcard = ({cardStyle ,price , selected , setSelected , total,setTotal}) => {


  return (
    <div style={cardStyle}>


        <h4>Total Quantity : &nbsp;{total}</h4>
        <h4>Total Price $&nbsp;{price*total}</h4>
        
        <button
        onClick={()=>{
            setTotal(Math.max(total-selected,0));
        }}>Remove</button>
        


    </div>
  )
}

export default Rcard