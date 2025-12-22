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

export default function Actualites() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient.fetch(query).then(setPosts);
  }, []);

  useEffect(() => {
    document.title = 'LA VIRÉE | Actualités';
  }, []);


  return (
    <div className={styles.container}>
      <TitlePage label="News" />

      {posts.map((post) => (
        <article key={post._id} className={styles.article}>
          <h1>{post.title}</h1>
          <img src={urlFor(post.coverImage).url()} />
          {/* <p>{new Date(post.publishedAt).toLocaleDateString()}</p> */}
          <PortableText value={post.content} />
        </article>
      ))}
    </div>
  );
}