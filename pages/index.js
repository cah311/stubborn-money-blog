/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";

const posts = [
  { title: "React Testing", excerpt: "Learn Rest Testing" },
  { title: "React with Tailwind", excerpt: "Learn Rest with Tailwind" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>Stubborn Money</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-12">
        {posts.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
    </div>
  );
}
