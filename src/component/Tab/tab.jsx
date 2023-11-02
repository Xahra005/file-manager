import React from "react";
import { useState } from "react";


const Tab = ({ active, setActive }) => {
    console.log(active)
    return (
        <>
            <button style={{background:"purple", color:"white",border:"none",margin:"10px 9px", }} onClick={()=>setActive("addidas")}>Addidas</button>
            <button style={{background:"pink", color:"white",border:"none",margin:"10px 9px"}} onClick={()=>setActive("louis")}>Louis</button>
            <button style={{background:"indigo", color:"white",border:"none",margin:"10px 9px"}} onClick={()=>setActive("michello")}>Michello</button>


            {active === 'addidas' ?
                <div>
                    <p style={{ color: "black" }}> size:39</p>
                    <p style={{ color: "black" }}>color:red</p>
                </div>

                :active === 'louis' ?
                <div>
                    <p style={{ color: "black" }}>size:50</p>
                    <p style={{ color: "black" }}>color:green</p>
                </div>

                : <div>
                    <p style={{ color: "black" }}>size:25</p>
                    <p style={{ color: "black" }}>color:pink</p>
                </div>
            }

        </>

    )

}





export default Tab;