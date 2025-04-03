import React,{useRef} from 'react'
import "./Acard.css"
const Acard = ({cardStyle,price , selected , setSelected , total,setTotal,handleAddition , name , url , imagePath}) => {
    const ref = useRef();   
    
    

    function callAddition(){
        const selectTag = ref.current;
        const num = Number.parseInt(selectTag.value);
        setSelected(num);
        setTotal(num+total);
    }





  return (
    <div style={cardStyle}>


        
        <img src={`${process.env.PUBLIC_URL}/images/${imagePath}`} style={{maxHeight:"200px"}} alt="" />
        <hr/>
        <h4>{name}</h4>
        <p>Item Price $&nbsp;{price}</p>
        

        <div style={{display:"flex",alignItems:"center",width:"100%"}}>
            <p>Quantity:&nbsp;&nbsp;</p>
        <select 
        onChange={()=>{
        setSelected(Number.parseInt(ref.current.value)); 
        }}
        ref={ref}style={{width:"100%",height:"2rem"}}>

            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

        </select>
        </div>

        <button onClick={callAddition}>
            Add
        </button>


    </div>
  )
}

export default Acard