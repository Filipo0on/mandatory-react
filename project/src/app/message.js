/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default class Message extends React.Component {
    render(props) {
        return (
            <div>{this.props.state}</div>
        );
    }
}





/*
export default function Message(props){


  return (
    <div>Player 1</div>

  );
}
*/