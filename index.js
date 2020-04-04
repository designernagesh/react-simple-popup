import React, { Component } from 'react';
import { render } from 'react-dom';
import PopUp from './PopUp';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Hello React PopUp!',
      showPopup: false,
      btnText: 'Show PopUp'
    };
  }

  togglePopup = () => {    
    this.setState({
      showPopup: !this.state.showPopup
    })
  }
 
  render() {
    return (
      <div>
        <h1>
          React OnClick Show PopUp!
        </h1>

        <button onClick={this.togglePopup}> { this.state.showPopup ? 'Hide PopUp' : 'Show PopUp' } </button>
        {
          this.state.showPopup ?          
          <PopUp title={this.state.title} closePopup={this.togglePopup} />
          :
          null
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
