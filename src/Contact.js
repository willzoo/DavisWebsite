import React from "react";
import './App.css';

function Contact() {
    return (
        <div className="contact">
            <header>
                <h1>Contact Us</h1>
            </header>
            <div className="contact-container">
                <h1>EMAIL:</h1>
                <a href="mailto:BENTDAVISCLEANUP@GMAIL.COM">BENTDAVISCLEANUP@GMAIL.COM</a>
                <div></div>
                <a href="mailto:ZHUJWILL@GMAIL.COM">ZHUJWILL@GMAIL.COM</a>
                <h1>DISCORD:</h1>
                <a href="https://www.discord.com/">Craig's Discord: craiguito</a>
                <div></div>
                <a href="https://www.discord.com/">Will's Discord: johnjacobjing</a>
                <h1>LINKEDIN:</h1>
                <a href="https://www.linkedin.com/in/william-zhu-6b2656220/">linkedin.com/in/william-zhu-6b2656220/</a>
            </div>
        </div>
    );
}

export default Contact;