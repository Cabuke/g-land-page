import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  ArrowUp,
} from "@phosphor-icons/react";

interface CardDetails {
  icon?: JSX.Element;
  title: string;
  description: string;
  expandedDescription: string;
  iconBgcolor: string;
  image?: string;
}

const Card: React.FC<CardDetails> = ({
  icon,
  title,
  description,
  iconBgcolor,
  image,
  expandedDescription,
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <>
      <section
        className={`dark:bg-[#000000] dark:border-[#282828] card-details border border-[#D2E6E7] flex-1 basis-1/3 xl:w-[328px] h-[328px] w-auto cursor-pointer flex flex-col p-5 rounded-2xl bg-slate-50 hover:bg-slate-400 dark:hover:bg-[#7D7BEB]
      ${
        expanded
          ? "relative sm:absolute w-full sm:w-auto sm:z-10  xl:w-auto"
          : "relative h-[328px] flex-grow"
      }
      transition-all duration-500 ease-in-out transform ${
        expanded ? "scale-105" : "scale-100"
      }`}
        onClick={toggleExpand}
      >
        <span
          className="w-[72px] h-[62px] min-h-[62px] rounded-2xl flex  justify-center items-center"
          style={{ background: iconBgcolor }}
        >
          {icon}
          <img src={image} width={42} color="#FFF" />
        </span>

        <h3 className="dark:text-[#FAFAFA] font-sf pt-2 text-xl">{title}</h3>

        <span className="dark:text-[#FAFAFA] font-sf pt-10 transition-all duration-500 ease-in-out overflow-hidden">
          {expanded ? expandedDescription : description}
        </span>
        <span className="mt-auto self-end ">
          {/* Condição para telas maiores */}
          <span className="h-8 font-sf hidden md:flex items-center justify-center dark:bg-gray-900 dark:border-[#4745CA] bg-slate-200 rounded-full border px-[8px]  whitespace-nowrap text-center dark:text-[#FAFAFA]">
            {expanded ? (
              <>
                <ArrowLeft size={16} className="mr-2 dark:text-[#FAFAFA]" />
                Ver menos
              </>
            ) : (
              <>
                Ver mais
                <ArrowRight size={16} className="ml-2 dark:text-[#FAFAFA]" />
              </>
            )}
          </span>

          {/* Condição para telas menores */}
          <span className="flex md:hidden items-center justify-center bg-slate-200 rounded-full border p-1 text-center dark:bg-gray-900 dark:border-[#4745CA]">
            {expanded ? (
              <ArrowUp size={16} className="dark:text-[#FAFAFA]" />
            ) : (
              <ArrowDown size={16} className="dark:text-[#FAFAFA]" />
            )}
          </span>
        </span>
      </section>
    </>
  );
};

export default Card;
