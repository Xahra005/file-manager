import {useState,useEffect} from 'react';
import endpoints from '../API/endpoint';
import { isPersistedState } from '../helper';

//Helpers



export const useMovieFetch = movieId =>{
    const [state,setState] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                setError(false);

                const movie = await endpoints.fetchMovie(movieId);
                const credits = await endpoints.fetchCredits(movieId);
                //Get directors only
                const directors = credits.crew.filter(
                    member=> member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });

                setLoading(false);

            }catch(err){
                setError(true);
            }
        }

        const sessionState = isPersistedState(movieId);
        if(sessionState){
            setState(sessionState);
            setLoading(false);
            return;
        }
        fetchData();
    },[movieId]);

    //Write to sessionStorage
    useEffect(()=>{
        sessionStorage.setItem(movieId,JSON.stringify(state));
    },[movieId,state]);

    return {state,loading,error};
}
export default useMovieFetch;