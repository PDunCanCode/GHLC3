import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jon Duncan',
        email: 'jon@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Tim Duncan',
        email: 'tim@example.com',
        password: bcrypt.hashSync('123456', 10),
    },

]

export default users