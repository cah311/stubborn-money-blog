import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="container  mx-0 px-0 mb-8">
      <div className="relative">
        <div className="border-b w-screen inline-block md:flex md:justify-between md:items-center py-5 px-14 shadow-md">
          <div className="flex items-center">
            <Link href="/">
              <img
                className="h-20 cursor-pointer"
                src="/logoLong.svg"
                alt="Logo"
              />
            </Link>
            <button
              onClick={toggleDropdown}
              className="md:hidden md:text-2xl text-black hover:text-gray-500 font-semibold ml-2"
            >
              <img src="/menu.svg" alt="Menu" />
            </button>
          </div>
          <div className="hidden md:block">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="mt-6 text-black text-2xl ml-4 hover:text-gray-500 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {isDropdownVisible && (
          <div className="transition duration-600 absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 bg-gray-200 rounded-md shadow-lg w-11/12">
            <div className="flex flex-col items-center">
              {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <a className="block px-8 py-2 text-lg w-full text-black transition duration-600 hover:bg-gray-300 text-center font-semibold ">
                    {category.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
