import React from 'react';

function About(props) {
    const AboutListItems = props.About.map((about, index) => {
        return (

            <p key={index}>
                { about.name }
            </p>
        );
    });

    return (
        <p>
            { AboutListItems }
        </p>
    );
}

export default About;