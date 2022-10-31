import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  PAGE_NUMBER_CHANGE,
  SORT_VALUE_CHANGE,
  SEARCH_VALUE_CHANGE,
  PAGINATION_LIMIT_CHANGE,
  FETCH_POSTS_SUCCESS_COUNT,
  FETCH_POSTS_FAILURE_COUNT,
} from "../Types";
import { getPosts, getPostsCount } from "../../Services/PostServices";

export const fetchPosts = (searchValue, page, limit, sortValue) => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    getPosts(searchValue, page, limit, sortValue)
      .then((response) => {
        // response.data is the Posts
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchPostsFailure(error.message));
      });
  };
};

export const fetchPostsCount = (searchValue, sortValue) => {
  return (dispatch) => {
    getPostsCount(searchValue, sortValue)
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostsSuccessCount(posts));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchPostsFailureCount(error.message));
      });
  };
};

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

export const fetchPostsSuccessCount = (posts) => {
  console.log(posts, "POSTS");
  return {
    type: FETCH_POSTS_SUCCESS_COUNT,
    payload: posts,
  };
};

export const fetchPostsFailureCount = (error) => {
  return {
    type: FETCH_POSTS_FAILURE_COUNT,
    payload: error,
  };
};

export const handlePageNumber = (pageNumber) => {
  return {
    type: PAGE_NUMBER_CHANGE,
    payload: pageNumber,
  };
};

export const handleSortValue = (sortValue) => {
  return {
    type: SORT_VALUE_CHANGE,
    payload: sortValue,
  };
};

export const handleSearchValue = (searchValue) => {
  return {
    type: SEARCH_VALUE_CHANGE,
    payload: searchValue,
  };
};

export const handlePaginationLimit = (limit) => {
  return {
    type: PAGINATION_LIMIT_CHANGE,
    payload: limit,
  };
};
