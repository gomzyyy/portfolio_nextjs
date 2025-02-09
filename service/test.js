const admins = [process.env.AUTHOR_ID0];

export const checkAdminById = (id) =>
  id ? (admins.includes(id) ? true : false) : false;

export const checkIfAuthorized = (auth) =>
  auth ? (auth === process.env.AUTH_KEY ? true : false) : false;
