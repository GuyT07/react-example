import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

class Footer extends Component {
  render() {
	    return  <Row>
                     <h2 className="col-xs-12">Nieuwe verzekering nodig?</h2>
                     <h3 className="col-xs-12">Bpo Direct biedt u een compleet verzekeringspakket aan met scherpe premies en ruime
                       dekkingen. Zorg dat u niet voor onverwachte financiële schadeposten komt te staan!</h3>
                     <button className="btn btn-info produkt-shower"><span>+</span>Nieuwe verzekering aanvragen</button>
                     <div className="insurance-list">
                       <div className="block col-sm-6 col-lg-4 col-xs-12">
                         <div className="card insurance">
                           <div className="card-block">
                             <h3>Auto</h3>
                             <p className="category">Onderweg</p>
                             <div className="center"><span className="icon icon-hundred"><span className="icon-auto"></span> <span className="overlay"></span></span>
                             </div>
                             <div className="center">
                               <form action="/dev-frontend/verzekeringaanvragen.html" method="post"><input type="hidden" name="" />
                                 <input type="hidden" name="produkturl" value="avonline/GetFormulierByShortLinkAction.do?shortLink=eb8ba6cf-b773-461f-a5de-e66251102c9e" />
                                 <button type="submit" className="btn btn-primary btn-lg">Aanvragen</button>
                               </form>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </Row>;
	  }
	}

export default Footer;
