import { useEffect, useState } from 'react';
import { sanityClient } from '../lib/sanity';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../lib/sanityImage';
import styles from '../styles/Actualites.module.css';
import TitlePage from '../components/atoms/TitlePage';

const query = `
*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  content,
  coverImage
}
`;

export default function Actulites() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient.fetch(query).then(setPosts);
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);


  return (
    <div className={styles.container}>
      <TitlePage label="News" />

      {posts.map((post) => (
        <article key={post._id} className={styles.article}>
          <h1>{post.title}</h1>
          {/* <p>{new Date(post.publishedAt).toLocaleDateString()}</p> */}
          <PortableText value={post.content} />
          {/* <img src={urlFor(post.coverImage).width(50).url()} /> */}
        </article>
      ))}
    </div>
  );
}