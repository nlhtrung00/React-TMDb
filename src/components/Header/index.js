import React from 'react';
//image
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'
//style
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';
//link
import { Link } from 'react-router-dom';
const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;