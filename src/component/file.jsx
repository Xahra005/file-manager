import { useContext } from "react";
import {CounterContext, } from "./ageMessage";

const File=()=>{
    const {counter,updateCounter}=useContext(CounterContext);

return(
    <>
      <h1>Counter App</h1>
    <div>
    <button onClick={updateCounter}>Increase number</button>
    <span>{counter}</span>

    </div>
    
   
    </>
    );


}


export default File;
