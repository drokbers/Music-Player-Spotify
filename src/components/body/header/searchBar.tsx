"use client"
import React, { useState } from "react";
import Image from "next/image";

import { searchIcon } from "@/assets/Icons";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const searchHandler = () => {
    null;
  };
  return (
    <div className="relative hidden xl:flex items-center">
      <input
        className="cursor-auto w-40  lg:w-48 h-8  bg-strongRed rounded-3xl pl-3"
        type="search"
        placeholder="Search here"
        onChange={searchHandler}
        value={searchInput}
      />
      <div className="absolute inset-y-0 w-5  right-3 flex">
        <Image
          src={searchIcon}
          width={500}
          height={500}
          alt="serach icon"
        />
      </div>
    </div>
  );
};
export default SearchBar;
