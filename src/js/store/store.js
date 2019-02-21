import jwt_decode from 'jwt-decode';

const getState = (scope) => {
    return {
        store: {
        //this is where your store data lives
        
				markers: [],
				
            loggedin:[],
            password:[],
            jwtTokens:[],
			styles:[{
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
    }]
        },
        actions: {
            //(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
            
            newUser:(userName,email,password,props)=>{
                
				
				let newUser={username:userName,first_name: "",
                last_name: "",email:email,password:password,profile:{saved_locations:[20]}};
                
				window.console.log(newUser);
				
				//update new user in the database 
				fetch('https://broward-access-api.herokuapp.com/api/users/', {
				method: 'post',
				headers: {"Content-type": 'application/json'},
				body: JSON.stringify(newUser)
				});
				props.history.push("/");
			},
			
			login:(username,password,props)=>{
                let user = {username: username,password: password};
                
                //atfer successful log in store logged in user info into store
                function update() {
                    let store = scope.state.store;
                    let decode=jwt_decode(store.jwtTokens.access);
                    //I THINK THIS NEEDS TO CHANGE storing the password and username because api is set up to require password to update the saved locations 
                    let password=user;
                    store.password=password;
                    window.console.log(store.password);
					fetch('https://broward-access-api.herokuapp.com/api/users/'+(decode.user_id)+'/')
					.then(response=>(response.json()))
					.then(data => {
						store.loggedin=data;
						
						window.console.log(store.loggedin);
						
						props.history.push("/");
						scope.setState({store});
						
							
					})
					.catch(error=> window.console.log('error'));
					}
                
                //log in user, get JWT , put tokens in store
                
				fetch('https://broward-access-api.herokuapp.com/api/token/', {
				method: 'post',
				headers: {"Content-type": 'application/json'},
				body: JSON.stringify(user)
				})
				
				.then(response=>(response.json()))
				.then(data => {
						
						let store = scope.state.store;
						store.jwtTokens=data;
						
						window.console.log(store.jwtTokens);
						
						props.history.push("/");
						
						scope.setState({store});
							
					})
				
				.then(update);
				
			},
			
			logout:()=>{
                let store = scope.state.store;
                store.loggedin=[];
                store.jwtTokens=[];
                scope.setState({store});
			},
			
            addLocation: (name,address,phone,info,lat,long,props) => {
				let store = scope.state.store;
				let newLocation={name:name,address:address,phone:phone,info:info,category:"user",icon:"https://img.icons8.com/color/35/000000/conference-call.png",lat:lat.toFixed(7),long:long.toFixed(7),creator:(store.loggedin.id)};
				let token =store.jwtTokens.access;
				//function to update the store after new location is added to database
				function update() {
					fetch('https://broward-access-api.herokuapp.com/api/contacts/')
					.then(response=>(response.json()))
					.then(data => {
						window.console.log(newLocation);
						let store = scope.state.store;
						store.markers=data;
						
						scope.setState({store});
							
					})
					.catch(error=> window.console.log('error'));
					}
					
				//post new location into store
				fetch('https://broward-access-api.herokuapp.com/api/contacts/', {
				method: 'post',
				withCredentials: true,
				
				headers: {"Authorization": "Bearer "+token,
				"Content-type": 'application/json'},
				body: JSON.stringify(newLocation)
				})
				.then(update);
				
				
				
			},
			
			
			saveLocation:(location,props)=>{
				//function to update the store after new location is saved to profile
				let store = scope.state.store;
				let savedLocation = location;
				store.loggedin.password=store.password.password;
				store.loggedin.profile.saved_locations.push(savedLocation);
				
				//props.history.push("/profile");
				fetch('https://broward-access-api.herokuapp.com/api/users/'+(store.loggedin.id)+'/', {
				method: 'put',
				headers: {"Content-type": 'application/json'},
				body: JSON.stringify(store.loggedin)
				});
				

			},
			
			
			
			
			updateElement:(index,name,email,phone,address,props)=>{
				
				
				let updatedContact={full_name:name,email:email,agenda_slug:"downtown_vi",address:address,phone:phone};
				
				
				//function to update the store after new contact is added to database
				function update() {
					fetch('https://ancient-reaches-29695.herokuapp.com/api/contacts/')
					.then(response=>(response.json()))
					.then(data => {
						window.console.log(updatedContact);
						let store = scope.state.store;
						store.contacts=data;
						props.history.push("/");
						scope.setState({store});
							
					})
					.catch(error=> window.console.log('error'));
					}
					
				//update contact in the database and then call update function
				fetch('https://ancient-reaches-29695.herokuapp.com/api/contacts/'+index, {
				method: 'post',
				headers: {"Content-type": 'application/json'},
				body: JSON.stringify(updatedContact)
				})
				.then(update);
				
			
				
			}
			
        }
    };
};

export default getState;

