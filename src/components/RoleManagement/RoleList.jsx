// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const RoleList = ({ roles, handleEditRole, handleDeleteRole }) => {
  return (
    <div>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>
              {
                Object.keys(role.permissions)
                .filter(key => role.permissions[key]) 
                .map(key => key.charAt(0).toUpperCase() + key.slice(1)) 
                .join(' + ') || 'No Permissions' 
              }
              </td>
              <td>
                <button onClick={() => handleEditRole(role)} className="btn btn-warning btn-sm">
                  Edit
                </button>
                <button onClick={() => handleDeleteRole(role.id)} className="btn btn-danger btn-sm ml-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

RoleList.propTypes = {
  roles: PropTypes.array.isRequired,
  handleEditRole: PropTypes.func.isRequired,
  handleDeleteRole: PropTypes.func.isRequired,
};

export default RoleList;
