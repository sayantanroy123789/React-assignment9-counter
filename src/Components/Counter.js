import {useState} from 'react'

function Counter(){
      let [state,setState] = useState(0)  
         

         
let counterStyle = {
    width:"300px",
    boxShadow:"0 0 10px black",
    padding:"30px",
    margin:"100px auto",
    textAlign:"center",
    backgroundColor:"#C70039",
    color:"white"
}



const increaseCount = ()=>{
       setState(state+1) 
       
}

    return( <div style={counterStyle}>
        
         <h2>changed Count Value to {state} </h2>
         <button onClick={increaseCount} style={{height:"30px",width:"120px",backgroundColor:"blue",color:"white",fontSize:"16px",cursor:"pointer",borderRadius:"12px"}}>Inc Count </button>
    </div>
    )
}
export default Counter