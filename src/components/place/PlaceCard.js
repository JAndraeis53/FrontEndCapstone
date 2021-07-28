// import React, { useContext } from "react" 
// import { useHistory } from "react-router-dom"
// import "./Place.css"
// import { PlaceContext } from "./PlaceProvider"

// export const PlaceCard = ({ place }) => {

//     const { deletePlace, updatePlace } = useContext(PlaceContext)
//     const history = useHistory()

//     const handleCheckBox = () => {
//         updatePlace({
//             id: place.id, 
//             name: place.name,
//             address: place.address,
//             description: place.description,
//             EnergyType: place.ActiveTypeId,
//             VenueType: place.VenueTypeId,
//             EventType: place.EventTypeId,
//             LocationType: place.LocationTypeId
//         })
//         .then(() => history.push("/places"))
//     }


//     return (
//         <section className="place">
//         <section className="placeList" id="placeId">
//             <h3 className="place__name">Place: {place.name}</h3>
//             <div className="place__address">Address: {place.address}</div>
//         </section>
//         <div className="placeButtons"> 
//             <button onClick={() => { deletePlace(place.id) }}>Delete Place</button>
//             <button className="placeButton" onClick={() => {
//                 history.push(`/places/edit/${place.id}`)
//             }}>Edit</button>
//             <label htmlFor="checkbox">Mark as complete</label>
//             <input type="checkbox" id="checkbox" unchecked="" onChange={handleCheckBox} />
//         </div>

//     </section>
//     )
// }