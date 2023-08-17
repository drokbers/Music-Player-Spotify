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
    <div className="relative items-center pl-3">
      <input
        className="cursor-auto w-64 h-8  bg-strongRed rounded-3xl pl-3"
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
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};
export default SearchBar;
