import * as React from 'react';
import { Link } from 'react-router-dom';

import logo_img from '../assets/img/logo-github-login.png';
import statictics_img from '../assets/img/statictics-img.png';

const SignIn = () => {
    return (
        <div className="sign-in">
            <div className="container-small">
                <div className="card ">
                    <div className="left">
                        <img src={logo_img} alt="" />
                        <Link to="/">Sign In Github</Link>
                    </div>
                    <div className="right">
                        <h2>Statictics Profile</h2>
                        <img src={statictics_img} alt="" />
                        <div className="warnig">
                            <h4>Warnig</h4>
                            <p>
                                La autenticacion que usted va a realizar, sera solo para
                                fines de prueba en la aplicacion, ya que solo podremos
                                visualizar los datos publicos de su Cuenta de github nose
                                preocupe por su privacidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
