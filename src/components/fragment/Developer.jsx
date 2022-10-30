import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
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
                    <p>A front-endd web developer and a Competitive coder.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/vishal.kld"} title={"vishal.kld"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/Vishal_kld"}  title={"Vishal_kld"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/vishalsingh-/"}  title={"vishalsingh-"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/vishalsingh023/"}  title={"vishalsingh023"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://vishal.thetechnician.in/"}  title={"Web Portfolio"}>
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;