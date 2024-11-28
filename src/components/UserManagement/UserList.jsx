// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import './user.css';
import { hasPermission } from '../../utils/checkPermission';
import { PERMISSIONS } from '../../config/permission';

const UserList = ({ users, currentUser={}, handleEditUser, handleDeleteUser }) => {
  // const [showModal, setShowModal] = useState(false);
  // const [selectedUser, setSelectedUser] = useState(null);

  // // const handleAddUser = () => {
  // //   setSelectedUser(null);
  // //   setShowModal(true);
  // // };

  // const handleEditUser = (user) => {
  //   setSelectedUser(user);
  //   setShowModal(true);
  // };

  // const handleDeleteUser = (id) => {
  //   const updatedUsers = users.filter(user => user.id !== id);
  //   setUsers(updatedUsers);
  // };

  return (
    <div>
      {/* <button className="btn btn-primary mb-3" onClick={handleAddUser}>
        Add User
      </button> */}
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>S. NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                {hasPermission(currentUser.roles, PERMISSIONS.WRITE) && ( // Check Edit permission
                  <button className="btn-list btn-warning btn-sm mr-2" onClick={() => handleEditUser(user)}>
                    Edit
                  </button>
                )}
                {hasPermission(currentUser.roles, PERMISSIONS.DELETE) && ( // Check Delete permission
                  <button className="btn-list btn-danger btn-sm ml-2" onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {showModal && (
        <AddEditUserModal
          showModal={showModal}
          setShowModal={setShowModal}
          user={selectedUser}
          setUsers={setUsers}
          users={users}
        />
      )} */}
    </div>
  );
};

// Define propTypes
UserList.propTypes = {
  users: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  handleEditUser: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
};

export default UserList;
