import { connect } from 'react-redux';

const Counter = props =>{
    return (
        <div>
            <p className="display-4 text-center">Counter : {props.counter} </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter : state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement : () => console.log("On Increment")
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);