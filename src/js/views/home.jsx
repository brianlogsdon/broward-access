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
                <div className="row container-fluid"> 
                    
                    <div className=" my-2 col-4">
                        <Carousel />
                    </div>
                    <div className=" my-2 col-4">
                        <ResourceList />
                    
                    </div>
                   
                </div> 
                
                
                <div className="row">
                    <div className="col-6">
                        <h1 className="display-3">Display 3</h1>
                    </div>
                    <div className="col-5 my-2 mx-auto">
                    
                        <img src="http://grainandmortar.com/wp-content/uploads/2015/01/be_nice_blog_02.png" className="img-fluid" alt="Responsive image"></img>
                       
                        
                    </div>
                    
                </div>
                
                
            </div>
        );
    }
}