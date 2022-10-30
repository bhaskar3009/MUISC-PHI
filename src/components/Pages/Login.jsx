import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
import './css/Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/">MUSIC-PHI</a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>MUSIC-PHI</h1>
                            <h1>PLAY-HEAL-INTERAC</h1>
                            <p>When Words Fail, Music Speaks</p>
                            <Link to={"/home"} className="btn">
                                Play Songs
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;