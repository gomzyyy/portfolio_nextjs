import { baseUrl_get } from "../constants/serverData";

export const getBlogs = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(
      `http://localhost:8000/get/blogs?page=${page}&limit=${limit}`,
      { method: "GET" }
    );

    if (!response.ok) {
      return (res = {
        message: "Internal server error.",
        blogs: [],
        noOfPages: 0,
      });
    }
    const data = await response.json();
    return data;
  } catch (err) {
    alert(
      err instanceof Error
        ? err.message
        : "Unable to process request at the moment."
    );
  }
};
export const getBlogsByQuery = async (query) => {
  try {
    const response = await fetch(
      `http://localhost:8000/get/blogs/by-query?query=${query}`,
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(
      error instanceof Error
        ? error.message
        : "Unable to process request at the moment."
    );
  }
};
export const getBlogsById = async (query) => {
  try {
    const response = await fetch(
      `http://localhost:8000/get/blogs/by-id?id=${query}`,
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert(
      err instanceof Error
        ? err.message
        : "Unable to process request at the moment."
    );
  }
};
export const createBlog = async (data) => {
  try {
    console.log(data)
    const response = await fetch(`http://localhost:8000/post/blog/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      return await response.json();
    }
    const res = await response.json();
    return res;
  } catch (error) {
    console.log(error)
  }
};
// alert(
//   error instanceof Error
//     ? error.message
//     : "Unable to process request at the moment."
// );
