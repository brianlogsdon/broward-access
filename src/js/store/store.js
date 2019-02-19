import jwt_decode from 'jwt-decode';

const getState = (scope) => {
    return {
        store: {
        //this is where your store data lives
        
				markers: [],
				
            loggedin:[],
            jwtTokens:[],
			styles:[
]
        },
        actions: {
            //(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
            
            newUser:(userName,email,password,props)=>{
                
				
				let newUser={username:userName,first_name: "",
                last_name: "",email:email,password:password,profile:{saved_locations:[1]}};
                
				window.console.log(newUser);
				
				//update new user in the database 
				fetch('https://broward-access-api.herokuapp.com/api/users/', {
				method: 'post',
				headers: {"Content-type": 'application/json'},
				body: JSON.stringify(newUser)
				});
			},
			
			login:(username,password,props)=>{
                let user = {username: username,password: password};
                
                //atfer successful log in store logged in user info into store
                function update() {
                    let store = scope.state.store;
                    let decode=jwt_decode(store.jwtTokens.access);
                    
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
				let newLocation={name:name,address:address,phone:phone,info:info,category:"user",icon:"https://img.icons8.com/ios/35/000000/so-so-filled.png",lat:lat.toFixed(7),long:long.toFixed(7),creator:(store.loggedin.id)};
				let token =store.jwtTokens.access;
				//function to update the store after new location is added to database
				function update() {
					fetch('https://broward-access-api.herokuapp.com/api/contacts/')
					.then(response=>(response.json()))
					.then(data => {
						window.console.log(newLocation);
						let store = scope.state.store;
						store.markers=data;
						props.history.push("/map");
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
				store.loggedin.profile.saved_locations.push(savedLocation);
				
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

