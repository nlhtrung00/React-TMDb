import React, {useState, useEffect, useRef} from 'react';
//image-icon
import searchBar from '../../images/search-icon.svg';
//styels
import { Wrapper, Content } from './SearchBar.style';
import PropTypes from 'prop-types';

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('');
    const initial = useRef(true);
    
    useEffect(() => {
        if (initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchBar} alt='search-icon'/>
                <input type='text' placeholder='Search Movie' onChange={e => setState(e.currentTarget.value)} value={state}/>
            </Content>
        </Wrapper>
    );
}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}

export default SearchBar;