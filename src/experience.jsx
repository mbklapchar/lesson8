import React from 'react';

function Experience(props) {
    const ExperienceListItems = props.Experience.map((experience, index) => {
        return (
            <li key={index}>
                { experience.name }
            </li>
        );
    });

    return (
        <ul>
            { ExperienceListItems }
        </ul>
    );
}

export default Experience;