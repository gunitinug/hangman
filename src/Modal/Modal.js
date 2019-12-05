import React from 'react';

const modal = (props) => {
    return (
        <div>
            {props.gameOver()?<p>GAME OVER</p>:null}
            {props.solved?<p>YOU WIN!</p>:null}
        </div>
    );
};

export default modal;