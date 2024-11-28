// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './user.css';

const AddEditUserModal = ({ showModal, setShowModal, user, handleSaveUser, roles }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (user) {
      setUserName(user.name);
      setUserEmail(user.email);
      setRole(user.role);
      setStatus(user.status);
    } else {
      setUserName('');
      setUserEmail('');
      setRole('');
      setStatus('');
    }
  }, [user]);

  const handleCloseModal = () => {
    setShowModal(false);
    setUserName('');
    setUserEmail('');
    setRole('');
    setStatus('');
  };

  const handleSave = () => {
    const newUser = { ...user, name: userName,email: userEmail, role, status };
    handleSaveUser(newUser);  // Pass the new user data to the parent component
    handleCloseModal();  // Close the modal after saving
  };

  return (
    showModal && (
      <div className="modal" style={{ display: 'block' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{user ? 'Edit User' : 'Add User'}</h5>
              <button className="close" onClick={handleCloseModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="form-control mt-3"
                placeholder="User Name"
              />
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="form-control mt-3"
                placeholder="User Email"
              />
              <select
                className="form-control mt-3"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" disabled>
                  Select Role
                </option>
                {roles.map((role) => (
                  <option key={role.id} value={role.name}>
                    {role.name}
                  </option>
                ))}
              </select>
              <select
                className="form-control mt-3"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled>Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="modal-footer ">
              <button className="btn btn-secondary" onClick={handleCloseModal}>
                Close
              </button>
              <button className="btn btn-primary ml-5" onClick={handleSave}>
                {user ? 'Save Changes' : 'Add User'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

AddEditUserModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  user: PropTypes.object,
  handleSaveUser: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired, 
};

export default AddEditUserModal;
