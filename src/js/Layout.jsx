import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MapView from "./views/MapView.jsx";
import Home from "./views/home.jsx";
//import AddContact from "./views/AddContact.jsx";
import { Footer } from "./components/footer.jsx";
import Store from "./store/appContext.jsx";
import Profile from "./views/profile.jsx";
import  Login  from "./views/login.jsx";

export class Layout extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/index.html" component={Home} />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/map" component={MapView} />
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/login" component={Login} />
                            
                            <Route render={() => <h1 className="notfound">Not found!</h1>} />
                        </Switch>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Store(Layout);
