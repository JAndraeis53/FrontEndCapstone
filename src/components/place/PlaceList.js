    import React, { useContext, useEffect } from "react";
    import { PlaceCard } from "./PlaceCard";
    import "./Place.css";
    import { PlaceContext } from "./PlaceProvider";
    import { useHistory } from "react-router-dom";

    export const PlaceList = () => {
    const { places, getPlaces } = useContext(PlaceContext);
    const history = useHistory();

    useEffect(() => {
        getPlaces();
    }, []);

    return (
        <>
        <h2>Places</h2>
        <button
            className="placeButtons"
            onClick={() => {
            history.push("/places/create");
            }}
        >
            Add place
        </button>
        <div className="places">
            {/* the "if" statement code inside the .map makes the messages private */}
            {places.map((place) => {
            return <PlaceCard key={place.id} place={place} />;
            })}
        </div>
        </>
    );
    };
