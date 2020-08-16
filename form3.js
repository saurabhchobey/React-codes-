import React, { useState } from 'react';



const App = () => {
  const[fullName,setFullName]=useState({
    fname:"",lname:"",phone:"",email:""
  
    });
  
  const InputEvent=(event)=>{

    console.log(event.target.value);
    console.log(event.target.name);

    const {value,name}=event.target;
    // const name=event.target.name;




    setFullName((preValue)=>{
      // console.log(preValue);
      return{
        ...preValue,
        [name]:value,

      }
      
      // if(name=="fname"){
      //   return{

      //   fname:value,
      //   email:preValue.email,
      //   phone:preValue.phone,
        
      //   lname:preValue.lname,
      // };}
      // else if(name==="lname"){
      //   return{
      //     fname:preValue.fname,
      //     email:preValue.email,
      //     phone:preValue.phone,
          
      //     lname:value,
      //   };
      // }else if(name==="phone"){
      //   return{
      //     fname:preValue.fname,
      //     lname:preValue.lname,
      //     phone:value,
      //     email:preValue.email,
      //   };
      // }else if(name==="email"){
      //     return{
      //       fname:preValue.fname,
      //       lname:preValue.lname,
      //       email:value,
      //       phone:preValue.phone,
      //     };
      // }
      

    });

    
    
    
  
 

  };
  
  
  

   const onSubmit=(event)=>{
     event.preventDefault();
     alert("submit")
    
   }


   
  return (<>
  <form onSubmit={onSubmit}>
  <h1>hello {fullName.fname} {fullName.lname}</h1>
  <p>
    {fullName.phone}
    </p>
  <p>
    {fullName.email}
  </p>
  <input type='text' placeholder="id" name= 'fname' 
  onChange ={InputEvent} value={fullName.fname}/>
  <br/>
  <input type ='text' placeholder="passwrd" name='lname'
   onChange ={InputEvent} value={fullName.lname}/>
  
  <br/>
  <input type="email"
   name="email" 
   placeholder="email"
   onChange ={InputEvent}
   value={fullName.email}></input>
<br/>
  <input type="number"
  name="phone" placeholder="phone"
  value={fullName.phone}
  onChange ={InputEvent}
   ></input>

  <br/>
  <button type= 'submit' >
    click me
  </button>
  </form>
  


  </>
    
    
    
    );
};
export default App;