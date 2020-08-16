import React, { useState } from 'react';



const App = () => {
  const[name,setName]=useState("");
  const[lastName,setLastName]=useState();

  const[fullName,setFullName]=useState();

  const[lastNamenew,setLastNamenew]=useState();

  const InputEvent=(event)=>{

    console.log(event.target.value);

    setName(event.target.value);
    
    
  }
  const InputEventtwo=(event)=>{
    setLastName(event.target.value);

  }
  
  
  

   const onSubmit=(event)=>{
     event.preventDefault();
     setFullName(name);
     setLastNamenew(lastName);
   }
  return (<>
  <form onSubmit={onSubmit}>
  <h1>hello {lastNamenew} {fullName}</h1>
  <input type='text' placeholder="id" onChange ={InputEventtwo} value={lastName}/>
  <br/>
  <input type ='text' placeholder="passwrd" onChange ={InputEvent}/>
  
  <br/>
  <button type= 'submit' >
    click me
  </button>
  </form>
  


  </>
    
    
    
    );
};
export default App;