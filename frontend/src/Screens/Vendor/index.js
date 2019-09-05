import React, { Component } from 'react';
import './styles.css';
import PaymentInfo from './PaymentInfo';
import Working from './Working';
import Error from './Error';

const db = {};

export default class extends Component {
  state = {
    status: 'ready'
  }

  handleData = (data) => {
    const name = data.split(',')[0]
    const id = parseInt(data.split(',')[0])

    if (db[id]) {
      this.setState({
        status: 'error',
        error: 'Invoice already used'
      })
    } else {
      db[id] = true;
      this.setState({ status: 'active', name })
    }
  }

  render() {
    const { status, name, error } = this.state;

    return (
      <div className={ `Vendor ${ status === 'error' && 'error' } ${ status === 'active' && 'active' } ` }>
        <header className="Vendor-header">
          <h1>BTC Coffee Machine</h1>
        </header>

        {
          status === 'ready' && <PaymentInfo onData={ this.handleData } />
        }

        {
          status === 'active' && <Working name={ name } onDone={ () => this.setState({ status: 'ready' }) } />
        }

        {
          status === 'error' && <Error error={ error } onDone={ () => this.setState({ status: 'ready' }) } />
        }

        {
          status === 'ready' && <a className='micro' onClick={ () => this.handleData('Cappuchino,1231')}>scan</a>
        }

      </div>
    );
  }
}

