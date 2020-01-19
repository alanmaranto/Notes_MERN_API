const store = require("./store");

const getUsers = () => {
  return new Promise((resolve, reject) => {
    resolve(store.getUsers());
  });
};

const addUser = username => {
    if (!username) {
        return Promise.reject('Invalid username')
    }

    const user = {
        username
    };

    return store.addUser(user);
}

const updateUser = (id, username) => {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject("Invalid data");
      return false;
    }

    const updatedUser = {
      username
    }

    const result = await store.editUser(id, updatedUser);
    resolve(result);
  });
};

const deleteUser = id => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Id invalido");
      return false;
    }

    store
      .deleteUser(id)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}