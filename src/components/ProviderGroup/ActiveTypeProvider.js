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

    return (
        <ActiveTypeContext.Provider value={{
            activeTypes, getActiveTypes, addActiveType
        }}>
            {props.children}
        </ActiveTypeContext.Provider>
    )
}
