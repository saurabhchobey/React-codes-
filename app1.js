import React, { useState } from 'react';


const App = () => {
  const State= useState();
//console.log(State);
const[count,setCount]=useState(0);



const IncNUM=()=>{
  setCount(count + 10);
 // console.log("clicked " + count++)
};
  return (<>
  <h1>{count}</h1>
  <button onClick={IncNUM}>click me</button>



  </>
    
    
    
    );
};
export default App;