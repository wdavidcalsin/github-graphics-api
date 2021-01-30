import React, { useState } from 'react';

import ImgLogo from '../assets/img/logo.png';

import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import SunAndMoon from '../assets/img/img-complete.png';
import { useTheme } from '../context/theme.context';

const Header = (): JSX.Element => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(!theme);

        console.log('Theme:', theme);
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
                        src={SunAndMoon}
                        className={theme ? 'img-sol' : 'img-luna'}
                        onClick={changeTheme}
                        draggable="false"
                    />
                </div>
                <div className="redes fx fx-aic">
                    <a href="https://github.com/wdavidcalsin">
                        <FaGithub className="github" />
                    </a>
                    <a href="https://twitter.com/wdavidcalsin">
                        <FaTwitter className="twitter" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
