import React from "react";
import { Context } from "../store/appContext.jsx";
import Map from "./map.js";
import  MapModal from "./mapModal.jsx";
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';


class MapContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        
            markers:[],
            showModal:false,
            lat:0,
            long:0
            
        };
      
        
    }
//handles the selection of what category of markers the user wants to see
handleClick(category) {
    for (let i = 0; i < this.state.markers.length; i++) {
                                let marker = this.state.markers[i];
                                // If is same category or category not picked
                                if (category =="all"){
                                    marker.setVisible(true);
                                }
                                else if (marker.category == category ) {
                                marker.setVisible(true);
                                }
                                // Categories don't match 
                                else {
                                    marker.setVisible(false);
                                }
                                }
  }
  

              
    
	render() {
		return (
    <div className="row">
                        
        <Context.Consumer>
            
            
            
            {({ actions,store }) => {
            
            
                                return(
                                
                                    <div className=" container">
                                        
                                        <div className="row my-2">
                                            <button onClick={this.handleClick.bind(this, "all")} type="button" className=" btn btn-secondary col-2 mx-auto " >All</button>
                                            <button onClick={this.handleClick.bind(this, "shelter")} type="button" className="btn btn-secondary col-2 mx-auto"><img src="https://img.icons8.com/color/30/000000/sleeping-in-bed.png"></img>Shelters</button>
                                            <button onClick={this.handleClick.bind(this, "food")} type="button" className="btn btn-secondary col-2 mx-auto"><img src="https://img.icons8.com/color/30/000000/ingredients.png"></img> Food </button>
                                            <button onClick={this.handleClick.bind(this, "clothes")} type="button" className="btn btn-secondary col-2 mx-auto"> <img src="https://img.icons8.com/color/30/000000/t-shirt.png"></img> Clothing</button>
                                        </div>
                                
                                        <Map
                                    id="myMap"
                                    options={{
                                    streetViewControl:false,
                                    zoomControl:false,
                                    disableDoubleClickZoom: true,
                                    mapTypeControl:false,
                                    center: { lat: 26.157,
                                    lng: -80.2 },
                                    visible:true,
                                   styles: store.styles,
                                    zoom: 11.9,
                                    minZoom:11
                                }}
                                
                                
                                onMapLoad={map => {
                                var mouseIsDown=false;
                                
                                //listener for click hold down to add a new marker
                                map.addListener('mouseup', function() {
                                mouseIsDown = false;
                                });
                                
                                
                                
                                map.addListener('mousedown', function(e) {
                                
                                
                                mouseIsDown = true;
                                
                                //after mouse held down for 4 sec call modal for new location info
                                setTimeout(function() {
                                    if(mouseIsDown){
                                        placeMarker(e.latLng,map);
                                    }
                                }, 4000);
                                
                                
                                });
                                //open the new location modal and set the lat and long of click state
                                var placeMarker =(location,map)=>{
                                    this.setState({showModal:true,lat:location.lat(), lng:location.lng()});
                                    
                                };
                                
                               
                                //
                                var marker,i;
                                var infowindow = new window.google.maps.InfoWindow();
                                map.markers = [];
                                
                                
                                
                                //loop through locations in the store and place markers
                                for (i = 0; i < store.markers.length; i++) {
                               
                             let myFunction=(name)=>{
                                                alert(name);
                                            };
                               
                                //create markers
                                    marker = new window.google.maps.Marker({
                                    position: { lat: (store.markers[i].lat), lng: (store.markers[i].long) },
                                    map: map,
                                    category:store.markers[i].category,
                                    icon:{url:(store.markers[i].icon)},
                                    scaledSize: new window.google.maps.Size(30, 30),
                                    title: store.markers[i].name
                                    });
                                
                                
                                
                                //push new marker to array in state(for setting visible/not visible in filtering buttons)
                                    this.state.markers.push(marker);
                                
                                
                                //add  click listener to pop up info window
                                    window.google.maps.event.addListener(marker, 'click', (function (marker, i) {
                                
                                        return function () {
                                        
                                            
                                            infowindow.open(map, marker);
                                            infowindow.setContent('<div id="info-bubble" style="padding:10px;border-radius:30px;max-width:260px;"><img src="' +
                                            store.markers[i].icon + '" style="display:block;margin-bottom:10px;max-width:100%;"><h6>' +
                                            store.markers[i].name+'<br />'+ store.markers[i].address +'<br />'+'Phone:'+store.markers[i].phone +
                                            '</h5><br /><hr /><span> <p>' +  store.markers[i].info +
                                            '</span></p><br />'+
                                            '<button id="button" value='+store.markers[i].phone+'>Save to My Profile</button>'  );
                                            
                                            
                                            
                                             //add listener to button in info window to save location 
                                           window.google.maps.event.addDomListenerOnce(infowindow, 'domready', function() {
                                                var but =document.getElementById("button");
                                                but.addEventListener("click", 
                                                    function(){
                                                        actions.saveLocation(store.markers[i].name);
                                                        
                                                        //window.location.reload();
                                                    });
                                                    
                                            });

                                        };
                                        
                                        })(marker, i));
                                        

                                 
                                }
                                
                                }
                                
                            }
                            >
                                           
                            
                                        </Map>
                                    </div>
                            );
                            }}</Context.Consumer>
                            
                            
                            
        <div>
            <MapModal lat= {this.state.lat} lng={this.state.lng} show={this.state.showModal} onClose={() => this.setState({showModal: false})} /> 
        </div>
    </div>
                    
		);
	}
}


MapContainer.propTypes = {
    history: PropTypes.object
    
};
export default withRouter(MapContainer);
