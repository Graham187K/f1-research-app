import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import codes from './CountryCodes';

const styles = {
    card: {
        maxWidth: 350,
        margin: '2rem auto',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class SeasonRaceList extends Component {
    componentDidMount() {
        this.props.onRequestCircuits();
    }

    render() {
        if (this.props.fetching || !this.props.circuits) {
            return <div>Loading...</div>;
        }

        return this.props.circuits.map((circuit, idx) => {
            const flagElement = (
                <img
                    alt={circuit.raceName}
                    src={`http://www.countryflags.io/${
                        codes[circuit.Circuit.Location.country]
                    }/flat/64.png`}
                />
            );

            return (
                <div>
                    <Card className={this.props.classes.card}>
                        <CardContent>
                            {flagElement}
                            <Typography
                                className={this.props.classes.title}
                                color="textSecondary"
                            >
                                Round {idx + 1}
                            </Typography>
                            <Typography variant="headline" component="h2">
                                {circuit.raceName}
                            </Typography>
                            <Typography
                                className={this.props.classes.pos}
                                color="textSecondary"
                            >
                                {`${circuit.Circuit.Location.locality} -  ${
                                    circuit.Circuit.Location.country
                                }`}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            );
        });
    }
}

SeasonRaceList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        circuits: state.circuits,
        error: state.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestCircuits: () => {
            dispatch({ type: 'GET_CIRCUITS_REQUEST' });
        },
    };
};

const SeasonRaceListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SeasonRaceList));

export default SeasonRaceListContainer;
