import { useState,createContext } from "react"



export const CounterContext = createContext({
    counter: 0,
    updateCounter: () => { }



})

     export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)
    const updateCounter = () => setCounter(counter + 1)
    const value = { counter, updateCounter }

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )

}

















// import { name } from "ci-info";
// import React from "react";
// import { useState } from "react";
// import { useReducer } from "react";

// const ageReducer = (state, action) => {
//     const { type, payload } = action

//     switch (type) {
//         case 'increamentAge':
//             return { age: state.age + 1 }
//         case "setName":
//             return { ...state, name: payload }

//     }
// }

// export function Agemessage() {
//     const [state, dispatch] = useReducer(ageReducer, { age: 42, name: "" });

//     return (
//         <div>
//             <input type="text" onChange={(e) => dispatch({ type: "setName", payload: e.target.value })} />
//             <button disabled={Boolean(state.name)} onClick={() => dispatch({ type: 'increamentAge' })} >Increment age</button>
//             <p style={{ color: 'black' }}>Hello {state.name ? state.name : '!'}, you are {state.age}</p>
//         </div>
//     )
// }


// const[array,setArray]=useState([1,2,3,4,5])
// const addItem=()=>{
// setArray([...array,6]);

// console.log(count)
// }





// const numReducer = (operator ) => {
//     const { firstNumber,secondNumber } = operator
//     switch (operator) {
//         case '+':
//             return firstNumber + secondNumber

//         case '-':
//             return firstNumber - secondNumber

//         case '*':
//             return firstNumber * secondNumber

//         case '/':
//             return firstNumber / secondNumber





//     }
// }


// function Nummessage() {
//     const [state, dispatch] = useReducer(numReducer, {result:0})
//     return (
//         <div>
//         <button onClick={() => dispatch({ type: 'setResult' })} >+</button>
//         <button onClick={() => dispatch({ type: '-' })} >-</button>
//         <button onClick={() => dispatch({ type: '*' })} >*</button>
//         <button onClick={() => dispatch({ type: '/' })} >/</button>
//         </div>
//     );}
// export default Nummessage;




