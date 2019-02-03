import React from "react";
import { Context } from "../store/appContext.jsx";
import Map from "./map.js";
import  mapStyles  from "./mapStyle.js";



class MapContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        
            markers:[],
            markerVisible:true
        };
        
        
    }

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
                            /*    filterMarkers(category) {
                                for (let i = 0; i < this.state.markers.length; i++) {
                                let marker = this.state.markers[i];
                                // If is same category or category not picked
                                if (marker.category == category || category.length === 0) {
                                marker.setVisible(true);
                                }
                                // Categories don't match 
                                else {
                                    marker.setVisible(false);
                                }
                                }
}; */
    
	render() {
		return (
    <div className="row">
                        
        <Context.Consumer>
            
            {({ store }) => {
            
            
                                return(
                                    <div className=" container">
                                    
                                        <div className="row my-2">
                                            <button onClick={this.handleClick.bind(this, "all")} type="button" className=" btn btn-secondary col-2 mx-auto " >All</button>
                                            <button onClick={this.handleClick.bind(this, "shelter")} type="button" className="btn btn-secondary col-2 mx-auto">Shelters</button>
                                            <button onClick={this.handleClick.bind(this, "food")} type="button" className="btn btn-secondary col-2 mx-auto">Food </button>
                                            <button onClick={this.handleClick.bind(this, "clothes")} type="button" className="btn btn-secondary col-2 mx-auto">Clothing</button>
                                        </div>
                                    
                                    
                                    
                                        <Map
                                    id="myMap"
                                    options={{
                                    streetViewControl:false,
                                    zoomControl:false,
                                    mapTypeControl:false,
                                    center: { lat: 26.157,
                                    lng: -80.2 },
                                    visible:true,
                                   styles: [
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#FFBB00"
            },
            {
                "saturation": 43.400000000000006
            },
            {
                "lightness": 37.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00ff6a"
            },
            {
                "saturation": -1.0989010989011234
            },
            {
                "lightness": 11.200000000000017
            },
            {
                "gamma": 1
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#FFC200"
            },
            {
                "saturation": -61.8
            },
            {
                "lightness": 45.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 51.19999999999999
            },
            {
                "gamma": 1
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 52
            },
            {
                "gamma": 1
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#0078FF"
            },
            {
                "saturation": -13.200000000000003
            },
            {
                "lightness": 2.4000000000000057
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
],
                                    zoom: 11.6,
                                    minZoom:11.6
                                }}
                                
                                
                                onMapLoad={map => {
                                
                                
                                var marker,i;
                                var infowindow = new window.google.maps.InfoWindow();
                                map.markers = [];
                                window.console.log(this.state.markers);
                                
                                
                                
                                for (i = 0; i < store.markers.length; i++) {
                                
                                
                                
                                
                                marker = new window.google.maps.Marker({
                                position: { lat: (store.markers[i].lat), lng: (store.markers[i].long) },
                                map: map,
                                category:store.markers[i].category,
                                visible:(this.state.markerVisible),
                                info:store.markers[i].name,
                                icon:{url:(store.markers[i].icon)},
                                scaledSize: new window.google.maps.Size(30, 30),
                                title: 'Hello Istanbul!'
                                });
                                
                                this.state.markers.push(marker);
                                
                                window.google.maps.event.addListener(marker, 'click', (function (marker, i) {
                                return function () {
                                infowindow.setContent('<div id="info-bubble" style="padding:10px;border-radius:30px;max-width:260px;"><img src="' + store.markers[i].icon + '" style="display:block;margin-bottom:10px;max-width:100%;"><h6>' +store.markers[i].name+'<br />'+ store.markers[i].address +'<br />'+'Phone:'+store.markers[i].phone +'</h5><br /><span> <p>' +  store.markers[i].info +'</span></p>'  );
                                infowindow.open(map, marker);
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
      
                         
    </div>
                    
		);
	}
}

export default MapContainer;
