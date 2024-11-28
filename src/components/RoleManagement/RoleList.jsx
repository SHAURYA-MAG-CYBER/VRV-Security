// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import './role.css';

const RoleList = ({ roles, handleEditRole, handleDeleteRole }) => {
  return (
    <div>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>S. No</th>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role,index) => (
            <tr key={role.id}>
              <td>{index+1}</td>
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
                <button onClick={() => handleEditRole(role)} className="btn-list btn-warning btn-sm">
                  Edit
                </button>
                <button onClick={() => handleDeleteRole(role.id)} className="btn-list btn-danger btn-sm ml-2">
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
