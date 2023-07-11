import React from 'react';

function Footer(props) {
    const FooterListItems = props.Footer.map((footer, index) => {
        return (

            <p key={index}>
                { footer.name }
            </p>
        );
    });

    return (
        <footer>
            { FooterListItems }
        </footer>
    );
}

export default Footer;