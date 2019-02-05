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
				},
				{
					name: "Helping Hands Transition and Recovery",
					address:"1301 NW 3rd Ave Fort Lauderdale, FL 33311",
					phone:"(954) 533-6544",
					info:'Faith based transitional recovery program. Call during office hours: Mondays through Fridays 9am - 5pm.We are the halfway house for Men who are committed to turning their lives around with the help of God.',
					category: "shelter",
					icon:"https://img.icons8.com/color/48/000000/sleeping-in-bed.png",
					lat: 26.142239,
					long: -80.147335
				},
				{
					name: "PRIMARY PURPOSE",
					address:"2458 SW 42 ave Fort Lauderdale, FL 33317",
					phone:"954-815-4967",
					info:'Primary purpose is an adult sober living facility with a program in place. Clients are required to maintain a stance and work a program of recovery. Clients are also required to attend twelve step meetings daily. We have a program allowance cap that allows client to enter program regardless of their financial status. Clients reside in comfortable uncrowded living conditions.',
					category: "shelter",
					icon:"https://img.icons8.com/color/48/000000/sleeping-in-bed.png",
					lat: 26.0921215,
					long: -80.14384
				},
				{
					name: "4KIDS OF SOUTH FLORIDA INC FT LAUDERDALE",
					address:"2401 W Cypress Creek Rd Fort Lauderdale, FL 33309",
					phone:"(954)977-9673",
					info:'This is a Non Profit Organization that may be able to provide housing assistance. Review the details below:To Exist To Serve At-Risk Children And Families In Collaboration With Local And Legal Authorities By Mobilizing And Equipping The Faith Community To Rescue, Protect, And Nurture Children In The Foster Care System.',
					category: "shelter",
					icon:"https://img.icons8.com/color/48/000000/sleeping-in-bed.png",
					lat: 26.2024778,
					long: -80.1876438
				},
				{
					name: "THE LIPPMAN FAMILY CENTER",
					address:"221 NW 43rd Court Oakland Park, FL 33309",
					phone:"954-568-2801",
					info:'Provies a short term crisis and runaway shelter for abused, troubled and homeless adolescents (12-17 years). 24-hour intake.',
					category: "shelter",
					icon:"https://img.icons8.com/color/48/000000/sleeping-in-bed.png",
					lat: 26.1802778,
					long: -80.1486487
				},
				{
					name: "EASE FOUNDATION DAVIE",
					address:"6901 Orange Dr Davie, FL 33317",
					phone:"(954)-797-1077",
					info:'Our objective is to help those in need to ease their way back into a self-sustaining, productive life. Our focus is to prevent homelessness, but we also reach out to the homeless with food, clothing and hygiene supplies. The EASE Foundation is both local and grass roots oriented. It is a neighbor helping neighbor organization.',
					category: "shelter",
					icon:"https://img.icons8.com/color/48/000000/sleeping-in-bed.png",
					lat: 26.0656693,
					long: -80.2387516
				},
				{
					name: "BROWARD COUNTY HOMELESS SERVICES",
					address:"115 S. Andrews Ave., Room A-370 Fort Lauderdale, FL 33301",
					phone:"954-357-6101",
					info:'The Homeless Services Section has several programs designed to assist formerly homeless individuals and families with permanent housing.  We offer limited housing subsidies and case management to support the client\'s transition.  Referrals come to us through 563-HELP and the transitional shelters located throughout the County.',
					category: "shelter",
					icon:"https://img.icons8.com/color/48/000000/sleeping-in-bed.png",
					lat: 26.119572,
					long: -80.1437318
				},
				{
					name: "MIAMI RESCUE MISSION - BROWARD OUTREACH CENTER HOLLYWOOD",
					address:"2056 Scott Street Hollywood, FL 33022",
					phone:"954-926-7417",
					info:'This full-service, 90-bed emergency shelter. Clients are taught life skills, which help them to develop goals for going back into the community as productive citizens. For more information contact Broward Outreach Center Hollywood or visit the Miami Rescue Mission website.',
					category: "shelter",
					icon:"https://img.icons8.com/color/48/000000/sleeping-in-bed.png",
					lat: 26.0297418,
					long: -80.1485864
				},
				{
					name: "GATEWAY COMMUNITY OUTREACH",
					address:"291 SE 1st Terrace Deerfield Beach, FL 33441",
					phone:"954.725.8434",
					info:'Homeless Prevention & Food Program Food Pantry—Must call before coming to Food Pantry location.',
					category: "food",
					icon:"https://img.icons8.com/color/48/000000/ingredients.png",
					lat: 26.3144811,
					long: -80.1013036
				},{
					name: "OUR FATHER’S HOUSE SOUP KITCHEN",
					address:"2380 Martin Luther Boulevard P.O. Box 70 Pompano Beach, FL 33061",
					phone:"954.968.7550",
					info:'Soup Kitchen & Food Pantry Lunch: Mon-Fri, 11:30 am – 1 pm',
					category: "food",
					icon:"https://img.icons8.com/color/48/000000/ingredients.png",
					lat: 26.2449729,
					long: -80.155188
				},{
					name: "SAN ISIDRO CATHOLIC CHURCH",
					address:"2310 Hammondville Road (Martin Luther King Boulevard) Pompano Beach, FL 33069",
					phone:"954.396.3086",
					info:'Deliveries—Saturday Only Food Ministry',
					category: "food",
					icon:"https://img.icons8.com/color/48/000000/ingredients.png",
					lat: 26.24466,
					long: -80.153974
				},{
					name: "ST. LAURENCE CHAPEL",
					address:"1698 Blount Road Pompano Beach, FL 33069",
					phone:" 954.972.2958",
					info:'Soup Kitchen Breakfast: 8:30 am – 9:30 am Lunch: 12:30 pm',
					category: "food",
					icon:"https://img.icons8.com/color/48/000000/ingredients.png",
					lat: 26.2534375,
					long: -80.1637964
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

