import React, {Component} from 'react';
import Hangman from '../Hangman/Hangman';
import Letters from '../Letters/Letters';


class Game extends Component
{
    state = {
        lives: 9,
        solution: 'apple',
        correctUsedLetters: [],
        availableLetters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        usedLetters: []
    };

    guessedCorrectHandler = (letter) => {
        const index = this.state.availableLetters.indexOf(letter);
        let newAvailableLetters = [...this.state.availableLetters];
        newAvailableLetters.splice(index,1);

        let newCorrectUsedLetters = [...this.state.correctUsedLetters];
        newCorrectUsedLetters.push(letter);

        this.setState({
            availableLetters: newAvailableLetters,
            correctUsedLetters: newCorrectUsedLetters
        })
    };

    guessedIncorrectHandler = (letter) => {
        const index = this.state.availableLetters.indexOf(letter);
        let newAvailableLetters = [...this.state.availableLetters];
        newAvailableLetters.splice(index,1);

        let newUsedLetters = [...this.state.usedLetters];
        newUsedLetters.push(letter);

        const oldValueLives = this.state.lives;
        const newValueLives = oldValueLives - 1;

        // console.log('[newValueLives] ',newValueLives); return true;

        this.setState({
            usedLetters: newUsedLetters,
            availableLetters: newAvailableLetters,
            lives: newValueLives < 0 ? 0 : newValueLives
        });
    };

    render ()
    {
        return (
            <div>
                <p>hangman, game, available letters, used letters, modal</p>
                <p>Available letters: {this.state.availableLetters.join(', ')}</p>
                <p>Correct letters: {this.state.correctUsedLetters}</p>
                <p>Incorrect letters: {this.state.usedLetters   }</p>
                <p>Lives: {this.state.lives}</p>
                
                <Hangman lives={this.state.lives} />
                <Letters solution={this.state.solution} correct={this.guessedCorrectHandler} incorrect={this.guessedIncorrectHandler} 
                    feed={this.state.availableLetters}
                />
            </div>
        );
    }
}

export default Game;