import { connect } from "react-redux";
import * as fromActions from '../../store/actions/root-actions';

const Counter = (props) => {
  return (
    <div>
      <p className="display-4 text-center">Counter : {props.counter} </p>
      <div className="text-center">
        <div className="btn-group">
          <button onClick={props.onIncrement} className="btn btn-primary">
            Increase
          </button>
          <button className="btn btn-warning" onClick={props.onDecrement}>Decrease</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: fromActions.INCREMENT }),
    onDecrement: () => dispatch({ type : fromActions.DECREMENT })
  };
};

const WrapperFn = connect(mapStateToProps, mapDispatchToProps);

export default WrapperFn(Counter);
