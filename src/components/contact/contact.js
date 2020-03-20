import React from 'react';
import './contact.css'
import ghLogo from '../../assets/ghLogo.png';
import liLogo from '../../assets/linkedin-64.png'

const openTag = '<';
const closeTag = '>';
const closingTag = '</'
console.log(ghLogo);
function Contact() {
    return (
    <div className="container">
        <div className="bio-container">
            <div className="bio-container--html">
                <p>{openTag}html lang="en"{closeTag}</p>
                <p style={{marginLeft:'1rem'}}>{openTag}body{closeTag}</p>
            </div>
            <div className="bio-container--info">
                <h1>PHILIP KOGEL</h1>
                <p>Hey, my name is Philip and I am currently working as a <b>full-stack developer</b> for one of the leading independent telematics operators in Europe. Working mostly with Angular, React and .NET.<br/>
                <br/>Contact me for futher information at
                    <span className="text-shadow">
                        <a href="mailto:philipkogel@yahoo.pl">philipkogel@yahoo.pl</a>
                    </span>
                </p>
            </div>
            <div className="bio-container--html">
                <p style={{marginLeft:'1rem'}}>{closingTag}body{closeTag}</p>
                <p>{closingTag}html{closeTag}</p>
            </div>
        </div>
        <div className="site-links">
            <ul>
                <li><a href="https://github.com/philipkogel" target="_blank"><img className="gh-logo" src={ghLogo} alt="GitHub" /></a></li>
                <li><a href="https://www.linkedin.com/in/philip-kogel" target="_blank"><img className="li-logo" src={liLogo} alt="LinkedIn" /></a></li>
            </ul>
        </div>
    </div>);
}

export default Contact;