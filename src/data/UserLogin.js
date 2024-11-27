export const sampleUsers = [
    {
      id: 1,
      username: 'admin',
      password: 'admin123',
      roles: [
        {
          name: 'Admin',
          permissions: ['read', 'write', 'delete'],
        },
      ],
    },
    {
      id: 2,
      username: 'editor',
      password: 'editor123',
      roles: [
        {
          name: 'Editor',
          permissions: ['read', 'write'],
        },
      ],
    },
    {
      id: 3,
      username: 'checker',
      password: 'checker123',
      roles: [
        {
          name: 'Checker',
          permissions: ['read'],
        },
      ],
    },
  ];
  