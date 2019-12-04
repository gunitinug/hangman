import React from 'react';
import AvailableLetter from './AvailableLetter/AvailableLetter';

const letters = (props) => {
    const playHandler = (alphabet) => {
        const solution = props.solution.split('');
        console.log(solution);

        if (solution.indexOf(alphabet)<0)
        {
            console.log('incorrect');
            return false;
        }
        else
        {
            console.log('correct');
            return true;
        }
    }

    const availableLetters = [ ...props.feed ].map(
        (alphabet,i) => {
            return (
                <AvailableLetter play={()=>playHandler(alphabet)} correct={()=>props.correct(alphabet)} incorrect={()=>props.incorrect(alphabet)} solution={props.solution} key={i} alphabet={alphabet} />
            );
        }
    );

    return (
        <div>
            <h1>Game</h1>
            <p>Solution: {props.solution}</p>
            {availableLetters}
        </div>
    );
}

export default letters;