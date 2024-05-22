import React from "react";
import { UserInfoProps } from "../models/User";

const UserInfo = ({ name, age, email }: UserInfoProps) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    );
};

export default UserInfo;
