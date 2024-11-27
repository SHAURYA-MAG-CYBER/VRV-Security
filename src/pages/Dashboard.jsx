// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import UserList from '../components/UserManagement/UserList';
import AddEditUserModal from '../components/UserManagement/AddEditUserModal';
import RoleList from '../components/RoleManagement/RoleList';
import AddEditRoleModal from '../components/RoleManagement/AddEditRoleModal';

const Dashboard = ({currentUser, onLogout}) => {
  // User Management
  const [users, setUsers] = useState([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = () => {
    setSelectedUser(null); // For adding a new user
    setShowUserModal(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user); // Set user to edit
    setShowUserModal(true);
  };

  const handleSaveUser = (newUser) => {
    if (selectedUser) {
      // Find index of the user being edited
      const index = users.findIndex((user) => user.id === selectedUser.id);
      if (index !== -1) {
        const updatedUsers = [...users];
        updatedUsers[index] = { ...selectedUser, ...newUser };
        setUsers(updatedUsers);
      }
    } else {
      // Add new user with a unique id
      setUsers([...users, { ...newUser, id: Date.now() }]);
    }
    setShowUserModal(false);
  };
  
  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };  

  // Role Management
  const [roles, setRoles] = useState([]);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleAddRole = () => {
    setSelectedRole(null); // For adding a new role
    setShowRoleModal(true);
  };

  const handleEditRole = (role) => {
    setSelectedRole(role); // Set role to edit
    setShowRoleModal(true);
  };

  const handleSaveRole = (role) => {
    if (selectedRole) {
      // Update existing role
      setRoles(roles.map(r => (r.id === role.id ? role : r)));
    } else {
      // Add new role
      setRoles([...roles, { ...role, id: Date.now() }]);
    }
  };

  const handleDeleteRole = (roleId) => {
    setRoles(roles.filter(role => role.id !== roleId));
  };

  return (
    <div className="container mt-4">
      <h1>Admin Dashboard</h1>

      {/* User Management */}
      <button className="btn btn-primary mt-4" onClick={handleAddUser}>
        Add User
      </button>

      <UserList
        users={users}
        currentUser={currentUser}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      />

      <AddEditUserModal
        showModal={showUserModal}
        setShowModal={setShowUserModal}
        user={selectedUser}
        handleSaveUser={handleSaveUser}
        roles={roles}
      />

      {/* Role Management */}
      <button className="btn btn-primary mt-4" onClick={handleAddRole}>
        Add Role
      </button>

      <RoleList
        roles={roles}
        handleEditRole={handleEditRole}
        handleDeleteRole={handleDeleteRole}
      />

      <AddEditRoleModal
        showModal={showRoleModal}
        setShowModal={setShowRoleModal}
        role={selectedRole}
        handleSaveRole={handleSaveRole}
      />
    </div>
  );
};

export default Dashboard;
