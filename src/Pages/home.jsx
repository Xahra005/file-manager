import React, { useContext } from "react";
import { useHomeFetch } from "../Hooks/UseHomeFetch";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../API/config";
import Grid from "../component/Grid";
import Banner from "../component/Banner";
import Thumb from "../component/Thumb";
import { MoviesContext } from "../Context/movieProvider";
// import {AiOutlineLoading3Quarters} from "react-icons/ai"
import Spinner from "../component/Spanner";
import SearchBar from "../component/Search";




const Home = () => {
    const { state, error, loading, searchTerm, setSearchTerm } = useContext(MoviesContext);
  console.log(state,'in home')



    if (error) return <div>Something went wrong!</div>
    // if (loading) return <AiOutlineLoading3Quarters />

    return (
        <>
            {!searchTerm && state.results[0] ?
                <Banner
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}

                />
                : null

            }

            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? "your search result" : "Popular movies"} >


                {
                    state.results.map(movie =>
                        <Thumb
                            clickable
                            image={
                                movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : ''
                            }
                            movieId={movie.id}
                        />)

                }
            </Grid>
            {loading &&
                <Spinner />

            }

        </>

    )
}

export default Home;





