import React from "react";
import { useState } from "react";
import Tab from "../Tab/tab";


const Brand =()=>{
    const[tab,setTab]=useState('addidas')
    return(

    <Tab active={tab} setActive={setTab}/>


    )}



export default Brand;