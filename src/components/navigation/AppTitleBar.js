import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

class AppTitleBar extends Component {
    openDrawer = () => {
        this.props.toggleDrawer(true);
    };

    render() {
        return (
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <IconButton color="default" onClick={this.openDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit">
                        Material-UI Demo App
                    </Typography>
                    <div>
                        <IconButton color="default" onClick={this.props.login}>
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(AppTitleBar);
