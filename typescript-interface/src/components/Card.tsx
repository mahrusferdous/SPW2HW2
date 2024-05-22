import React, { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

const Card = ({ children }: CardProps) => {
    return <div>{children || "No Children"}</div>;
};

export default Card;
