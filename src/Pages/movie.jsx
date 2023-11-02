import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../component/BreadCrumb";
import MovieInfp from "../component/MovieInfo";
import MovieInfoBar from "../component/MovieInfoBar";
import useMovieFetch from "../Hooks/UseMovieFetch"
import Actor from "../component/Actor";
import Grid from "../component/Griddd";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../API/config";
import NoImage from "../images/no_image.jpg"





const Movie = () => {
    const { movieid } = useParams();
    const { state, loading, error } = useMovieFetch(movieid);

    console.log(state)


    return (
        <>
            {state.original_title ?

                <BreadCrumb movietitle={state.original_title} /> : ""}
            <MovieInfp movie={state} />

            <MovieInfoBar
                time={state.runtime}
                budget={state.budget}
                revenue={state.revenue} />


            <Grid header="Actors">
                { state && state.actors && Array.isArray (state.actors) && state.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                    />

                ))}
            </Grid>
        </>
    )


}




export default Movie;