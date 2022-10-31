import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  handlePaginationLimit,
  handlePageNumber,
} from "../../../Redux/Actions/PostActions";
import CustomePagination from "./CustomePagination";
import { perpageOptions } from "../Option";

const Pagination = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.PostListReducer);

  const { page, limit, postsCount } = state;
  console.log(postsCount, limit, page, "PAGECOUNT");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    console.log("postsCount", postsCount);
    console.log("Limit", limit);
    const totalPages = Math.ceil(postsCount / limit);
    console.log("totalpAgE", totalPages);
    setTotalPages(totalPages);
  }, [limit, postsCount]);
  console.log(totalPages, "TOTAlpAGED");
  /**
   * This function will change page number of pagination
   * @param {Number} pageNumber
   */
  const onChangePage = (pageNumber) => {
    dispatch(handlePageNumber(pageNumber));
  };

  /**
   * This function will change limit of pagination
   * @param {Number} perPageCount
   */
  const onChangeRecords = (perPageCount) => {
    console.log(perPageCount);
    // setPerPageCount(parseInt(perPageCount.value))
    dispatch(handlePageNumber(1));
    dispatch(handlePaginationLimit(perPageCount.value));
  };

  return (
    <>
      {" "}
      <Select
        name="status"
        className="float-right select-style perpage"
        classNamePrefix="select"
        options={perpageOptions}
        value={{
          value: limit,
          label: limit,
        }}
        placeholder={"Records Per Page"}
        onChange={(e) => onChangeRecords(e)}
      />{" "}
      <CustomePagination
        totalPages={totalPages}
        onChangePage={onChangePage}
        currentPage={page}
      />
    </>
  );
};

export default Pagination;
