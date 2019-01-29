import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Navbar from "../components/navbar.jsx";
import  MapContainer  from "../components/mapContainer.jsx";
import Carousel from "../components/carousel.jsx";
import ResourceList from "../components/resourceList.jsx";
import  hands  from "../../img/SharingHands.jpg";

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
                
                <div className="jumbotron jumbotron-fluid mx-auto">
                    <div className="container">
                        <div className="row">
                            <div className ="col-6">
                                <h1 className="display-4">Broward Access
                                ....</h1>
                                <p className="lead">use our new map sahdkjf lskanf l lkasjf lkjaf lkkklajslkdhkjbvxjbueb lkncklnsd jkln jiljalfkh.</p>   
                            </div>
                            <div className ="col-6">
                                <img className="d-block mh-100 w-100" src={hands} alt="First slide"></img>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="container"> 
                    <div className="row">
                        <div className="col-8 my-2">
                            <Carousel />
                        </div>
                        <div className="col-4 my-2">
                            <ResourceList />
                    
                        </div>
                    </div>
                </div>  
                <div className="row">
                    
                    <div className="col-5 my-2 mx-auto">
                        <div className="card m-auto" >
                            <img className="card-img-top" src="http://grainandmortar.com/wp-content/uploads/2015/01/be_nice_blog_02.png"width="100%" height="400" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Find Resources</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Custom map to help you find local resources</h6>
                                <p className="card-text">Follow the link below to view our interactive map of shelters, food pantries, and clothing drives. Create an account to save locations to your profile.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-6 my-auto mx-auto">
                        <MapContainer />
                    </div>
                </div>
                
                
            </div>
        );
    }
}