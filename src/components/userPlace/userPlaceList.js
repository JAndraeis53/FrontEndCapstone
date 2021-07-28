import React, { useContext, useEffect } from "react";
import { UserPlaceCard } from "./UserPlaceCard";
import "./UserPlace.css";
import { UserPlaceContext } from "./UserPlaceProvider";
import { useHistory } from "react-router-dom";

export const UserPlaceList = () => {
const { UserPlaces, getUserPlaces } = useContext(UserPlaceContext);
const history = useHistory();

useEffect(() => {
    getUserPlaces();
}, []);

console.log(UserPlaces)

return (
    <>
    <h2>Users Places</h2>
    
    <div className="UserPlaces">
        {UserPlaces.map((UserPlace) => {
            if (
                UserPlace.userId == sessionStorage.getItem("buster_user")
            ){
        return <UserPlaceCard key={UserPlace.id} UserPlace={UserPlace} />;
        }})}
    </div>
    </>
);
};
