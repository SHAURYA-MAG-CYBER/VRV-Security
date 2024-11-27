export const hasPermission = (userRoles, permission) => {
    const userPermissions = userRoles[0].permissions;
    return userPermissions.includes(permission);
  };