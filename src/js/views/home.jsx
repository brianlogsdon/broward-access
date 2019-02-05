import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Navbar from "../components/navbar.jsx";
import  MapContainer  from "../components/mapContainer.jsx";
import Carousel from "../components/carousel.jsx";
import ResourceList from "../components/resourceList.jsx";
import  hands  from "../../img/SharingHands.jpg";
import  mapImg  from "../../img/map.png";

export default class Home extends React.Component {
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
                
                <div className="jumbotron jumbotron-fluid m-0">
                    <div className="container">
                        <div className="row">
                            <div className ="col-6">
                                <h1 className="display-4">The Resources You Need, On One Site</h1>
                                <p className="lead">The mission of Broward Access is to provide all citizens of Broward County who are struggling with low income or homelessness, an accessible and easy way to find the help they need. </p>   
                            </div>
                            <div className ="col-6">
                                <img className="d-block mh-100 w-100" src={hands} alt="First slide"></img>
                            </div>
                        </div>
                    </div>  
                </div>
                
                <div className="container my-2">
                    <Carousel />
                </div>
                <hr />
                
                <div className="row home-map container-fluid m-0">
                    <div className="col-6 ">
                        <h1 className="display-3 map-header">Interactive Map</h1>
                        <p className="display-6 map-header">Use our interactive map to view all of the availible resources in Broward County. Create a profile to save and add resource locations from the map. </p>
                        <ul className="map-header">
                            <li>Click Log-in in the top right corner of the site to log-in or create an account</li>
                            <li>Go to our Interactive map by clicking the map to the right or following the link in the navagation bar </li>
                            <li>Search the map for useful resources, and save your favorites to your profile for future use</li>
                            <li>If you know of anymore resources and want to help spread the word, add it to the map!</li>
                        </ul>
                    </div>
                    <div className="col-5 my-2 mx-auto">
                    
                        <img src={mapImg} className="img-fluid" alt="Responsive image"></img>
                       
                        
                    </div>
                    
                </div>
                
                
                
                
                
                
            </div>
        );
    }
}