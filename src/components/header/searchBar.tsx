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
    <div className="relative flex  items-center">
      <input
        className="hidden cursor-auto py-5   xxs:w-24 xs:w-32 md:w-32  xl:w-48 h-8  bg-strongRed rounded-3xl pl-3"
        type="search"
        placeholder="Search"
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
