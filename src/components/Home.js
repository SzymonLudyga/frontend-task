import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Card, CardMedia, Typography, Button } from '@material-ui/core';
import moment from 'moment';
import NavigationIcon from '@material-ui/icons/Navigation';
import DateRangeIcon from '@material-ui/icons/DateRange';

import userMock from '../resources/user-mock.png';
import online from '../resources/on.png';
import offline from '../resources/off.png';

export default class Home extends Component {
    componentDidMount() {
        const { fetchUsers, clearDetails } = this.props;
        clearDetails();
        fetchUsers(60);
    }

    render() {
        const { users, userDetails, classes, total, fetchUsers, fetchDetails } = this.props;
        return (
            <Grid className={classes.container}>
                <Typography className={classes.title} variant="h1">Romeo</Typography>
                {!!users.length && users.map(user => (
                    <Card onClick={() => fetchDetails(user.id)} className={classes.user}>
                        <Paper elevation={0} className={classes.userBasics}>
                            <Typography key={user.id}>
                                {user.name}
                            </Typography>
                            <img alt="" src={user.online_status === "ONLINE" ? online : offline} className={classes.image}></img>
                        </Paper>
                        {user.picture ? <CardMedia
                            className={classes.media}
                            image={user.picture.url}
                            title={user.picture.comment}
                        /> : <CardMedia
                            className={classes.media}
                            image={userMock}
                        />}
                        {userDetails && userDetails.id === user.id && (
                            <>
                                <div className={classes.iconWithText}>
                                    <NavigationIcon />
                                    <Typography>{userDetails.location.distance} m | {userDetails.location.city}</Typography>
                                </div>
                                <div className={classes.iconWithText}>
                                    <DateRangeIcon />
                                    <Typography>{' '}{userDetails.personal.age} years</Typography>
                                </div>
                                <Paper elevation={0} className={classes.userDetails}>
                                    {user.online_status !== "ONLINE" && <Typography>Online: {moment(user.last_login).fromNow()}</Typography>}
                                    <Typography className={classes.headline}>{userDetails.headline}</Typography>
                                </Paper>
                            </>
                        )}
                    </Card>
                ))}
                <Button
                    className={classes.button}
                    onClick={() => fetchUsers(users.length + 60)} 
                    disabled={users.length >= total}
                >
                    Find more users
                </Button>
            </Grid>
        );
    }
}

Home.propTypes = {
    users: PropTypes.array, 
    userDetails: PropTypes.object,
    classes: PropTypes.object.isRequired,
    total: PropTypes.number,
    fetchUsers: PropTypes.func.isRequired,
    fetchDetails: PropTypes.func.isRequired,
    clearDetails: PropTypes.func.isRequired,
};