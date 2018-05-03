/*
The Tile component expects to be passed
- piece: a valid board value:
  - 0: an empty square
  - 1: plr1 has a piece here
  - 2: plr2 has a piece here
- callback: a function that it'll call when clicked
- line: a boolean, true if tile was part of winning line (STRETCH TASK)

The tile should render with the classes...
- tile: always
- plr1: if has a plr1 piece
- plr2: if has a plr2 piece
- line: if it was part of a winning line (STRETCH TASK)
*/

import React from 'react';

export default class Tile extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            styling: ["tile"],
            occupied: false,
            symbol: ""
        };

        this.select = this.select.bind(this);
    }

    select() {

        if(this.state.occupied === false && this.props.turn === "player 1" ) {
            this.setState({
                styling: ["tileplr1"],
                occupied: true,
                symbol: "X"

            });

            this.props.fnChangeStatus()

        }else if(this.state.occupied === false) {

            this.setState({
                styling: ["tileplr2"],
                occupied: true,
                symbol: "O"

            });
            this.props.fnChangeStatus()
        }

    }

  render(props) {
  return (
      <div onClick={this.select} className={this.state.styling}>
          {this.state.symbol}
      </div>
  );
 }
}



/*
första funktionen som man fick med.

export default function Tile(props){
  return (
      <div className={this.props.styling}></div>
  );
}
*/