import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count : 0,
            textT : ''
        }   
        console.log('1 Intialization')
    }
    increment=(a)=> this.setState({count : this.state.count + a})
    decrement=()=> this.setState({count : this.state.count > 0 ?  this.state.count -1 : 0})
    componentDidMount(){
        console.log('3 Mount')
        document.title = "HI"
    }
    componentDidUpdate(){
        console.log('4 Update')
        document.title = this.state.count
    }
    componentWillUnmount(){
        console.log('5 Unmount')
        document.title = "BYE BYE"
    }
    render(){
      console.log('2 Render')
        return(
            <div>
                <h2>Counter Component</h2>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={()=>this.increment(5)}>+</button>
                <br/>
                <input type='text' onChange={(e)=> this.setState({textT : e.target.value})}/>
                <h3>{this.state.textT}</h3>
                <h4>{this.props.lolo}</h4>
            </div>
        )
    }
}

export default Counter