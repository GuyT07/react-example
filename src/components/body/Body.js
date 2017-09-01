import React, { Component } from 'react';
import {Grid, Row} from 'react-bootstrap';
import Product from './../product/Product.js';
import './Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Body extends Component {

  constructor(props){
    super(props);
  }

  render() {
	    return  <Grid fluid={true}>
	                <Row>
                     <Product ref={el => {this.prod = el;}} polisnummer="BPO1234556" kenteken="DF-ERT-8" />
                     <Product polisnummer="RT32098176" kenteken="VF-4TR-0" />
                    </Row>
                  </Grid>;
	  }
	}

export default Body;
