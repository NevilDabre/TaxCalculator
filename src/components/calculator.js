import React from "react";

const Calculator = () => {
  return (
    <div className="calculator-panel">
      <div className="panel">
        <h3 className="heading">Enter Your Details</h3>
        <div className="form">
          <form>
            <div className="form-block">
              <label className="label">Province: </label>
              <select className="input">
                <option>Alberta</option>
                <option>Ontario</option>
                <option>Ontario</option>
              </select>
            </div>
            <div className="form-block">
              <label className="label">Total Income: </label>
              <input className="input" type="text" />
            </div>
            <div className="form-block">
              <label className="label">Taxes Paid: </label>
              <input className="input" type="text" />
            </div>
            <div className="form-block">
              <label className="label">RRSP: </label>
              <input className="input" type="text" />
            </div>
            <div className="form-block">
              <button className="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
