import React from "react";
import { Content, Wrapper,Text } from "./banner.style";



const Banner = ({image,title,text}) =>{
    return (
        <>
       <Wrapper image = {image}>
           <Content>
             <Text>
             <h1> {title}</h1>
             <p> {text}</p>
             </Text>
           </Content>
      

       </Wrapper>
       </>
    );
}

export default Banner;