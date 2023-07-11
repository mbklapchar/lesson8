import React from 'react';

function Skills(props) {
    const SkillsListItems = props.Skills.map((skill, index) => {
        return (
            <li key={index}>
                { skill.name }
            </li>
        );
    });


    return (
        <ul>
            { SkillsListItems }
        </ul>
    );
}

export default Skills;