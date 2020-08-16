import React, { useState } from 'react';


const App =()=>{

  const [inputList,setInputList]=useState("");
  const [items,setItems]=useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value);

  };
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    });
    setInputList('');


  }
  
  
  return(
    <>

    <div className="main_div">
      <div className="center_div">
        
        <br/>
        <h1>
          hello to do list
        </h1>
        <br/>
       <input placeholder="todo" value={inputList}   onChange={itemEvent} />
       <button  type= 'submit' onClick={listOfItems}>+</button>
       <ol>
  {/* <l1>buy {inputList}</l1> */}
 { items.map((itemval)=>{
   return <l1><br/> {itemval}</l1>
  })}


  
       </ol>
      </div>
    </div>
    </>
  );










}
export default App;