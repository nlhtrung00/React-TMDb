import React from 'react';
//styles
import { Wrapper } from './Button.style';
import PropTypes from "prop-types";

const Button = ({text, callback}) => (
    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
);

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func
}

export default Button;