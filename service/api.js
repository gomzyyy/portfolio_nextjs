import { baseUrl_get } from "../constants/serverData";

export const getBlogs = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(
      `http://localhost:8000/get/blogs?page=${page}&limit=${limit}`,
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
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
      `http://localhost:8000//get/blogs/by-id?id=${query}`,
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
