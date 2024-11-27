// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AddEditRoleModal = ({ showModal, setShowModal, role, handleSaveRole }) => {
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState({ read: false, write: false, delete: false });

  useEffect(() => {
    if (role) {
      setRoleName(role.name);
      setPermissions(role.permissions);
    }
  }, [role]);

  const handleCloseModal = () => {
    setShowModal(false);
    setRoleName('');
    setPermissions({ read: false, write: false, delete: false });
  };

  const handleSave = () => {
    const updatedRole = { ...role, name: roleName, permissions };
    handleSaveRole(updatedRole);
    handleCloseModal();
  };

  return (
    showModal && (
      <div className="modal" style={{ display: 'block' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{role ? 'Edit Role' : 'Add Role'}</h5>
              <button className="close" onClick={handleCloseModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                className="form-control"
                placeholder="Role Name"
              />
              <div className="mt-3">
                <label>
                  <input
                    type="checkbox"
                    checked={permissions.read}
                    onChange={() => setPermissions({ ...permissions, read: !permissions.read })}
                  />
                  Read
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={permissions.write}
                    onChange={() => setPermissions({ ...permissions, write: !permissions.write })}
                  />
                  Write
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={permissions.delete}
                    onChange={() => setPermissions({ ...permissions, delete: !permissions.delete })}
                  />
                  Delete
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={handleCloseModal}>
                Close
              </button>
              <button className="btn btn-primary" onClick={handleSave}>
                {role ? 'Save Changes' : 'Add Role'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

AddEditRoleModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  role: PropTypes.object,
  handleSaveRole: PropTypes.func.isRequired,
};

export default AddEditRoleModal;
