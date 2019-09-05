import React from 'react';
import QR from './QR';
import Vending from './Vending';
import Error from './Error';

class App extends React.Component {
  state = {
    ids: {},
    status: 'ready'
  }

  setStatus = status => this.setState({ status })

  handleData = (data) => {
    console.log('Got data:', data)

    const type = parseInt(data.split(',')[0])
    const number = parseInt(data.split(',')[1])

    if (this.state.ids[number]) {
      console.log('AREADY USED')

      this.setState({
        status: 'error',
        error: 'Item already used'
      })
    } else {
      this.state.ids[ number ] = true;

      this.setState({
        status: 'vending',
        type,
      })
      setTimeout(() => this.setStatus('ready'), 5000)
    }

  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>COFFEE VENDOR</h1>
          <h2>BTC Hackaton</h2>
        </div>

        {/*<button onClick={ ()=>this.handleData('expresso,10')}>SCANNED</button>*/}

        {
          this.state.status === 'ready' && <QR onData={ this.handleData }/>
        }

        {
          this.state.status === 'vending' && <Vending type={ this.state.type }/>
        }

        {
          this.state.status === 'error' && <Error onDone={ () => this.setStatus('ready') } error={ this.state.error } />
        }
      </div>
    );
  }
}

export default App;
