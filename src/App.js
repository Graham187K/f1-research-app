import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import SeasonRaceListContainer from './components/Season/SeasonRaceList';
import Home, { About } from './components/Home';

import Nav from './components/navigation/Nav';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />

                <Router>
                    <div className="App">
                        <Nav />

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                path="/races-2018"
                                component={SeasonRaceListContainer}
                            />
                        </Switch>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
