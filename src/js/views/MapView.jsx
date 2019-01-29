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
                
                    <div className="row my-2">
                        <button type="button" className="btn btn-secondary col-3 mx-auto">Shelters</button>
                        <button type="button" className="btn btn-secondary col-3 mx-auto">Food Pantries</button>
                        <button type="button" className="btn btn-secondary col-3 mx-auto">Clothing</button>
                    </div>
                    <div className= "my-1">
                        <MapContainer />
                    </div>
                
                </div>  
            </div>
        );
    }
}