import React from 'react';

// CSS for the infobox component
const infoBoxStyle = {
    border: '8px solid white',
    padding: '20px',
    flexGrow: '1',
    width: '300px',
    maxWidth: '500px',
    height: '300px',
    textAlign: 'Center',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "Segoe UI Semilight",
    backgroundColor: 'skyblue',
    alignItems: 'center',
};

const logoStyle = {
    flex: '1',
    maxHeight: '100px',
    maxWidth: '100px',
    margin: '10px 0 20px 0',
    alignSelf: 'flex-top'
};

const titleStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '10px',
    color: 'white',
};

// Infobox component
const InfoBox = ({ title, content, image }) => (
    <div style={infoBoxStyle}>
        <img src={image} alt="Logo" style={logoStyle}></img>
        <div style={titleStyle}>{title}</div>
        {content.split('\\').map((line, index) => (
            <div key={index}>{line}</div>
        ))}
    </div>
);

export default InfoBox;