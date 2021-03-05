import React, { useState } from 'react';





const App=()=>{
  const[num,setNum]=useState(0);

  const incNum=()=>
  {
    setNum(num+1);
  }
  const decNum=()=>{
    
    if (num>0)
    {setNum(num-1);}
    else{
      alert("limit cross")
      alert("set limit")
    }
  }



  return(
    <>
    <div>
     <div>
     {num}
      </div>
       <div>
       <button onClick={incNum}>
       

        </button  ><div>
         <button onClick={decNum}>
          </button>
        </div></div>
         </div>

    </>
    )
}

export default App;
