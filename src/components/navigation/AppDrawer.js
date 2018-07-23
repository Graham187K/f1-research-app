import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class AppDrawer extends React.Component {
    openDrawer = () => {
        this.props.toggleDrawer(true);
    };

    closeDrawer = () => {
        this.props.toggleDrawer(false);
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Typography>
                    <SwipeableDrawer
                        open={this.props.drawerOpen}
                        onClose={this.closeDrawer}
                        onOpen={this.openDrawer}
                    >
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.closeDrawer}
                            onKeyDown={this.closeDrawer}
                        >
                            <div className={classes.list}>
                                <List>
                                    <Typography>
                                        <NavLink to="/">Home</NavLink>
                                    </Typography>
                                </List>
                                <Divider />
                                <List>
                                    <Typography>
                                        <NavLink to="/races-2018">
                                            F1 Races 2018
                                        </NavLink>
                                    </Typography>
                                </List>
                            </div>
                        </div>
                    </SwipeableDrawer>
                </Typography>
            </div>
        );
    }
}

AppDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppDrawer);
