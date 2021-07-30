import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const LocationTypeContext = createContext()

// This component establishes what data can be used.
export const LocationTypeProvider = (props) => {
    const [locationTypes, setLocationTypes] = useState([])

    const getLocationTypes = () => {
        return fetch("http://localhost:8088/locationTypes")
        .then(res => res.json())
        .then(setLocationTypes)
    }

    const addLocationType = locationTypeObj => {
        return fetch("http://localhost:8088/locationTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationTypeObj)
        })
        .then(getLocationTypes)
    }

    return (
        <LocationTypeContext.Provider value={{
            locationTypes, getLocationTypes, addLocationType
        }}>
            {props.children}
        </LocationTypeContext.Provider>
    )
}
