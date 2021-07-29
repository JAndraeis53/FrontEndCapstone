import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const VenueTypeContext = createContext()

// This component establishes what data can be used.
export const VenueTypeProvider = (props) => {
    const [venueTypes, setVenueTypes] = useState([])

    const getVenueTypes = () => {
        return fetch("http://localhost:8088/venueTypes")
        .then(res => res.json())
        .then(setVenueTypes)
    }

    const addVenueType = venueTypeObj => {
        return fetch("http://localhost:8088/venueTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(venueTypeObj)
        })
        .then(getVenueTypes)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <VenueTypeContext.Provider value={{
            venueTypes, getVenueTypes, addVenueType
        }}>
            {props.children}
        </VenueTypeContext.Provider>
    )
}
