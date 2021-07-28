// import React, { useContext, createContext, useEffect, useState } from "react" 
// import { useHistory } from "react-router"
// // import { PlaceContext } from "./PlaceProvider"
// import { useParams } from "react-router-dom"

// export const VenueContext = createContext()

// export const VenueProvider = (props) => {
//     const [VenueTypes, setVenueTypes] = useState([])

//     const getVenueTypes = () => {
//         return fetch("http://localhost:8088/VenueTypes")
//         .then(res => res.json())
//         .then(setVenueTypes)
//     }
    
//     const getVenueById = (id) => {
//         return fetch(`http://localhost:8088/VenueTypes/${id}`)
//         .then(res => res.json())
//     }
    
//     const addVenues = venueObj => {
//         return fetch("http://localhost:8088/VenueTypes", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(venueObj)
//         })
//         .then(getVenueTypes)
//     }
    
//     const deleteVenue = venueId => {
//         return fetch(`http://localhost:8088/VenueTypes/${venueId}`,{
//             method: "DELETE",
//         }).then(getVenueTypes)
//     }
    
//     const updateVenue = (VenueType) => {
//         return fetch(`http://localhost:8088/VenueTypes/${VenueType.id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(VenueType)
//         })
//         .then(getVenues)
//     }

//     return (
//         <VenueContext.Provider value={{
//             venues, getVenueTypes, addVenues, deleteVenue, updateVenue, getVenueById
//         }}>
//             {props.children}
//         </VenueContext.Provider>
//     )
//     }

// export const VenueForm = () => {
//     const { venues, getVenues } = useContext(VenueContext)

    
// useEffect(() => {
//     getVenues();
// }, [])

//     const venueOption = `<ul class="choice--list venue--list">
//     ${venues.map(
//         (venue) => `<li class="choice-list-item venue--list-item">
//             <input type="radio" value="${VenueType.id}" name="VenueType"> ${VenueType.VenueSelect}
//         </li>`).join("")
//         } </ul>`

//     //return a string of HTML
//     return venueOption
// }