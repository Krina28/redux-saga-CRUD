import React, { useState } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter, useHistory } from 'react-router-dom';
import { UserButton, EditButton } from './users.style';
import { connect } from 'react-redux';
import { getAllUsers, deleteUser } from '../../store/actions/actions';

let UserList = (props) => {
    console.log('props', props)
    let history = useHistory();

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const _deleteUser = user => () => {
        console.log('user', user)
        //setModal(!modal);
    }

    return (
        <>
            <UserButton color="primary" onClick={() => history.push("/add-user")} >Add User</UserButton>
            <Table striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Profile</th>
                        <th>Repositery</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.length > 0 ? (
                        props.users.map((user, index) => (
                            <>
                                <tr key={user.id}>
                                    <td>{user.login}</td>
                                    <td>{user.url}</td>
                                    <td><a>{user.repos_url}</a></td>
                                    <td>
                                        <EditButton className="button muted-button">Edit</EditButton>
                                        <Button color="danger" onClick={_deleteUser(user)}>Delete</Button>
                                    </td>
                                </tr>
                            </>
                        ))
                    ) : (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        )}
                </tbody>
            </Table>
            {modal &&
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>Delete User</ModalHeader>
                    <ModalBody>
                        Are you sure ?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={_deleteUser()}>Delete</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            }
        </>
    );
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

UserList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)

export default withRouter(UserList);
