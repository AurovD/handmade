import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { BlogPost } from 'src/shared/types/blog-post';
import { fetch } from 'src/shared/utils/fetch';
import { buildServerSideProps } from '../client/ssr/buildServerSideProps';
import { useFeature } from '../client/hooks/useFeature';



const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/dev/apply">Apply</Link>
      <Link href="/client/login">Apply</Link>
    </div>
  );
};

export default Home;

// type THomeProps = {
//   blogPosts: BlogPost[];
// };

// const Home: FC<THomeProps> = ({ blogPosts }) => {
//   const linkFeature = useFeature('blog_link');
//
//   return (
//     <div>
//       <h1>Home</h1>
//       {blogPosts.map(({ title, id }) => (
//         <div key={id}>
//           {linkFeature ? (
//             <>
//               {title}
//               <Link href={`/${id}`}> Link</Link>
//             </>
//           ) : (
//             <Link href={`/${id}`}>{title}</Link>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };
//
// export const getServerSideProps = buildServerSideProps<THomeProps | object>(
//   async () => {
//     const blogPosts = await fetch('/api/blog-posts');
//     return { blogPosts };
//   },
// );
//
// export default Home;
