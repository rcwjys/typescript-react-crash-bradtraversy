import React from "react";

type TCardProps = {
  bg?: string;
  children: React.ReactNode;
};

const Card = ({ bg = "bg-gray-100", children }: TCardProps) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
