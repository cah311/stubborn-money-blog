import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="bg-gray-100 border border-gray-200 shadow-lg rounded-md p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-md "
        />
      </div>
      <h1 className="transition duration-600 text-center mb-8 cursor-pointer hover:text-gray-500 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="bloc lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-fulll lg:w-auto mr-8">
          <img
            alt={post.author.name}
            height="60px"
            width="60px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-black ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="text-center text-lg text-black font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span
            className="transition duration-700 ease hover:bg-gray-300 hover:bg-opacity-80  inline-block 
           text-lg rounded-full text-black px-8 py-3 cursor-pointer"
          >
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
