import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  handleSearchValue,
  handleSortValue,
  handleApiCallToggle,
  fetchPostsCount,
  handlePageNumber,
} from "../../Redux/Actions/PostActions";
import PostGrid from "./PostGrid";
import PostTable from "./PostTable";
import searchImg from "../../assets/Icon/search.svg";
import Select from "react-select";
import { sortOption } from "./Option";
import "./Posts.css";
import Pagination from "./Pagination";
const Posts = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.PostListReducer);

  const { loading, posts, page, limit, searchValue, sortValue, postsCount } =
    state;

  const [searchString, setSearchString] = useState("");

  const [sortString, setSortString] = useState("");

  const LocalStorageSearchValue = localStorage.getItem("searchValue");

  const LocalStorageSortValue = localStorage.getItem("sortValue");

  const getsearchValue = LocalStorageSearchValue ? LocalStorageSearchValue : "";

  const getsortValue = LocalStorageSortValue
    ? JSON.parse(LocalStorageSortValue)
    : "";

  const recordstatus1 = parseInt((page - 1) * limit) + 1;
  const recordstatus2 = parseInt((page - 1) * limit) + parseInt(limit);
  /**
   *
   * This Function will call only once Initial Render
   */
  useEffect(() => {
    setSearchString(getsearchValue);
    setSortString(getsortValue);
  }, []);

  /**
   *
   * This Function will  call  onchanging value of searchValue, sortValue, page, limit
   */
  useEffect(() => {
    const sortValue = getsortValue ? getsortValue.value : "";
    dispatch(fetchPosts(getsearchValue, page, limit, sortValue));
    dispatch(fetchPostsCount(getsearchValue, sortValue));
  }, [searchValue, sortValue, page, limit]);

  /**
   * This function will handle search value and store the value  in localstorage
   * @param {object} e
   */
  const onChangeSearchValue = (e) => {
    if (e.target.value === "") {
      localStorage.setItem("searchValue", e.target.value);
      dispatch(handleSearchValue(e.target.value));
      dispatch(handlePageNumber(1));
    }
    setSearchString(e.target.value);
  };

  /**
   * This function will handle sorting value and store the value  in localstorage
   * @param {object} value
   */
  const onChangeSortValue = (value) => {
    localStorage.setItem("sortValue", JSON.stringify(value));
    setSortString(value);
    dispatch(handleSortValue(value));
    dispatch(handlePageNumber(1));
  };
  /**
   *
   * This function will  call  onClicking of  search Button
   */
  const handleSearch = () => {
    localStorage.setItem("searchValue", searchString);
    let str = searchString.replace(/^"(.*)"$/, "$1");
    dispatch(handleSearchValue(str));
    dispatch(handlePageNumber(1));
  };

  return (
    <>
      <div className="PostData">POST-DATA</div>
      <div className="filter-container">
        <div className="search-input">
          <input
            type="search"
            placeholder="Search..."
            value={searchString}
            onChange={onChangeSearchValue}
          />
          <span onClick={handleSearch}>
            <img src={searchImg} width={2} height={2} />
          </span>
        </div>

        <Select
          options={sortOption}
          placeholder="Sort By"
          isClearable
          value={sortString}
          onChange={onChangeSortValue}
          className="select-sort"
        />
      </div>
      {postsCount > 0
        ? !loading && (
            <div className="pagination-status">
              {
                <span>
                  Showing {recordstatus1} -
                  {recordstatus2 < postsCount ? recordstatus2 : postsCount} of{" "}
                  {postsCount}
                </span>
              }
            </div>
          )
        : ""}
      {!loading && (
        <div className="pagination-container">
          <Pagination />
        </div>
      )}
      {loading ? (
        <div className="loading">
          {" "}
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <PostGrid posts={posts} />
          <PostTable posts={posts} />
        </>
      )}
    </>
  );
};

export default Posts;
