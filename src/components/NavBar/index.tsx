import React, { useState } from "react";
import MyCustomHeader from "../Header";
import { Brain } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <header className="bg-transparent sticky justify-between flex">
      <div
        className="
      flex items-center 
      dark:text-[#a47dbe] 
      cursor-pointer 
      px-2 py-2"
      >
        <Brain size={42} />
      </div>
      <MyCustomHeader />
    </header>
  );
};

export default Navbar;
