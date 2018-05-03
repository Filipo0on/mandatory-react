import React from 'react';

import {makeMove, newGame} from '../logic';

import Message from './message';
import Tile from './tile';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

export default class App extends React.Component {
    constructor () {
        super()
        this.state = {
            turn: "player 1",
            board: [0,0,0,0,0,0,0,0,0],


        };
        this.changeTheStatus = this.changeTheStatus.bind(this);

    }

    changeTheStatus() {

        if(this.state.turn === "player 1") {
            this.setState({
                turn: "player 2"
            });
        }else {
            this.setState({
                turn: "player 1"
            });

        }
    }


  render(){
    return (
        <div className="container">
          <Message state={this.state.turn}/>
            <div className="board">

                  <Tile  turn={this.state.turn} fnChangeStatus={()=>this.changeTheStatus()}/>
                  <Tile  turn={this.state.turn} fnChangeStatus={()=>this.changeTheStatus()}/>
                  <Tile  turn={this.state.turn} fnChangeStatus={()=>this.changeTheStatus()}/>
                  <Tile  turn={this.state.turn} fnChangeStatus={()=>this.changeTheStatus()}/>
                  <Tile  turn={this.state.turn} fnChangeStatus={()=>this.changeTheStatus()}/>
                  <Tile  turn={this.state.turn} fnChangeStatus={()=>this.changeTheStatus()}/>
                  <Tile  turn={this.state.turn} fnChangeStatus={()=>this.changeTheStatus()}/>
                  <Tile  turn={this.state.turn} fnChangeStatus={()=>this.changeTheStatus()}/>
                  <Tile  turn={this.state.turn} fnChangeStatus={()=>this.changeTheStatus()}/>

            </div>
        </div>

    );
  }
}