import React from 'react';

import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';
import './header.scss';

const Header: React.FC = () => {
    return (
        <header>
            <HeaderTop />
            <HeaderMain />
        </header>
    );
};

export default Header;
