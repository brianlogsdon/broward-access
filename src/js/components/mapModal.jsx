import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

class MapModal extends React.Component{
    constructor(){
        super();
        this.state = {
            // Initialize your state
            
        };
    }
    
    render(){
        
        
        
        return (
            <div className="modal" tabIndex="-1" role="dialog" style={{display: (this.props.show) ? 'inline-block' : 'none'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add a Resource</h5>
                            
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                                </div>
                                <input id="name" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
                                </div>
                                <input id="address" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
                                </div>
                                <input id="phone" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                                </div>
                                <input id="info" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                            </div>
                            
                        </div>
                        <div className="modal-footer">
                        
                            <Context.Consumer>{({actions,store }) => {
                            return (
                            
                                <div>
                                    <button onClick={()=>{actions.addLocation(document.querySelector("#name").value,
                                    document.querySelector("#address").value,document.querySelector("#phone").value,
                                    document.querySelector("#info").value, this.props.lat, this.props.lng, this.props); }}
                                    type="button" className="btn btn-primary">Save!</button>
                                    
                                    
                                    <button onClick={() =>{ this.props.onClose();
                                                    }} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                           );}}
                           
                            </Context.Consumer> 
                            
                        </div>
                       
                    </div>
                </div>
            </div>
             
        );
    }
    
}
/**
 * Define the data-types for
 * your component's properties
**/
MapModal.propTypes = {
    history: PropTypes.object,
    onClose: PropTypes.func,
    show: PropTypes.bool,
    match: PropTypes.object,
    lat:PropTypes.number,
    lng:PropTypes.number,
    key:PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
**/
MapModal.defaultProps = {
  show: false,
  onClose: null
};
export default withRouter(MapModal);