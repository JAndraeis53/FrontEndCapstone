import React, { useContext, useEffect, useState } from "react"
import { UserPlaceContext } from "./UserPlaceProvider"
import "./UserPlace.css"
import { useParams } from "react-router-dom"

export const UserPlaceDetail = () => {
    const { getUserPlaceById } = useContext(UserPlaceContext)

        const [UserPlace, setUserPlace] = useState({})

        const {UserPlaceId} = useParams();

    useEffect(() => {
        console.log("useEffect", UserPlaceId)
        getUserPlaceById(UserPlaceId)
        .then((response) => {
        setUserPlace(response)
        })
    }, [])

    return (
        <section className="UserPlace">
        <h3 className="UserPlace__name">Name: {UserPlace.id}</h3>
        <div className="UserPlace__address"> Address: {UserPlace.place?.name}</div>
        <div className="UserPlace__description"> Description: {UserPlace.placeId}</div>
        </section>
    )
    }
