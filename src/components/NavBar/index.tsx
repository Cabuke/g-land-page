
import React from "react";
import UmbrellaIcon  from "../../assets/Icons/umbrella-icon.svg";
import MyCustomHeader from "../Header";


const Navbar = () => {
    return (
<header className="bg-transparent sticky top-0 z-[20]  justify-between flex  mx-28 mr-28">
<div className="flex items-center">
<img src={UmbrellaIcon} alt="" className="w-[32px] h-[32px]" />
GM
</div>
    <MyCustomHeader />
    
</header>
    );
};

export default Navbar;