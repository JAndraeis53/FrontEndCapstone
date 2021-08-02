import React, { useContext, useEffect, useState } from "react"
import { PlaceContext } from "./PlaceProvider"
import "./Place.css"
import { useParams, useHistory } from "react-router-dom"

export const PlaceDetail = () => {
    const { getPlacesById, deletePlace } = useContext(PlaceContext)

        const [place, setPlace] = useState({})
        console.log(place)
        const {placeId} = useParams();
        const history = useHistory()

    const handleRelease = () => {
        deletePlace(place.id)
            .then(() => {
            history.push("/Places")
            })
        }

    useEffect(() => {
        console.log("useEffect", placeId)
        getPlacesById(placeId)
        .then((response) => {
        setPlace(response)
        })
    }, [])

    return (
        <section className="Place">
        <h3 className="Place__name">Name: {place.name}</h3>
        <div className="Place__address"> Address: {place.name}</div>
        <div className="Place__description"> Description: {place.description}</div>
        <div className="Place__comments"> Decision Time </div>


        {/* <button onClick={() => {history.push(`/UserPlaces/edit/${place.id}`)}}>Edit</button> */}
        {/* <button onClick={handleRelease}>-</button> */}

        </section>
    )
    }
