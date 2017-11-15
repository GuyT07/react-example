import React, { Component } from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/banner/Banner.js';
import Body from './components/body/Body.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
            <Banner
                title="Mijn verzekeringen - en boeie"
                sub="Hier kunt u uw verzekering inzien, wijzigen of een schade melden."
                btnText="Nieuwe verzekering aanvragen"
            />
            <Body />
       </div>
    );
  }
}

export default App;
