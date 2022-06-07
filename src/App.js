import React from 'react';
import './App.css';
import Counter from './Components/Counter';

class App extends React.Component{
    constructor(){
      super()
      this.state={
        show : false,
        lolo : 'Hello Olfa'
      }
    }
    // state={
    //       show : false,
    //       lolo : 'Hello Olfa'
    //     }
        
    handleShow=()=> this.setState({show : !this.state.show})
    render(){
      console.log(this)
      return(
        <div>
          <h1>WS State</h1>
          <button onClick={this.handleShow}>{this.state.show ? 'Hide' : 'Show'}</button>
          {
            this.state.show &&  <Counter lolo={this.state.lolo}/>
          }
         
        </div>
      )
    }
}

export default App