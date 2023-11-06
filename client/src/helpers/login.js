export const login = (user, users) => {
  const foundItem = users.find((usr) => {
    return usr.email === user.email && usr.password === user.password;
  });
  console.log(foundItem);
  return foundItem;
};
