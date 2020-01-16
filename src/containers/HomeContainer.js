import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Home from '../components/Home';
import { fetchUsers } from '../actions/users';

const styles = () => ({
    
});

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Home));