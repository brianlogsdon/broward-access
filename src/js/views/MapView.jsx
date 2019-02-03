import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Navbar from "../components/navbar.jsx";
import MapContainer from "../components/mapContainer.jsx";

import  Map  from "../components/map.js";

export default class MapView extends React.Component {
    
    
    
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
                <div className="container">
                
                    
                    <div className= "my-1">
                        <MapContainer />
                    </div>
                
                </div>  
            </div>
        );
    }
}