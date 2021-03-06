import React, {useState, createContext, useContext } from "react"

export const UserPlaceContext = createContext()

export const UserPlaceProvider = (props) => {
    const [UserPlaces, setUserPlaces] = useState([])

    const getUserPlaces = () => {
        return fetch("http://localhost:8088/UserPlaces?_expand=place")
        .then(res => res.json())
        .then(setUserPlaces)
    }

    const getUserPlaceById = (id) => {
        return fetch(`http://localhost:8088/UserPlaces/${id}?_expand=place`)
        .then(res => res.json())
    }
    
    const addUserPlace = UserPlaceObj => {
        return fetch("http://localhost:8088/UserPlaces?_expand=place", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(UserPlaceObj)
        })
        .then(getUserPlaces)
    }
    
    const deleteUserPlace = UserPlaceId => {
        return fetch(`http://localhost:8088/UserPlaces/${UserPlaceId}`,{
            method: "DELETE",
        }).then(getUserPlaces)
    }
    
    const updateUserPlace = (UserPlace) => {
        return fetch(`http://localhost:8088/UserPlaces/${UserPlace.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(UserPlace)
        })
        .then(getUserPlaces)
    }

    return (
        <UserPlaceContext.Provider value={{
            UserPlaces, getUserPlaces, addUserPlace, deleteUserPlace, updateUserPlace, getUserPlaceById
        }}>
            {props.children}
        </UserPlaceContext.Provider>
    )
}