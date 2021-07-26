import React, {useState, createContext, useContext } from "react"

export const PlaceContext = createContext()

export const PlaceProvider = (props) => {
    const [places, setPlaces] = useState([])

    const getPlaces = () => {
        return fetch("http://localhost:8088/places")
        .then(res => res.json())
        .then(setPlaces)
    }

    const getPlaceById = (id) => {
        return fetch(`http://localhost:8088/places/${id}`)
        .then(res => res.json())
    }
    
    const addPlaces = placeObj => {
        return fetch("http://localhost:8088/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(placeObj)
        })
        .then(getPlaces)
    }
    
    const deletePlace = placeId => {
        return fetch(`http://localhost:8088/places/${placeId}`,{
            method: "DELETE",
        }).then(getPlaces)
    }
    
    const updatePlace = (place) => {
        return fetch(`http://localhost:8088/places/${place.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(place)
        })
        .then(getPlaces)
    }

    return (
        <PlaceContext.Provider value={{
            places, getPlaces, addPlaces, deletePlace, updatePlace, getPlaceById
        }}>
            {props.children}
        </PlaceContext.Provider>
    )
}