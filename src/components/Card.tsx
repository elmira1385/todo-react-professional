import React from "react";
type TCard={
    title:string,
    count:number,
    children:React.ReactNode
    color:string
    darsad?:string
    border?:string
    borderColor?:string
}
const Card = ({title,count,children,color,border,borderColor,darsad}:TCard) => {
  return (
    <div className={`flex gap-50 p-4 ${border} ${borderColor}`}>
      <div className="flex flex-col justify-center items-start gap-2 ">
        <p className="text-tx-100 font-medium uppercase">{title}</p>
        <p className={` text-3xl font-bold uppercase ${color}`}>{count} <span>{darsad}</span></p>
      </div>
      {children}
    </div>
  );
};

export default Card;
