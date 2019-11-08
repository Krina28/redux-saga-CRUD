import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers, deleteUser } from '../store/actions/actions';
import { withRouter } from 'react-router-dom';
import UserList from '../components/users/usersList';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
        this.props.getAllUsers();
    }

    render() {
        return (
            <div>
                <UserList users={this.props.users} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        users: state.UsersReducer.users,
    })
}

const mapDispatchToProps = {
    getAllUsers,
    deleteUser
};

Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default withRouter(Home);
