import React, { useContext, useEffect, useState } from "react"
import { UserPlaceContext } from "./UserPlaceProvider"
import "./UserPlace.css"
import { useParams, useHistory } from "react-router-dom"

export const UserPlaceDetail = () => {
    const { getUserPlaceById, deleteUserPlace } = useContext(UserPlaceContext)

        const [UserPlace, setUserPlace] = useState({})
        const [isChecked, setIsChecked] = useState(false)

        const {UserPlaceId} = useParams();
        const history = useHistory()

    const handleRelease = () => {
        deleteUserPlace(UserPlace.id)
            .then(() => {
            history.push("/UserPlaces")
            })
        }
    
    const handleOnChange = () => {
        setIsChecked(!isChecked)
    }


    useEffect(() => {
        console.log("useEffect", UserPlaceId)
        getUserPlaceById(UserPlaceId)
        .then((response) => {
        setUserPlace(response)
        })
    }, [])

    return (
        <section className="UserPlace">
        <h3 className="UserPlace__name">Name: {UserPlace.place?.name}</h3>
        <div className="UserPlace__address"> Address: {UserPlace.place?.name}</div>
        <div className="UserPlace__description"> Description: {UserPlace.place?.description}</div>
        <div className="UserPlace__comments"> Review: {UserPlace.review} </div>
        {/* <div className="review-button">
            <label htmlFor="checkbox">I loved it! </label>
            <input type="checkbox" id="checkbox" value="Not bad" checked={isChecked} onChange={handleOnChange} />
        </div> */}

        <button onClick={() => {history.push(`/UserPlaces/edit/${UserPlace.id}`)}}>Leave a Review</button>
        <button onClick={handleRelease}>Delete Place</button>
        
        </section>
    )
    }
