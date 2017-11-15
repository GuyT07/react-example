import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
  render() {
	    return <div className="banner small">
	    <div className="heading">
	    <div className="container-fluid">
	      <h1>{this.props.title}</h1>
	      <p>{this.props.sub}</p>
	      <button href="#nieuweverzekering" type="button" className="btn btn-info produkt-shower">
	      	<span>+</span>{this.props.btnText}
	      </button>
	    </div>
	  </div>
	</div>;
	  }
	}

export default Banner;
