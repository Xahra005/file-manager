import React from "react";
import { Image } from "./thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (

    <>
        {clickable ? <a href={`/${movieId}` }>
            <Image src={image} />

        </a> : <Image src={image} />
        }



    </>
);



export default Thumb;