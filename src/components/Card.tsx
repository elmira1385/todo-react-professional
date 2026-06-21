import React from "react";
type TCard={
    title:string,
    count:string,
    children:React.ReactNode
    color:string
    border?:string
    borderColor?:string
}
const Card = ({title,count,children,color,border,borderColor}:TCard) => {
  return (
    <div className={`flex gap-50 p-4 ${border} ${borderColor}`}>
      <div className="flex flex-col justify-center items-start gap-2 ">
        <p className="text-tx-100 font-medium uppercase">{title}</p>
        <p className={` text-3xl font-bold uppercase ${color}`}>{count}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
