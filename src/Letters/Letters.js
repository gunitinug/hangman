import React from 'react';
import AvailableLetter from './AvailableLetter/AvailableLetter';
import classes from './Letters.module.css';

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
                <AvailableLetter setSolved={props.setSolved} play={()=>playHandler(alphabet)} correct={()=>props.correct(alphabet)} incorrect={()=>props.incorrect(alphabet)} solution={props.solution} key={i} alphabet={alphabet} />
            );
        }
    );

    

    return (    
        <div className={classes.Letters}>
            <p>Solution: {props.solution}</p>
            <div className={classes.AvailableLetters}>
                {availableLetters}
            </div>
        </div>
    );
}

export default letters;