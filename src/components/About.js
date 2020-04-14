import React from 'react';
import Shore from "../images/shore.JPG";

const About = () => (
    <div className="info-box">
            <p><img src={Shore} className="about-image"/>
            Hello, I'm Mary</p>
            <p>I live in the beautiful city of Edinburgh here in sunny Scotland.
            <img src={Shore} className="about-image"/>
            </p>
            <p>
            <img src={Shore} className="about-image"/>
            I recently left my full time job to embark on a new career and started by completing the Professional Software Development course at CodeClan</p>
            <p>I am now looking for my first role as a junior software developer
            <img src={Shore} className="about-image"/>
            </p>
    </div>
    )

export default About;