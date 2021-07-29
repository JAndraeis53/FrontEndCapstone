import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ActiveTypeContext = createContext()

// This component establishes what data can be used.
export const ActiveTypeProvider = (props) => {
    const [activeTypes, setActiveTypes] = useState([])

    const getActiveTypes = () => {
        return fetch("http://localhost:8088/activeTypes")
        .then(res => res.json())
        .then(setActiveTypes)
    }

    const addActiveType = activeTypeObj => {
        return fetch("http://localhost:8088/activeTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(activeTypeObj)
        })
        .then(getActiveTypes)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ActiveTypeContext.Provider value={{
            activeTypes, getActiveTypes, addActiveType
        }}>
            {props.children}
        </ActiveTypeContext.Provider>
    )
}
