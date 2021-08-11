import React from 'react';
//styles
import { Wrapper, Image } from './Actor.style';
//proptype
import PropTypes from 'prop-types';
const Actor = ({name, character, imageUrl}) => (
    <Wrapper>
        <Image src={imageUrl}/>
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
}

export default Actor;