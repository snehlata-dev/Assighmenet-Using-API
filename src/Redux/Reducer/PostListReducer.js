import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  PAGE_NUMBER_CHANGE,
  SORT_VALUE_CHANGE,
  SEARCH_VALUE_CHANGE,
  PAGINATION_LIMIT_CHANGE,
  FETCH_POSTS_SUCCESS_COUNT,
  FETCH_POSTS_FAILURE_COUNT
} from "../Types";
const intialstate = {
  loading: true,
  posts: [],
  error: "",
  page: 1,
  limit: 10,
  searchValue: "",
  sortValue: "",
  apiCallToggle:false,
  postsCount:[]
};
const PostListReducer = (state = intialstate, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };

    case PAGE_NUMBER_CHANGE:
      return {
        ...state,
        page: action.payload,
      };

    case SEARCH_VALUE_CHANGE:
      return {
        ...state,
        searchValue: action.payload,
      };
      case FETCH_POSTS_SUCCESS_COUNT:
      return {
        ...state,
        postsCount: action.payload.length,
      };
      case FETCH_POSTS_FAILURE_COUNT:
      return {
        ...state,
        postsCount: [],
      };
    case SORT_VALUE_CHANGE:
      return {
        ...state,
        sortValue: action.payload,
      };
    case PAGINATION_LIMIT_CHANGE:
      return {
        ...state,
        limit: action.payload,
      };
  
    default:
      return state;
  }
};

export default PostListReducer;
