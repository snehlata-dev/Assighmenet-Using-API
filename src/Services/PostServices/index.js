import Api from "../../Api";

export const getPosts = (searchValue, page, limit, sortByValue = "") => {
  return Api.get(
    `/Posts?search=${searchValue}&page=${page}&limit=${limit}&sortBy=${sortByValue}`
  )
    .then((response) => response)
    .catch((error) => error);
};

export const getPostsCount = (searchValue, sortByValue = "") => {
  return Api.get(`/Posts?search=${searchValue}&sortBy=${sortByValue}`)
    .then((response) => response)
    .catch((error) => error);
};
