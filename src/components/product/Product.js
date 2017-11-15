import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import Polis from './../polis/Polis.js';
import './Product.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Product extends Component {

  constructor(props) {
    super(props);
    this.showPopup = this.showPopup.bind(this);
  }

  showPopup() {
    this.refs.polisPopup.open();
  }

  render() {
	    return <Col xs={6}>
	             <div className="card insurance wide">
                   <div className="card-header">
                     <h3>Auto</h3>
                     <p className="category">Mijn polisnummer: {this.props.polisnummer}</p>
                   </div>
                   <div className="card-block">
                     <ul>
                       <li><label>Omschrijving</label> <span>Omschrijving auto</span></li>
                       <li><label>Kenteken</label> <span>{this.props.kenteken}</span></li>
                     </ul>
                     <button type="submit" onClick={this.showPopup} className="btn btn-primary btn-arrow">
                       <Polis ref="polisPopup" title={"Polis for " + this.props.kenteken} body="This polis is sooooo great" />Naar mijn polis
                     </button>
                   </div>
                 </div>
               </Col>;
	  }
	}

export default Product;
