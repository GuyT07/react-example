import React, { Component } from 'react';
import ReactDom, { ReactDOM } from 'react-dom';
import {Grid, Row} from 'react-bootstrap';
import Product from './../product/Product.js';
import './Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Body extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount = () => {
    ReactDom.findDOMNode(this.prod).scrollIntoView();
  }

  render() {
	    return  <Grid fluid={true}>
	                <Row>
	                 <div style={{height: 800+"px"}}></div>
                     <Product ref={el => {this.prod = el;}} polisnummer="BPO1234556" kenteken="DF-ERT-8" />
                     <Product polisnummer="RT32098176" kenteken="VF-4TR-0" />
                    </Row>
                  </Grid>;
	  }
	}

export default Body;
