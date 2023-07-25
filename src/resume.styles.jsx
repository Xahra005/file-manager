import styled from 'styled-components';

export const Container = styled.div`
display:flex;
min-height:100vh;
margin :0 auto;
min-width:300vh;
padding-left:56px;
padding-top:50px;
background-color:whitesmoke;
box-shadow:0px 25px 20px rgba(0,0,0,10%)

`;

export const Aside = styled.aside`
flex:0 0 25%;
min-height:100vh;
background-color:yellow;
`;

export const Main = styled.section`
flex:1;
min-height:100vh;
background-color:white;
padding-top:24px;


.description{
    padding-left:24px;
    text-transform:uppercase;


.herotext{
    font-size:56px;
}
p{
    font-size:17px;
}
}
`;

export const Heading = styled.h2`
 text-transform:uppercase;


 span{
     display:block;
     max-width: 15%;
     margin-top:5px;
     height:3px;
     background-color:black;}
 `


 export const Heading2 = styled.h4`
font - size: 13px;
text - transform: capitalize;
`;

export const Body1  = styled.p`
font - size: 14px;
text - transform: capitalize;
`;

export const Body2  = styled.p`
font - size: 13px;
text - transform: capitalize;
`; 


export const SlugLine = styled.small`
font - size: 12px;
text - transform: capitalize;
`;
