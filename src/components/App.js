import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  AddNumber = () => {
    this.setState({ count: this.state.count + 1 });
  };
  DeleNumber = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header text-center">
                <h1 className="p-3">Class Component Practice</h1>
                <h1 className="p-5 text-danger">Counter: {this.state.count} </h1>
              </div>
              <div className="card-body text-center bg-primary">
                <button className="btn btn-success" onClick={this.AddNumber}>
                  Add + 1
                </button>
                <button
                  className="btn btn-danger m-5"
                  onClick={this.DeleNumber}
                >
                  Dele - 1
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
