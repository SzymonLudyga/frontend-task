import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Home from '../components/Home';
import { fetchUsers, fetchDetails, clearDetails } from '../actions/users';

const styles = () => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        backgroundColor: '#3e486b'
    },
    user: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 270,
        margin: 5,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        color: 'white',
        backgroundColor: '#232a3f'
    },
    media: {
        height: 250,
        width: 250,
        borderRadius: 5,
    },
    title: {
        width: '100%',
        color: 'white',
        textAlign: 'center'
    },
    button: {
        width: '80%',
        color: 'white',
        margin: 10,
        borderRadius: 5,
    },
    userBasics: {
        color: 'white',
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#232a3f'
    },
    image: {
        height: 15,
        width: 15,
        marginTop: 3,
        marginLeft: 3
    },
    iconWithText: {
        alignSelf: 'flex-start',
        display: 'flex',
        marginLeft: 2,
        marginBottom: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    userDetails: {
        color: 'white',
        marginLeft: 5,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#232a3f'
    },
    headline: {
        fontStyle: 'italic',
        fontSize: 16,
    }
});

function mapStateToProps(state) {
    return {
        users: state.users.userList,
        userDetails: state.users.detailed,
        total: state.users.total
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: num => dispatch(fetchUsers(num)),
        fetchDetails: id => dispatch(fetchDetails(id)),
        clearDetails: () => dispatch(clearDetails())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Home));