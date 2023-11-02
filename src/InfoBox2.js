import React from 'react';

// CSS for the infobox component
const infoBoxStyle = {
    border: '8px solid white',
    padding: '20px',
    flexGrow: '1',
    width: '300px',
    maxWidth: '500px',
    height: '400px',
    textAlign: 'Center',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "Segoe UI Semilight",
    backgroundColor: 'skyblue',
    alignItems: 'center',
};

const logoStyle = {
    border: '4px solid white',
    flex: '1',
    maxHeight: '200px',
    maxWidth: '200px',
    margin: '10px 0 20px 0',
    alignSelf: 'flex-Left'
};

const titleStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '10px',
    color: 'white',
};

// Infobox component
const InfoBox2 = ({ title, content, image }) => (
    <div style={infoBoxStyle}>
        <img src={image} alt="Logo" style={logoStyle}></img>
        <div style={titleStyle}>{title}</div>
        {content.split('\\').map((line, index) => (
            <div key={index}>{line}</div>
        ))}
    </div>
);

export default InfoBox2;