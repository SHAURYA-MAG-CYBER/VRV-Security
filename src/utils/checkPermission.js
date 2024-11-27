export const hasPermission = (userRoles, permission) => {
    // Combine all permissions from the user's roles
    // eslint-disable-next-line no-undef
    const userPermissions = userRoles.flatMap(role => ROLES[role] || []);
    
    // Check if the required permission exists
    return userPermissions.includes(permission);
  };