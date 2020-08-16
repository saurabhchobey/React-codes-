import React, { useState } from 'react';



const App=()=>{

    let time =new Date().toLocaleTimeString();
    const[ctime,setCtime]=useState();

    const updateTime=() =>{
        time=new Date().toLocaleTimeString();
        setCtime(time);
    };


    return(<>

    <h1>{ctime}</h1>

    <button onClick={cTime}>grt time</button>
    
    
    
    
    
    </>)
}


export default App;