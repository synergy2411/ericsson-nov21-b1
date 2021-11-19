import { connect } from "react-redux";
import * as fromActions from '../../store/actions/root-actions';
import './Counter.css';

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
          <button className="btn btn-info" onClick={() => props.onAddCounter(10)}>Add Counter</button>
          <button className="btn btn-danger" onClick={() => props.onSubtract(8)}>Subtract Counter</button>
        </div>
        <hr />
        <div className="row">
            <div className="col-4 offset-4">
                <button className="btn btn-success btn-block" 
                    onClick={() => props.onStoreResult(props.counter)}>Store Result</button>
            </div>
        </div>
        <div className="row">
            <div className="col-4 offset-4">
              <ul className="list-group">
                  {props.result.map((res, i) => (
                      <li onClick={() => props.onDeleteResult(i)} 
                        className="list-group-item my-item" key={i}>{res}</li>
                  ))}
              </ul>
            </div>
        </div>
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.ctr.counter,
    result : state.res.result
  };
};
const mapDispatchToProps = (dispatchToStore) => {
  return {
    onIncrement: () => dispatchToStore({ type: fromActions.INCREMENT }),
    onDecrement: () => dispatchToStore({ type : fromActions.DECREMENT }),
    onAddCounter: (value) => dispatchToStore(fromActions.onAddCounter(value)),
    onSubtract : value => dispatchToStore(fromActions.onSubtractCounter(value)),
    onStoreResult : (counter) => dispatchToStore(fromActions.onStoreResult(counter)),
    onDeleteResult : index => dispatchToStore(fromActions.onDeleteResult(index))
  };
};

const WrapperFn = connect(mapStateToProps, mapDispatchToProps);

export default WrapperFn(Counter);
