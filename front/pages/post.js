import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { LOAD_USER_REQUEST } from "../reducers/user";
import PostForm from "../containers/PostForm";

// const Post = ({ id }) => {
//   const { singlePost } = useSelector(state => state.post);
//   return (
//     <>
//       <Helmet
//         title={`${singlePost.User.nickname}님의 글`}
//         description={singlePost.content}
//         meta={[
//           {
//             name: "description",
//             content: singlePost.content
//           },
//           {
//             property: "og:title",
//             content: `${singlePost.User.nickname}님의 게시글`
//           },
//           {
//             property: "og:description",
//             content: singlePost.content
//           },
//           {
//             property: "og:image",
//             content:
//               singlePost.Images[0] &&
//               `http://localhost:3065/${singlePost.Images[0].src}`
//           },
//           {
//             property: "og:url",
//             content: `http://localhost:3060/post/${id}`
//           }
//         ]}
//       />
//       <div itemScope="content">{singlePost.content}</div>
//       <div itemScope="author">{singlePost.User.nickname}</div>
//       <div>
//         {singlePost.Images[0] && (
//           <img src={`http://localhost:3065/${singlePost.Images[0].src}`} />
//         )}
//       </div>
//     </>
//   );
// };

// Post.getInitialProps = async context => {
//   context.store.dispatch({
//     type: LOAD_POST_REQUEST,
//     data: context.query.id
//   });
//   return { id: parseInt(context.query.id, 10) };
// };

// Post.propTypes = {
//   id: PropTypes.number.isRequired
// };

// export default Post;

const Post = ({ storeid }) => {
  return <PostForm storeid={storeid} />;
};

Post.getInitialProps = async context => {
  const storeid = context.query.storeid;
  return { storeid };
};

export default Post;
