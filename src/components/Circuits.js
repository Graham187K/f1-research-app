import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CircuitMap from './CircuitMap';

class Circuits extends Component {
    static propTypes = {};

    componentDidMount() {
        this.props.onRequestCircuits();
    }

    render() {
        if (this.props.fetching) {
            return <div>Loading...</div>;
        }

        return (
            this.props.circuits && (
                <div>
                    <ul>
                        {this.props.circuits.map((circuit, idx) => (
                            <div key={idx}>
                                <p>{circuit.Circuit.circuitName}</p>
                                <CircuitMap
                                    isMarkerShown
                                    position={{
                                        lat: parseFloat(
                                            circuit.Circuit.Location.lat
                                        ),
                                        lng: parseFloat(
                                            circuit.Circuit.Location.long
                                        ),
                                    }}
                                />
                            </div>
                        ))}
                    </ul>
                </div>
            )
        );
    }
}

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

const CircuitsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Circuits);

export default CircuitsContainer;
