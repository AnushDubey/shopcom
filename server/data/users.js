import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Anush Dubey',
    email: 'anush@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jack Sparrow',
    email: 'jack@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
