import React from 'react';
//style
import { Wrapper, Content } from './BreadCrumb.style';
//link
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
const BreadCrumb = ({movieTitle}) => (
    <Wrapper>
        <Content>
            <Link to='/' style={{textDecoration:"none"}}>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string
}

export default BreadCrumb;