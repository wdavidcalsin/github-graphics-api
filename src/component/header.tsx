import React from 'react';
import ImgLogo from '../assets/img/image-2.png';
import RedesTwiter from '../assets/img/image-4.png';
import RedesGithub from '../assets/img/image-3.png';

const Header = (): JSX.Element => {
    return (
        <header className="header fx fx-aic">
            <div className="container fx fx-jcsb fx-aic" style={{}}>
                <div className="logo fx fx-aic">
                    <img src={ImgLogo} alt="" />
                    <span>Statistics Profile </span>
                </div>
                <div className="redes fx fx-aic">
                    <img src={RedesGithub} alt="" />
                    <img src={RedesTwiter} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;
