const Router = require('express');
const { getUser } = require('../../controllers/user/getUser');
const { registerUser } = require('../../controllers/user/registerUser');
const { deleteUser } = require('../../controllers/user/deleteUser');

const userRouter = Router();

// GET
userRouter.get('/', getUser);

// POST
userRouter.post('/', registerUser);

// DELETE
userRouter.delete('/', deleteUser);


module.exports = userRouter;