import styled from "styled-components";


export const Spinner =styled.div`
width:50px;
height:50px;
border-radius:50%;
border:5px solid;
border-top:5px solid grey;
margin:20px auto;
animation:spin 0.8s linear infinite;


@keyframes spin{
    0%{
        transform,rotate (0deg) 
        
}
   100%{ 
    transform,rotate(60deg)
}


`