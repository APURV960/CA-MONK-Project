const BASE_URL = "http://localhost:3001";

// get
export const getBlogs = async () => {
  const res = await fetch(`${BASE_URL}/blogs`);

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
};

// get by id
export const getBlogById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/blogs/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  return res.json();
};

// post
export const createBlog = async (blog: any) => {
  const res = await fetch(`${BASE_URL}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });

  if (!res.ok) {
    throw new Error("Failed to create blog");
  }

  return res.json();
};
