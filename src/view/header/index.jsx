import React from 'react';

import '../../css/header/header.css';
import {MondoraLogo1} from '../../images_js/images-header';


function Header() {
    return(
        <header>
            <a href="https://mondora.com/"><img src={MondoraLogo1} alt="logo-1" /></a>
        </header>
    );
}

export default Header;