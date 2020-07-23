import React, { Component } from 'react';
import Player from './choosePlayer';

class Status extends Component {
    handleSetPlayer(e) {
        console.log(e)
        this.props.setPlayer(e)
    }

    printName(data) {
        if (data.player == data.player1Value) {
            return data.player1;
        } else {
            return data.player2
        }
    }

    printWinnerName(data) {
        if (data.winner == data.player1Value) {
            return data.player1;
        } else {
            return data.player2
        }
    }

    renderHtml() {
        if (this.props.winner) {
            return (<h2>Winner is {this.printWinnerName(this.props.player)}</h2>)
        } else {
            return this.props.player.player ?
                <h2>Next player is {this.printName(this.props.player)}({this.props.player.player})</h2> :
                <Player player={(e) => this.handleSetPlayer(e)} />
        }
    }
    render() {
        return (<span>{this.renderHtml()}</span>)
    }
}

export default Status;