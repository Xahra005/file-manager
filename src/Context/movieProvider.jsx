import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import endpoints from "../API/endpoint";

export const MoviesContext = createContext();
 const initialState={
     page:0,
     results:[],
     total_pages:0,
     total_results:0,
 }

 const reducerState={
     searchTerm:"",
     loading:false,
     error:false,
     movie:initialState,
     isLoadingMore:false,
 }


export const MoviesProvider = ({children})=>{
    const [searchTerm,setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);


    const fetchMovies = async (page,searchTerm = '') =>{
        try{
            setError(false);
            setLoading(true);

            const movies = await endpoints.fetchMovies(searchTerm,page);
            setState(prev => ({
                ...movies,
                results:
                page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        }catch(err){
            setError(true);
        }
        setLoading(false);

    }

    useEffect(()=>{
       
        setState(initialState);
        fetchMovies(1,searchTerm);
    },[searchTerm]);

    //Laod More
    useEffect(()=>{
        if(!isLoadingMore) return;
        fetchMovies(state.page + 1,searchTerm);
        setIsLoadingMore(false);
    },[isLoadingMore,searchTerm, state.page]);
      const value={state,loading,error,searchTerm,setSearchTerm,setIsLoadingMore}
    return <MoviesContext.Provider    value={value}>
        {children}
    </MoviesContext.Provider>
}