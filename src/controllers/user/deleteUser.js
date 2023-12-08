const { User } = require("../../db/db");

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({ where: { id } });
        res.send({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { deleteUser };