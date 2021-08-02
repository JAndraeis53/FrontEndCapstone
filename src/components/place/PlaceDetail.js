import React, { useContext, useEffect, useState } from "react"
import { PlaceContext } from "./PlaceProvider"
import { UserPlaceContext } from "../UserPlace/UserPlaceProvider"
import "./Place.css"
import { useParams, useHistory, Link } from "react-router-dom"

export const PlaceDetail = () => {
    const { getPlacesById, deletePlace } = useContext(PlaceContext)
    // const { addUserPlaces } = useContext(UserPlaceContext)

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

    // const handleSaveUserPlace = () => {
    //     addUserPlaces({
    //         placeId: place.id,
    //         userId: parseInt(sessionStorage.getItem("buster_user")),
    //     })
    // }

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


        {/* <button onClick={event => {handleSaveUserPlace()}}> Let's Go Out </button> */}
        
        <Link className="route-home" to="/">Let's Try again</Link>
        </section>
    )
    }
