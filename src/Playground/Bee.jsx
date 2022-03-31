import React from 'react';


function generateRandom(min = 0, max = 100) {
    // find diff
    let difference = max - min;
    // generate random number 
    let rand = Math.random();
    // multiply with difference 
    rand = Math.floor( rand * difference);
    // add with min value 
    rand = rand + min;
    return rand;
}

class Bee extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {X:generateRandom(1,window.innerWidth),Y:generateRandom(0,window.innerHeight),Height:generateRandom(100,250),Width:generateRandom(100,250)}
        // this.randomX = function(){
        //     console.table(this.state)
        //     this.setState({X :generateRandom(100,500)})
        // }
        this.randomX = this.randomX.bind(this)
    }
    static deploy(){
        console.warn("static")
    }
    get i(){
        return "hi"
    }
    componentDidUpdate() {

    }

    // randomMoveX(){
    //     this.setState({X :generateRandom(100,500)})
    // }
    // randomMoveY(){
    //     this.setState({Y :generateRandom(100,500)})
    // }
    // randomMove(){
    //     this.setState({X :generateRandom(100,500)})
    // }
    randomX(){
        console.table(this.state)
        this.setState({X :generateRandom(100,500)})
        this.setState({Y :generateRandom(100,500)})
    }
    componentDidMount(){
        let intervalId = setInterval(this.randomX, 2000)
        this.setState({ intervalId: intervalId })
      }

      componentWillUnmount(){
        clearInterval(this.state.intervalId)
      }
  // Defining the componentWillUnmount method
//   componentWillUnmount() {
//     alert('The component is going to be unmounted');
//   }
 
  render() {
    // return <image  className='Bee' href="https://media.giphy.com/media/hvecaaeGoBsvtOqqWJ/giphy.gif" height={this.state.Height} width={this.state.Width} x={this.state.X} y={this.state.Y} ></image>
    return <image  className='Bee' href="https://media.giphy.com/media/hvecaaeGoBsvtOqqWJ/giphy.gif" height={this.state.Height} width={this.state.Width} x={this.state.X} y={this.state.Y} ></image>
  }
}

export default Bee;