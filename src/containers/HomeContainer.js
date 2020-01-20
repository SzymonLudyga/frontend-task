import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Home from '../components/Home';
import { fetchUsers, fetchDetails } from '../actions/users';

const styles = () => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    user: {
        maxWidth: 300,
        margin: 5,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
      },
});

function mapStateToProps(state) {
    return {
        users: state.users.userList,
        userDetails: state.users.detailed
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchDetails: id => dispatch(fetchDetails(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Home));