const getState = (scope) => {
    return {
        store: {
        //this is where your store data lives
        
				markers: [
				{
					name: "ALL SAINTS CATHOLIC MISSION",
					address:"3350 Powerline Road Oakland Park, FL 33309",
					phone:"954.396.3086",
					info:'Soup Kitchen Daily, 4:00 pm – 5:00 pm',
					category: "food",
					icon:"https://img.icons8.com/color/48/000000/ingredients.png",
					lat: 26.169366,
					long: -80.154300
				},
				{
					name: "SALVATION ARMY - PLYMOUTH COLONY HOLLYWOOD",
					address:"1958 Sherman Street Hollywood, FL 33320",
					phone:"(954) 524-6991",
					info:'Hours of operation: Monday through Friday 11am to 6:30pm Fees charged: Self-Pay, Full: HUD 30% of income or $300 which ever is less Intake procedure: Photo ID, proof of Income, birth certificates, Social Security cards and info on progress from previous shelter required Eligibility requirements: Must be a homeless working family (have a child under age 18) and referred by another agency or in Salvation Army shelter',
					category: "shelter",
					icon:"https://img.icons8.com/color/48/000000/sleeping-in-bed.png",
					lat: 26.032642,
					long: -80.147243
				},
				{
					name: "AKAdemic Foundation, Inc.",
					address:"1630 NW 26 Terrace Fort Lauderdale, Florida, 33311",
					phone:"(954) 730-7592",
					info:'Provides scholarships to at-risk youth and families. Also holds clothing drives for clients in need of basic assistance, including school items such as notebooks, uniforms, and similar needs. All supplies are free.',
					category: "clothes",
					icon:"https://img.icons8.com/color/48/000000/t-shirt.png",
					lat: 26.2,
					long: -80.12
				},
				{
					name: "TRADITIONS HOUSE",
					address:"260 SW 20th Ave Fort Lauderdale, FL 33312",
					phone:"954-271-0123",
					info:'We are a mens sober living facility located near downtown Ft. Lauderdale.Rent is $150 a week.We provide a structured and safe living environment.Drug Testing. Curfew. 24hr Staff. Close to bus terminal. In house meetings. Free washer and dryer. Rent is $150 a week with a $150 deposit. Fully Furnished Wifi and Cable',
					category: "shelter",
					icon:"https://img.icons8.com/color/48/000000/sleeping-in-bed.png",
					lat: 26.17,
					long: -80.3
				}
			]
        },
        actions: {
            //(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
            
            
            addContact: (name,email,phone,address,props) => {
				//new contact info from add contact form
				let newContact={full_name:name,email:email,agenda_slug:"downtown_vi",address:address,phone:phone};
				
				//function to update the store after new contact is added to database
				function update() {
					fetch('https://ancient-reaches-29695.herokuapp.com/api/contacts/')
					.then(response=>(response.json()))
					.then(data => {
						window.console.log(data);
						let store = scope.state.store;
						store.contacts=data;
						props.history.push("/");
						scope.setState({store});
							
					})
					.catch(error=> window.console.log('error'));
					}
				//put new contact into the database and then call update function
				fetch('https://ancient-reaches-29695.herokuapp.com/api/contacts/', {
				method: "post",
				headers: {"Content-type": 'application/json'},
				body: JSON.stringify(newContact)
				})
				.then(update);
				
           
			},
			
			
			deleteElement:(index,props)=>{
				//function to update the store after new contact is added to database
				function update() {
					fetch('https://ancient-reaches-29695.herokuapp.com/api/contacts/')
					.then(response=>(response.json()))
					.then(data => {
						window.console.log(data);
						let store = scope.state.store;
						store.contacts=data;
						props.history.push("/");
						scope.setState({store});
							
					})
					.catch(error=> window.console.log('error'));
					}
					
				fetch('https://ancient-reaches-29695.herokuapp.com/api/contacts/'+index, {method:'DELETE'})
				.then(update);
				
				
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

