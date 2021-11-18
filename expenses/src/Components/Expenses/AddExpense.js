const AddExpense = (props) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
              <h5 className="text-center">Add New Expense</h5>
            <form>
                {/* Title */}
              <div className="form-group">
                <label htmlFor="title">Title :</label>
                <input type="text" name="title" className="form-control" />
              </div>
              {/* Amount */}
              <div className="form-group">
                <label htmlFor="amount">Amount :</label>
                <input type="number" name="amount" className="form-control" min="0.01" step="0.01"/>
              </div>
              {/* Date */}
              <div className="form-group">
                  <label htmlFor="createdAt">Date :</label>
                  <input type="date" name="caretedAt" min="2019-01-01" max="2021-12-31" className="form-control" />
              </div>
              {/* Buttons */}
              <div className="form-group">
                  <div className="row">
                      <div className="col-6">
                          <button className="btn btn-primary btn-block">Add Item</button>
                      </div>
                      <div className="col-6">
                          <button className="btn btn-warning btn-block">Reset</button>
                      </div>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
