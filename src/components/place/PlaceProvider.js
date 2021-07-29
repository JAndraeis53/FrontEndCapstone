import React, {useState, createContext, useContext } from "react"

export const PlaceContext = createContext()

export const PlaceProvider = (props) => {
    const [places, setPlace] = useState([])

    const getPlace = () => {
        return fetch("http://localhost:8088/places?_expand=venueType&_expand=activeType&_expand=locationType&_expand=eventType")
        .then(res => res.json())
        .then(setPlace)
    }

    const getPlaceById = (id) => {
        return fetch(`http://localhost:8088/places/${id}?_expand=venueType&_expand=activeType&_expand=locationType&_expand=eventType`)
        .then(res => res.json())
    }
    
    const addPlace = placeObj => {
        return fetch("http://localhost:8088/places?_expand=venueType&_expand=activeType&_expand=locationType&_expand=eventType", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(placeObj)
        })
        .then(getPlace)
    }
    
    const deletePlace = placeId => {
        return fetch(`http://localhost:8088/places/${placeId}?_expand=venueType&_expand=activeType&_expand=locationType&_expand=eventType`,{
            method: "DELETE",
        }).then(getPlace)
    }
    
    const updatePlace = (place) => {
        return fetch(`http://localhost:8088/places/${place.id}?_expand=venueType&_expand=activeType&_expand=locationType&_expand=eventType`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(place)
        })
        .then(getPlace)
    }

    return (
        <PlaceContext.Provider value={{
            places, getPlace, addPlace, deletePlace, updatePlace, getPlaceById
        }}>
            {props.children}
        </PlaceContext.Provider>
    )
}