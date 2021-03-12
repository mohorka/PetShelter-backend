import { getObjectId } from 'mongo-seeding'
export const admin = [{
    _id: getObjectId('admin'),
    admin: 'admin',
    password: process.env.ADMIN_PASS,

}]