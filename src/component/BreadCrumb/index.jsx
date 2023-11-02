import React from 'react';
import {Link} from 'react-router-dom';

//styles
import {Wrapper,Content} from './breadcrumb.style';

const BreadCrumb = ({movietitle}) =>(
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movietitle}</span>
        </Content>
    </Wrapper>
);



export default BreadCrumb;








// import React from "react";


// const BreadCrumb =({movietitle})=>{
//      return(
//          <>
//          <div>
//          <a href="/">Home</a>
//          <span>{movietitle}</span>
//          </div>
//          </>
//      )
// }

// export default BreadCrumb;