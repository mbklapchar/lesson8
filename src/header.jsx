import React from 'react';

function Header(props) {
    const HeaderListItems = props.Header.map((header, index) => {
        return (

            <p key={index}>
                { header.name }
            </p>
        );
    });

    return (
        <header>
            { HeaderListItems }
        </header>
    );
}

export default Header;