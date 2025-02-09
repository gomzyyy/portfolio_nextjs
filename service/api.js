
export const baseUrl = `https://portfolio-nextjs-five-flax.vercel.app`
// export const baseUrl = `http://192.168.1.66:3000`

export const getBlogs = async (authId,page = 1, limit = 5) => {
  try {
    const response = await fetch(
      `${baseUrl}/api/blogs?page=${page}&limit=${limit}&auth=${authId}`,
      { method: "GET" }
    );
    if (!response.ok) {
      const res = {
        message: "Internal server error.",
        blogs: [],
        noOfPages: 0,
      };
      return res;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
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
    throw new Error(
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
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unable to process request at the moment."
    );
  }
};
export const createBlog = async (authId,data) => {
  try {
    const response = await fetch(`${baseUrl}/api/blog/create?auth=${authId}`, {
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
    throw new Error(
      error instanceof Error ? error.message : "Unable to create blog."
    );
  }
};
export const createRequest = async (authId,data, setLoading) => {
  try {
    setLoading(true);
    if (!data.name || !data.email) {
      alert("some required fields are missing.");
      return;
    }
    const response = await fetch(
      `${baseUrl}/api/contact/send?auth=${authId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      return await response.json();
    }
    const res = await response.json();
    return res;
  } catch (error) {
    return error instanceof Error ? error.message : "Unable to send request.";
  } finally {
    setLoading(false);
  }
};
export const getAllRequests = async (id, authId, pageNumber, limit = 20) => {
  try {
    const response = await fetch(
      `${baseUrl}/api/contact/get?id=${id}&auth=${authId}`
    );

    const res = await response.json();

    if (!response.ok) {
      throw new Error(res.message || "Failed to fetch requests");
    }

    return res;
  } catch (error) {
    throw new Error(error.message || "Unable to send request.");
  }
};
