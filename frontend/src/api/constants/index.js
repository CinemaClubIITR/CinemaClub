export const BASE_URL = process.env.REACT_APP_API_BASE;

const apiConstants = {
  pages: BASE_URL + "/pages/",
};

export const BLOGS = apiConstants.pages + apiConstants.blogs;