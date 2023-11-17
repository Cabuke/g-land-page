
import React from "react";

interface CardDetails {
    icon?: JSX.Element;
    title: string;
    description: string;
    color: string;
    image?: string;
}

const Card = ({
    icon,
    title,
    description,
    color,
    image,
    
}) => {
    return (
        <section className="card-details shadow-2xl z-10 h-[328px] max-w-[328px] flex flex-col p-9 rounded-2xl bg-slate-50 w-1/3">
            <span className="w-[72px] h-[62px] rounded-2xl flex  justify-center items-center" style={{background: color}}>
                {icon}
                <img src={image} width={42}/>
            </span>

            <h3 className=" pt-2 text-xl">{title}</h3>

            <span>
                {description}
            </span>

        </section>
    )
} 

export default Card;