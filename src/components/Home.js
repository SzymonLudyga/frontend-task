import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

export default class Home extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }


    render() {
        return <div>
            <Typography>USERS</Typography>
        </div>;
    }
}

Home.propTypes = {

};