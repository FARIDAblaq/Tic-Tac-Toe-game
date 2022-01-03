import React, {Component, Components} from "react"

import Square from './Square'
import './index.css'

const calculateWinner = squares => {
    const lines = [
        //horizontal way to win
        [0,1,2],
        [3,4,5],
        [6,7,8],

        //vertical way to win
        [0,3,6],
        [1,4,7],
        [2,5,8],

        //diagonal
        [0,4,8],
        [2,4,6]
    ]

    for(let i=0; i<lines.length;i++){
        const [a,b,c]=lines[i]

        if(
            squares[a] && squares[a] === 
            squares[b] && squares[a] === squares[c]
        ) {
            return squares[a]
        }
        
    }return ''
}
class Board extends Component {
    state = {
        squares:['','','','','','','','',''],
        xIsNext: true
    }

    handleClick = number => () => {

        if(calculateWinner(this.state.squares) || this.state.squares[number]) 
        {
            //if the box is already filled with a number
            //don't change state
            return
        }

        const newSquares = [...this.state.squares]

        newSquares[number] =  this.state.xIsNext ? 'x' :'o'
        
        this.setState({ 
            squares: newSquares,
            xIsNext: !this.state.xIsNext
        })
    }

    handleReset = () => {
        this.setState({
            squares:['','','','','','','','',''],
            xIsNext: true
        })

    }
    render() {
        const { squares, xIsNext } = this.state 

        const winner = calculateWinner(this.state.squares)

        let status 

        if(winner){
            status = `Winner: ${winner}`
        }
        else{
            status = `Next step: ${xIsNext ? "x" : "o" }`
        }

        return (
            <div className="Board" >
                <h1>Next Step: {xIsNext ? 'x': 'o'}</h1>
                <div className="Row">
                <Square value = {squares[0]} onClick={this.handleClick(0)}/>
                <Square value = {squares[1]} onClick={this.handleClick(1)}/>
                <Square value = {squares[2]} onClick={this.handleClick(2)}/>
                </div>
                


                <div className="Row">
                <Square value = {squares[3]} onClick={this.handleClick(3)}/>
                <Square value = {squares[4]} onClick={this.handleClick(4)}/>
                <Square value = {squares[5]} onClick={this.handleClick(5)}/>
                

                </div>

                <div className="Row">
                <Square value = {squares[6]} onClick={this.handleClick(6)}/>
                <Square value = {squares[7]} onClick={this.handleClick(7)}/>
                <Square value = {squares[8]} onClick={this.handleClick(8)}/>
                </div>

                <button onClick={this.handleReset} className="Reset">Reset</button>

            </div>

            
        )
    }
}

export default Board 
