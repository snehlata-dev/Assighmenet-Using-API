import moment from "moment";
import React from "react";
import "./postTable.css";
const PostTable = ({ posts }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Image Link</th>
          <th>Name</th>
          <th>description</th>
          <th>Last Edit Date</th>
        </tr>
        {posts.length > 0 ? (
          posts.map((post, index) => {
            return (
              <tr key={index}>
                <td>
                  <a href={post.image} target="_blank">
                    Image
                  </a>
                </td>
                <td>{post.name}</td>
                <td>{post.description}</td>
                <td>{moment(post.dateLastEdited).format("LLL")}</td>
              </tr>
            );
          })
        ) : (
          <div className="resultStatus">
            {" "}
            <p>No Result Found</p>
          </div>
        )}
      </table>
    </div>
  );
};

export default PostTable;
