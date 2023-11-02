import React from 'react';
import './App.css';
import HomePage from "./HomePage";
import Contact from "./Contact";
import AboutUs from "./AboutUs";


function App() {
    const [view, setView] = React.useState('Home');
    const toggleHome = () => {
        if (view !== 'Home') setView('Home');
    }
    const toggleBlog = () => {
        if (view !== 'Blog') setView('Blog');
    }
    const toggleAboutUs = () => {
        if (view !== 'AboutUs') setView('AboutUs');
    }
    const toggleContact = () => {
        if (view !== 'Contact') setView('Contact');
    }



    return (
        <div>
            <div className="container">
                {/* NavBar section */}
                <nav className="navbar">
                    <img src="epc.jpg" alt="Time Doctor Logo" className="logo" />
                    <ul className="menu">
                        <li onClick={toggleHome}>HOME</li>
                        <li onClick={toggleAboutUs}>ABOUT US</li>
                        <li onClick={toggleContact}>CONTACT</li>
                    </ul>
                </nav>
                {(() => {
                    if (view === 'Home') {
                        return (
                            HomePage()
                        );
                    }
                    else if (view === 'AboutUs') {
                        return (
                            AboutUs()
                        );
                    }
                    else if (view === 'Contact') {
                        return (
                            Contact()
                        );
                    }
                })()}

            </div>
            <footer>
                <p>© All Rights Reversed</p>
                <p>William Zhu 2023</p>
            </footer>
        </div>
    );
}

export default App;
