import React, {useState,useEffect,useRef} from "react";
import PropTypes from 'prop-types';

//import
import searchIcon from '../../images/search-icon.svg';

//styles
import {Wrapper,Content} from './searchbar.styles';
import { SEARCH_BASE_URL } from "../../API/config";

const SearchBar = ({setSearchTerm}) => {
    const [state,setState] = useState('');
    const initial = useRef(true);

    




    useEffect(()=>{
        if(initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(()=>{
            setSearchTerm(state);
        },1000)

        return () => clearTimeout(timer);
    },[setSearchTerm,state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />

                <input
                  type="text"
                  placeholder="Search Movie"
                  onChange={event=>setState(event.currentTarget.value)}
                  value={state}
                />
            </Content>
        </Wrapper>
    );

   
}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.string
}


 export default SearchBar;