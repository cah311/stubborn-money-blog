import React from "react";
import moment from "moment";

const PostDetail = ({ post }) => {
  const renderNode = (node, index) => {
    switch (node.type) {
      case "heading-one":
        return (
          <h1 key={index} className="text-3xl font-semibold mb-4">
            {node.children.map((child, childIndex) =>
              renderNode(child, childIndex)
            )}
          </h1>
        );
      case "heading-two":
        return (
          <h2 key={index} className="text-2xl font-semibold mb-4">
            {node.children.map((child, childIndex) =>
              renderNode(child, childIndex)
            )}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {node.children.map((child, childIndex) =>
              renderNode(child, childIndex)
            )}
          </h3>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {node.children.map((child, childIndex) =>
              renderNode(child, childIndex)
            )}
          </h4>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {node.children.map((child, childIndex) =>
              renderNode(child, childIndex)
            )}
          </p>
        );
      case "link":
        return (
          <a
            key={index}
            href={node.url || node.href || "#"}
            target="_blank"
            className="font-bold text-red-700 italic "
          >
            {node.children.map((child, childIndex) =>
              renderNode(child, childIndex)
            )}
          </a>
        );
      case "image":
        return (
          <img
            key={index}
            alt={node.title}
            height={node.height}
            width={node.width}
            src={node.src}
          />
        );
      default:
        if (node.text) {
          let text = node.text;
          if (node.bold) {
            text = <b>{text}</b>;
          }
          if (node.italic) {
            text = <em>{text}</em>;
          }
          if (node.underline) {
            text = <u>{text}</u>;
          }
          return text;
        }
    }
  };

  return (
    <div className="bg-green-700 bg-opacity-80 shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-4">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center mb-4 lg:mb-0 w-fulll lg:w-auto mr-8">
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
        <h1 className="mb-8 text-4xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) =>
          renderNode(typeObj, index)
        )}
      </div>
    </div>
  );
};

export default PostDetail;
