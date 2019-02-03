import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class Carousel extends Component {
render() {
		return (
    <div id="carouselExampleControls" className="carousel slide m-auto" data-ride="carousel">
        <div className="carousel-inner" style= {{width:'100%' , height: '400px' }}>
            <div className="carousel-item active mh-100">
                <img className="" src="https://www.kentucky.com/latest-news/m7v9ev/picture43785177/alternates/LANDSCAPE_1140/lxonl.So.79.jpeg" width="100%" height="400" alt="First slide"></img>
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="bg-dark" >Broward County declares cold weather emergency</h5>
                    <p className="bg-dark">Donated blankets at the Catholic Action Center’s GodsNet will be handed out Tuesday night to homeless people who decline to move indoors. Extra coats also will be provided.</p>
                </div>
            </div>
            <div className="carousel-item mh-100">
                <img className="d-block mh-100 w-100"  src="http://mediad.publicbroadcasting.net/p/wlrn/files/styles/medium/public/201901/IMG_4507.jpg" width="100%" height="400" alt="Second slide"></img>
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="bg-secondary">Social Services, Not Jail: New Community Court Seeks To Address Causes Of Homelessness In Broward</h5>
                    <p className="bg-secondary">Chief Judge Jack Tuter, center, presided over four homeless cases on the first morning of community court in Fort Lauderdale.
CAITIE SWITALSKI / WLRN</p>
                </div>
            </div>
            <div className="carousel-item mh-100">
                <img className="d-block w-100 mh-100" src="http://www.trbimg.com/img-5c40f085/turbine/fl-1547759745-gu3hhe8ehh-snap-image/1024/1024x576" width="100%" height="400" alt="Third slide"></img>
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="bg-secondary">Fort Lauderdale will push for homeless daytime center</h5>
                    <p className="bg-secondary">Workers for a private contractor put up a fence around the homeless encampment in front of the Main Library on Fort Lauderdale on Nov. 26. A coalition of city and county government, business leaders, and charitable organizations relocated the people living there. (Joe Cavaretta / South Florida Sun Sentinel)</p>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
);
}}

export default Carousel;