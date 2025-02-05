export const checkAdminById = (id) => id ? (id === process.env.AUTHOR_ID0 ? true : false) : false;
