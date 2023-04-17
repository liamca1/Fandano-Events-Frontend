import styles from "../pages/index.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

function PostItem({ posts }) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + posts.attributes.id);
  }

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerDivRight}>
          <img
            className={styles.headerLogo}
            alt=""
            src="../fandango-logo-white-1@2x.png"
            data-animate-on-scroll
          />
        </div>
     
          <div className={styles.headerInfo}>Upcoming Party Information</div>
       
      </header>
      {/* list of posts */}
      <ul className="ul">
        {[...posts].reverse().map((post) => {
          return (
            <div className={styles.content} key={post.id}>
              <div className={styles.dateLocation}>
                <div className={styles.postDate}>
                  {post.attributes.date_and_time}
                </div>
                <div className={styles.postTitle}>{post.attributes.title}</div>

                <div className={styles.postDetails}>
                  <div className={styles.postArtistDetails}>
                    <h1 className={styles.postArtistDetailsTitle1}>
                      <a href={post.attributes.artist_1_link}>
                        {post.attributes.artist_1}
                      </a>
                    </h1>
                    <h1 className={styles.postArtistDetailsTitle2}>
                      <a href={post.attributes.artist_2_link}>
                        {post.attributes.artist_2}
                      </a>
                    </h1>
                    <h1 className={styles.postArtistDetailsTitle3}>
                      <a href={post.attributes.artist_3_link}>
                        {post.attributes.artist_3}
                      </a>
                    </h1>
                    <h1 className={styles.postArtistDetailsTitle4}>
                      <a href={post.attributes.artist_4_link}>
                        {post.attributes.artist_4}
                      </a>
                    </h1>
                    <h1 className={styles.postArtistDetailsTitle5}>
                      <a href={post.attributes.artist_5_link}>
                        {post.attributes.artist_5}
                      </a>
                    </h1>
                    <h1 className={styles.postArtistDetailsTitle6}>
                      <a href={post.attributes.artist_6_link}>
                        {post.attributes.artist_6}
                      </a>
                    </h1>
                    <h1 className={styles.postArtistDetailsTitle7}>
                      <a href={post.attributes.artist_7_link}>
                        {post.attributes.artist_7}
                      </a>
                    </h1>
                    <h1 className={styles.postArtistDetailsTitle8}>
                      <a href={post.attributes.artist_8_link}>
                        {post.attributes.artist_8}
                      </a>
                    </h1>
                    <h1 className={styles.postArtistDetailsTitle9}>
                      <a href={post.attributes.artist_9_link}>
                        {post.attributes.artist_9}
                      </a>
                    </h1>
                    <h1 className={styles.postArtistDetailsTitle10}>
                      <a href={post.attributes.artist_10_link}>
                        {post.attributes.artist_10}
                      </a>
                    </h1>
                  </div>
                </div>
                <img
                  className={styles.poster}
                  alt=""
                  src={post.attributes.poster_url}
                />
              </div>
              <div className={styles.footer}>
                <h1 className={styles.guidelinesTitle}>COMMUNITY GUIDELINES</h1>
                <div className={styles.guidelinesDescription}>
                  Fandango is a community where we hope everyone feels a sense
                  of responsibility for each other’s comfort. We want a space
                  where every person feels safe to express their individuality.
                  Collectively creating a safe environment for free-expression
                  requires respect and awareness from all of us. Respect for
                  each other’s differences, personal space and pronoun.
                  Awareness for ourselves, our consumption and actions. Taking
                  care for ourselves and one and other. We have a zero-tolerance
                  policy for any homophobia, transphobia, xenophobia, sexism, or
                  racism. Any incidents of harassment or abuse of any kind will
                  result in immediate exit. Always contact our dedicated safe
                  space team if you need any help, support, or guidance. 💜
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default PostItem;
