import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { incNumber, decNumber } from './actions'; 

const App = ({ count, incNumber, decNumber }) => {
  return (
    <div className="container">
      <h3>Increment/Decrement counter</h3>
      <div className="quantity">
        <button className="quantity_button quantity_minus" title="decrement" onClick={decNumber}>
          <span>-</span>
        </button>
        <input name="quantity" type="text" className="quantity_input" value={count} readOnly />
        <button className="quantity_button quantity_plus" title="Increment" onClick={incNumber}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.changeTheNumber,
});

export default connect(mapStateToProps, { incNumber, decNumber })(App);
