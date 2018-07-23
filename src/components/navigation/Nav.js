import React, { Component, Fragment } from 'react';

import AppTitleBar from './AppTitleBar';
import AppDrawer from './AppDrawer';

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false,
        };
    }
    toggleDrawer = open => {
        this.setState({
            drawerOpen: open,
        });
    };
    render() {
        return (
            <Fragment>
                <AppTitleBar toggleDrawer={this.toggleDrawer} />
                <AppDrawer
                    toggleDrawer={this.toggleDrawer}
                    drawerOpen={this.state.drawerOpen}
                />
            </Fragment>
        );
    }
}
