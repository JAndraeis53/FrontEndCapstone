import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EventTypeContext = createContext()

// This component establishes what data can be used.
export const EventTypeProvider = (props) => {
    const [eventTypes, setEventTypes] = useState([])

    const getEventTypes = () => {
        return fetch("http://localhost:8088/eventTypes")
        .then(res => res.json())
        .then(setEventTypes)
    }

    const addEventType = eventTypeObj => {
        return fetch("http://localhost:8088/eventTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventTypeObj)
        })
        .then(getEventTypes)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <EventTypeContext.Provider value={{
            eventTypes, getEventTypes, addEventType
        }}>
            {props.children}
        </EventTypeContext.Provider>
    )
}
