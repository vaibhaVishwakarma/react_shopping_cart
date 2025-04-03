import React , {useState,useEffect} from 'react'
import Acard from './Acard'
import Rcard from './Rcard'


const Assembler = ({price,name,imagePath}) => {
  const [selected , setSelected] = useState(0);
  const [total , setTotal] = useState(0);
  
  const bodyStyle = {

    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    gap:"50px",
    width:"100vw",
    height:"100vh",

  }

  const cardStyle = {
    display:"flex",
    flexDirection:"column",
    height:"500px",
    background:"rgba(240,240,240,0.7)",
    width:"300px",
    padding:"1% 4%",
    justifyContent:"space-around",
    borderRadius:"10px",
    backdropFilter:"blur(10px)"

    
}

  const containerStyle = {
    display:"flex",
    alignContent:"space-around",
    gap:"50px",
    
  }
  
  function handleAddition(num){
    setSelected(prevValue => num);
  }


  const props={
    cardStyle:cardStyle,
    selected:selected,
    setSelected:setSelected,
    total:total,
    setTotal:setTotal,
    handleAddition:handleAddition,
    price:price,
    name:name,
    imagePath,
  }




  return (
    <div style={bodyStyle}>
      
      <div style={containerStyle}>
        <Acard {...props}/>
        <Rcard {...props}/>
      </div>
      
    </div>
  )
}

export default Assembler;