import React, { useContext, useEffect } from "react";
import { UserPlaceCard } from "./UserPlaceCard";
import "./UserPlace.css";
import { UserPlaceContext } from "./UserPlaceProvider";
import { useHistory } from "react-router-dom";

export const UserPlaceList = () => {
const { userplaces, getuserPlaces } = useContext(UserPlaceContext);
const history = useHistory();

useEffect(() => {
    getuserPlaces();
}, []);

return (
    <>
    <h2>Users Places</h2>
    
    <div className="places">
        {/* the "if" statement code inside the .map makes the messages private */}
        {userplaces.map((userplace) => {
        return <UserPlaceCard key={userplace.id} place={userplace} />;
        })}
    </div>
    </>
);
};
