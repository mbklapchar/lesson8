import React from 'react';

function Title(props) {
    const TitleListItems = props.Title.map((title, index) => {
        return (

            <p key={index}>
                { title.name }
            </p>
        );
    });

    return (
        <h1>
            { TitleListItems }
        </h1>
    );
}

export default Title;