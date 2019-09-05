import React from 'react';
import './styles.css';

const COFFEE = [
  [ 6, 'americano', 'americano.png'],
  [ 8, 'cappucino', 'cappucino.png'],
  [ 10, 'machiato', 'machiato.png'],
  [ 5, 'espresso', 'espresso.png'],
]

const Selector = ({ onSelect }) => (
  <div className="payment">
    <div className="header">
      <h1>Select your coffee</h1>
    </div>

    <ul>
      {
        COFFEE.map(coffee =>
          <li key={coffee[1]}>
            <img onClick={ () => onSelect(coffee) } src={ coffee[2]} alt=""/>
          </li> )
      }
    </ul>

  </div>
);

export default Selector;
