import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';



class Map extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map);
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }
  
  
  render() {
    return (
        <div className= "container">
            <div className="map" style={{ width: '600', height: '50vh' }} id={this.props.id} />
        </div>
    );
  }
}
Map.propTypes = {
    options: PropTypes.object,
    onMapLoad: PropTypes.func,
    id: PropTypes.string,
    key:PropTypes.string,
    history: PropTypes.object,
    match: PropTypes.object
};
export default withRouter(Map);