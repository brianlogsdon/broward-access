import React from 'react';
import getState from './store.js';

export const Context = React.createContext(null);

const Store = (PassedComponent) =>{
    class StoreWrapper extends React.Component{
        constructor(props){
            super(props);
            this.state = getState(this);
        }
        
        componentDidMount() {
            //fetch contacts from api
            
            
            fetch('https://ancient-reaches-29695.herokuapp.com/api/contacts/')
            
            .then(response=>(response.json()))
            
           
            .then(data => {
                 let {store} = this.state;
                 store.contacts = data;
                 this.setState({store});
                 
               })
        
            .catch(error=> window.console.log('error'));
            
        }
        
        render(){
            return(
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </Context.Provider>
                );
        }
    }
    
    return StoreWrapper;
};

export default Store;