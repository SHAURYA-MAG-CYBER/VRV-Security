export const PERMISSIONS = {
    READ: 'read',
    WRITE: 'write',
    DELETE: 'delete',
  };
  
  export const ROLES = {
    ADMIN: [PERMISSIONS.READ, PERMISSIONS.WRITE, PERMISSIONS.DELETE],
    EDITOR: [PERMISSIONS.READ, PERMISSIONS.WRITE],
    VIEWER: [PERMISSIONS.READ],
  };