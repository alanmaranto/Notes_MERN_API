const Model = require("./model");

const getUsers = async () => {
  const users = await Model.find(); // Devuelve un array con todas los users de la db
  return users;
};

const addUser = async user => {
    const newUser = new Model(user);
    return newUser.save();
};

const editUser = async (id, user) => {
    const foundedUser = await Model.findByIdAndUpdate({_id: id}, {
        $set: user
    });
    console.log('foundeduser',foundedUser)

    foundedUser.user = user;
    console.log('founduser', foundedUser.user)
    const updatedUser = await foundedUser.save();
    console.log('updatedUser',updatedUser)
    return updatedUser
}

const deleteUser = async id => {
    return Model.findByIdAndDelete(id)
}

module.exports = {
    getUsers,
    addUser,
    editUser,
    deleteUser
}