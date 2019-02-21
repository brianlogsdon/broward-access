import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Navbar from "../components/navbar.jsx";
import Carousel from "../components/carousel.jsx";
import  hands  from "../../img/SharingHands.jpg";
import  mapImg  from "../../img/map.png";
import browResourceGuide from "../../img/BrowardHomelessGuide.png";
import browResourceGuide2 from "../../img/BrowardHomeless4.png";
import resourceImg from "../../img/resources.png";
import Card from "../components/card.jsx";


export default class Resource extends React.Component {
    constructor(){
        super();
        this.state = {
           
        };
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                
                <div className="container my-2">
                    <div className="card">
                        <div className="card-header">
                        External Resources
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Homeless Helpline</h5>
                            <p className="card-text">Anyone seeking Broward County Homeless information / referral or a homeless individual / family in Broward County. 
The Homeless Helpline provides a single point of entry into the homeless continuum of care. Homeless individuals and families call in to complete in-take assessment and are referred to an available shelter space. 
(954) 563-4357 - Homeless Helpline
(954) 537-0211 - Helpline
(888) 537-0211 - Toll Free </p>
                           
                        </div>
                    </div>
                </div>
                
                <div className ="container my-2">
                    <img src={browResourceGuide} className="img-fluid" alt="Responsive image"></img>
                </div>
                <hr />
                <div className ="container my-2">
                    <img src={browResourceGuide2} className="img-fluid" alt="Responsive image"></img>
                </div>
                <hr />
               
                
                
                
                
               
            </div>
        );
    }
}