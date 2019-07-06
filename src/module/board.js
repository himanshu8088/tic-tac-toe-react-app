import React from 'react';
import '../index.css';
import Square from './square';

export default class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext:true
        };
    }

    render(){
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        
        return (
            <div>
                <div className="status">{status}</div>
                {this.getColumnsForRowNumber(0)}
                {this.getColumnsForRowNumber(1)}
                {this.getColumnsForRowNumber(2)}
            </div>
        );
    }

    getColumnsForRowNumber(row){
        return (
            <div className="board-row">
                {this.getRow(row)}
            </div>
        );
    }

    getRow(row){
        const items=[];
        for(var index=row; index < row+3; index++){
            items.push(this.renderSquare(row,index));
        }
        return items;
    }

    renderSquare(row, col) {
        const index = row*3+col-3-1;

        return (
          <Square
            value={this.state.squares[index]}
            onClick={() => this.handleClick(index)}
          />
        );
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
      }
}