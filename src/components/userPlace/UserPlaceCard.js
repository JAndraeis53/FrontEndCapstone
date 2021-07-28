import React from "react"
import { Link } from "react-router-dom"
import "./UserPlace.css"

export const UserPlaceCard = ({ UserPlace }) => (
    <section className="UserPlace" >
        <h3 className="UserPlace_name">
        <Link to={`/UserPlaces/detail/${UserPlace.id}`}>
            { UserPlace.id }. {UserPlace.place?.name}
        </Link>
        </h3>
        <div className="UserPlace_address">Address: { UserPlace.place?.address}</div>
    </section>
)

// import userEvent from "@testing-library/user-event"
// import React, { useContext } from "react" 
// import { useHistory } from "react-router-dom"
// import "./UserPlace.css"
// import { UserPlaceContext } from "./UserPlaceProvider"

// export const UserPlaceCard = ({ place }) => {

//     const { deleteuserPlace, updateuserPlace } = useContext(UserPlaceContext)
//     const history = useHistory()

//     const handleCheckBox = () => {
//         updateuserPlace({
//             id: place.id, 
//             PlacesId: place.id
//         })
//         .then(() => history.push("/UserPlaces"))
//     }


//     return (
//         <section className="place">
//         <section className="placeList" id="placeId">
//             <h3 className="place__name">Place: {place.name}</h3>
//             <div className="place__address">Address: {place.address}</div>
//         </section>
//         {/* <div className="placeButtons"> 
//             <button onClick={() => { deletePlace(place.id) }}>Delete Place</button>
//             <button className="placeButton" onClick={() => {
//                 history.push(`/places/edit/${place.id}`)
//             }}>Edit</button>
//             <label htmlFor="checkbox">Mark as complete</label>
//             <input type="checkbox" id="checkbox" unchecked="" onChange={handleCheckBox} />
//         </div> */}

//     </section>
//     )
// }