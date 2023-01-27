import { useEffect } from "react";
import styles from "./index.module.css";
import { Fragment } from "react";
import { fetcher } from "../lib/api";

import PostItem from "../components/postItem";

function HomePage({ posts }) {
  return (
    <Fragment>
      <PostItem posts={posts}></PostItem>
    </Fragment>
  );
}

export default HomePage;

export const getStaticProps = async () => {
  const postsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts`
  );
  console.log(postsResponse);
  return {
    props: {
      posts: postsResponse.data,
    },
  };
};
