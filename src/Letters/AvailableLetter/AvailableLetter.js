import React, {useState, useEffect} from 'react';
import classes from './AvailableLetter.module.css';

const AvailableLetter = (props) => {
    const [show,setShow]=useState(true);
    // const [clicked, setClicked]=useState(false);
    // const [outcome,setOutcome]=useState(false);

    // if (show)
    // {
    //     setClicked(true);
    // }
    
    // const play = (alphabet) => {
    //     const solution = props.solution.split('');
    //     if (solution.indexOf(alphabet)<0)
    //     {
    //         return false;
    //     }
    //     else
    //     {
    //         return true;
    //     }
    // }

    const setStuff = () => {
        setShow(true);
        props.setSolved();
    };
    useEffect( ()=>setStuff(),[show] );

    // useEffect( ()=>setShow(true),[show] );
    // useEffect( ()=>props.setSolved(),[show] );

    if (!show)
    {
        if (props.play())
        {
            props.correct();
            // alert('correct');
        }
        else
        {
            props.incorrect();
            // alert('wrong');
        }
    }

    const letter = show ? <span onClick={()=>setShow(false)} className={classes.AvailableLetter}>{props.alphabet}</span> : null;

    return (
        <span>
            {letter}
        </span>
    );
}

export default AvailableLetter;