import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import AvatarImage2 from "../assets/img/mahendra.jpg";
import AvatarImage3 from "../assets/img/dev.jpg";
import AvatarImage4 from "../assets/img/naina.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developers</h3>
            <br />
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Bhaskar Chavan</h3>
                        <p>Front-End developer</p>
                        <p></p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Engineering Student at KJSIEIT, Sion.</p>
                    <p>Graduating in 2024 and looking for a responsible position to gain practical knowledge</p>
                    <p>A front-end web developer and a Competitive coder.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"#"} title={"vishal.kld"}>
                        {/* https://www.facebook.com/vishal.kld */}
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"Vishal_kld"}>
                        {/* https://twitter.com/Vishal_kld */}
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"vishalsingh-"}>
                        {/* https://www.linkedin.com/in/vishalsingh-/ */}
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/itz_bhaskar_here/"}  title={"vishalsingh023"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"Web Portfolio"}>
                        {/* https://vishal.thetechnician.in/ */}
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
            <br />
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage2} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Mahendra Bhanushali</h3>
                        <p>Python Developer</p>
                        <p></p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Engineering Student at KJSIEIT, Sion.</p>
                    <p>Graduating in 2024 and looking for a responsible position to gain practical knowledge</p>
                    <p>A python and c programmer and photoshop editor.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"#"} title={"vishal.kld"}>
                        {/* https://www.facebook.com/vishal.kld */}
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"Vishal_kld"}>
                        {/* https://twitter.com/Vishal_kld */}
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"vishalsingh-"}>
                        {/* https://www.linkedin.com/in/vishalsingh-/ */}
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"vishalsingh023"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"Web Portfolio"}>
                        {/* https://vishal.thetechnician.in/ */}
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
            <br />
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage3} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Devkumar Bharuka</h3>
                        <p>Back-End developer</p>
                        <p></p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Engineering Student at KJSIEIT, Sion.</p>
                    <p>Graduating in 2024 and looking for a responsible position to gain practical knowledge</p>
                    <p>A back-end web developer.</p>
                    <p>I love to make website live and dynamic by backend.</p>
                    <p>I have an enthusiastic about the how web pages works at backend.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"#"} title={"vishal.kld"}>
                        {/* https://www.facebook.com/vishal.kld */}
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"Vishal_kld"}>
                        {/* https://twitter.com/Vishal_kld */}
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"vishalsingh-"}>
                        {/* https://www.linkedin.com/in/vishalsingh-/ */}
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"vishalsingh023"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"Web Portfolio"}>
                        {/* https://vishal.thetechnician.in/ */}
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
            <br />
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage4} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Naina Dogra</h3>
                        <p>Front-End developer</p>
                        <p></p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Engineering Student at KJSIEIT, Sion.</p>
                    <p>Graduating in 2024 and looking for a responsible position to gain practical knowledge</p>
                    <p>A front-end web developer and a python developer.</p>
                    <p>Also comfortable with c programming.</p>
                    <p>I am interested in making responsive front end applications.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"#"} title={"vishal.kld"}>
                        {/* https://www.facebook.com/vishal.kld */}
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"Vishal_kld"}>
                        {/* https://twitter.com/Vishal_kld */}
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"vishalsingh-"}>
                        {/* https://www.linkedin.com/in/vishalsingh-/ */}
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"vishalsingh023"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"Web Portfolio"}>
                        {/* https://vishal.thetechnician.in/ */}
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
            <br />
        </div>
    );
}

export default Developer;