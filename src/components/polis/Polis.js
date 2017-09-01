import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import './Polis.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Polis extends Component {

  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
      this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
	    return <Modal show={this.state.showModal} onHide={this.close}>
                 <Modal.Header>
                   <Modal.Title>{this.props.title}</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                   {this.props.body}
                 </Modal.Body>
                 <Modal.Footer>
                   <Button onClick={this.close}>Close</Button>
                   <Button bsStyle="primary" onClick={this.close}>Save changes</Button>
                 </Modal.Footer>
               </Modal>;
	  }
	}

export default Polis;
