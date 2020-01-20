import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardMedia, Typography, Button } from '@material-ui/core';

export default class Home extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }


    render() {
        const { userDetails, classes } = this.props;
        // console.log(this.props.users);
        return (
            <Grid className={classes.container}>
                {this.props.users.map(user => {
                    console.log(user.picture)
                    return (
                    <Card className={classes.user}>
                        <Typography key={user.id}>{user.name} | {user.online_status} | {user.last_login}</Typography>
                        {user.picture && <CardMedia
                            className={classes.media}
                            image={user.picture.url}
                            title={user.picture.comment}
                        />}
                        <Button onClick={() => this.props.fetchDetails(user.id)}>DETAILS</Button>
                        {userDetails.id === user.id && <Typography>{userDetails.personal.age}</Typography>}
                    </Card>
                )})}
            </Grid>
        );
    }
}

Home.propTypes = {

};