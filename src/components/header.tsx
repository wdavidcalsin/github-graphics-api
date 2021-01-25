import React, { useState } from 'react';

import ImgLogo from '../assets/img/image-2.png';
import RedesTwiter from '../assets/img/image-4.png';
import RedesGithub from '../assets/img/image-3.png';

import Sol from '../assets/img/sol-complete.png';
import Luna from '../assets/img/luna-complete.png';
import SolAndLuna from '../assets/img/img-complete.png';

const Header = (): JSX.Element => {
    const [theme, setTheme] = useState(true);

    const changeTheme = () => {
        setTheme(!theme);
        console.log('hola', theme);
    };

    return (
        <header className="header fx fx-aic">
            <div className="container-small  fx fx-jcsb fx-aic">
                <div className="logo fx fx-aic">
                    <img src={ImgLogo} alt="" />
                    <span>Statistics Profile </span>
                </div>
                <div className="theme">
                    <img
                        src={SolAndLuna}
                        className={theme ? 'img-sol' : 'img-luna'}
                        onClick={changeTheme}
                    />
                </div>
                <div className="redes fx fx-aic">
                    <a href="/">
                        <img src={RedesGithub} alt="" />
                    </a>
                    <a href="/">
                        <img src={RedesTwiter} alt="" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
