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

export async function getServerSideProps() {
  const postsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts`
  );
  return {
    props: {
      posts: postsResponse.data,
    },
  };
}
