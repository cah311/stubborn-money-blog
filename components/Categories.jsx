import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-gray-100 border border-gray-200 shadow-lg rounded-md  p-8 mb-12 ">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block pt-1 pb-1 items-center w-full transition duration-700 ease hover:bg-gray-300 hover:bg-opacity-80  
           text-lg rounded-lg text-black px-5 cursor-pointer`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
