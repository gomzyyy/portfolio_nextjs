const admins = [process.env.AUTHOR_ID0];

export const checkAdminById = (id) =>
  id ? (admins.includes(id) ? true : false) : false;
