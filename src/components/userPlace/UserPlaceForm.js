import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { UserPlaceContext } from "./UserPlaceProvider"
import "./UserPlace.css"

export const UserPlaceForm = () => {
    const { UserPlaces, getUserPlaces, updateUserPlace } = useContext(UserPlaceContext)

    const [UserPlace, setUserPlace ] = useState({
        placeId: 0,
        userId: 0,
        review: ""
    })

    const { UserPlaceId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newUserPlace = { ...UserPlace } 
        let selectedVal = parseInt(event.target.value) 
            newUserPlace[event.target.id] = selectedVal
            setUserPlace(newUserPlace)
            console.log(UserPlace)
    }
    
    const handleClickSaveEdit = (event) => {
        event.preventDefault()
            if ( UserPlaceId ){
                updateUserPlace({
                    id: UserPlaceId,
                    placeId: UserPlace.place?.id,
                    userId: parseInt(sessionStorage.getItem("buster_user")),
                    review:""
                })
                .then(() => history.push("/UserPlaces/edit/:placesId(\d+)"))
            }
    }


    return (
        <>
        <form className="UserPlaceForm">
            <h2 className="UserPlaceForm__title">Leave a review?</h2>
            <fieldset>
                <div className="form-group-review">
                    <label htmlFor="title">review</label>
                    <input
                        type="text"
                        id="review"
                        required autoFocus
                        className="form=control"
                        placeholder="review"
                        value={UserPlace.review}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
        </form>
        <button className="btn btn-primary" onClick={handleClickSaveEdit}>
            Let's keep that in mind!
            </button>
    </>
    )

}