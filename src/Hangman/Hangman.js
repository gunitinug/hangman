import React from 'react';

const hangman = (props) => {
    // const picture = new Array(props.lives).map(
    //     (_,i) => ( <span>{i}</span> )
    // );

    const picture = [ ...Array(props.lives) ].map(
        (_,i) => ( <span key={i}>{++i}</span> )
    );

    return (
    <p>{picture}</p>
    );
}

export default hangman;