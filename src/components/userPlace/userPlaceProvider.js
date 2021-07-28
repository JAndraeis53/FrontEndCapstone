import React, {useState, createContext, useContext } from "react"

export const UserPlaceContext = createContext()

export const UserPlaceProvider = (props) => {
    const [userplaces, setuserPlaces] = useState([])

    const getuserPlaces = () => {
        return fetch("http://localhost:8088/UserPlaces")
        .then(res => res.json())
        .then(setuserPlaces)
    }

    const getuserPlaceById = (id) => {
        return fetch(`http://localhost:8088/userPlaces/${id}`)
        .then(res => res.json())
    }
    
    const adduserPlaces = userplaceObj => {
        return fetch("http://localhost:8088/userPlaces", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userplaceObj)
        })
        .then(getuserPlaces)
    }
    
    const deleteuserPlace = userplaceId => {
        return fetch(`http://localhost:8088/places/${userplaceId}`,{
            method: "DELETE",
        }).then(getuserPlaces)
    }
    
    const updateuserPlace = (userplace) => {
        return fetch(`http://localhost:8088/places/${userplace.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userplace)
        })
        .then(getuserPlaces)
    }

    return (
        <UserPlaceContext.Provider value={{
            userplaces, getuserPlaces, adduserPlaces, deleteuserPlace, updateuserPlace, getuserPlaceById
        }}>
            {props.children}
        </UserPlaceContext.Provider>
    )
}