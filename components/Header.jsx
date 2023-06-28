import React, { useState, useEffect } from "react";

import Link from "next/link";

import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-0 px-0 mb-8">
      <div className="border-b w-screen inline-block border-black-500/75 py-5 px-14 shadow-md">
        <div className="md:float-left block">
          <Link href="/">
            {/* <span className="cursor-pointer font-bold text-4xl text-black">
              Stubborn Money
            </span> */}
            <img className="h-20" src="/logoLong.svg" />
          </Link>
        </div>
        <div className="hidden md:float-left md:contents mr-1">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className=" md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
