import React from 'react';

class ClassBasedComp extends React.Component {

    constructor(props){
        super(props)
        console.log("constructor");
        this.state = {
            counter : 0
        }
    }

    componentDidMount(){console.log("componentDidMount")}
    componentDidUpdate(){console.log("componentDidUpdate")}
    componentWillUnmount(){console.log("componentWillUnmount")}

    onIncreaseCounter = () => {
        // this.state.counter += 1;
        this.setState({
            counter : this.state.counter + 1
        })
    }

    render(){
        console.log("render")
        return (
            <div>
                <p>Class based component created</p>
                <p>Counter : {this.state.counter} </p>
                <button onClick={this.onIncreaseCounter}>Increase Counter</button>
            </div>
        )
    }

}

export default ClassBasedComp;