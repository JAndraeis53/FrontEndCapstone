import React, { useContext, useEffect, useState } from "react" 
import { useHistory } from "react-router"
import { useParams } from "react-router-dom"
import { PlaceContext } from "./PlaceProvider"
import { UserPlaceContext } from "../UserPlace/UserPlaceProvider"
import { EventTypeContext } from "../ProviderGroup/EventTypeProvider"
import { VenueTypeContext } from "../ProviderGroup/VenueTypeProvider"
import { LocationTypeContext } from "../ProviderGroup/LocationTypeProvider"
import { ActiveTypeContext } from "../ProviderGroup/ActiveTypeProvider"
import "./Place.css"
import "bootstrap/dist/css/bootstrap.min.css"

export const PlaceForm = () => {
    const { places, addPlace, getPlaces, getPlaceById } = useContext(PlaceContext)
    const { eventTypes, getEventTypes} = useContext(EventTypeContext)
    const { venueTypes, getVenueTypes } = useContext(VenueTypeContext)
    const { locationTypes, getLocationTypes } = useContext(LocationTypeContext)
    const { activeTypes, getActiveTypes } = useContext(ActiveTypeContext)

    const [selection, setSelection ] = useState({
        activeTypeId: 0,
        venueTypeId: 0,
        eventTypeId: 0,
        locationTypeId: 0
    })

    const [place, setPlace] = useState({});

    const [isLoading, setIsLoading] = useState(true)
    const { taskId } = useParams
    const history = useHistory()

    
    const handleControlledInputChange = (event) => {
        const newSelection = { ...selection } 
        let selectedVal = parseInt(event.target.value) 
            newSelection[event.target.id] = selectedVal
            setSelection(newSelection)
            console.log(selection)
    }





    const handleClickSavePlace = (event) => {
        event.preventDefault() 
            if (selection.activeTypeId === "" || selection.venueTypeId === "" || selection.locationTypeId === "" || selection.eventTypeId === "") {
                window.alert("Please fill in all fields")}
            
                else {const foundPlace = places.find( place => place.activeTypeId === selection.activeTypeId && place.locationTypeId === selection.locationTypeId && place.venueTypeId === selection.venueTypeId && place.eventTypeId === selection.eventTypeId )
                history.push(`/places/detail/${foundPlace.id}`)
            }}


    // const handleClickFindPlace = (event) => {
    //     event.preventDefault()
    //     const getMyPlaces = getPlace()

    //     if(selection.activeTypeId === "" || selection.venueTypeId === "" || selection.locationTypeId === "" || selection.eventTypeId === "") {
    //         window.alert("Please fill in all fields")
    //     } else {
    //         setIsLoading(true);
    //     } if (selection.Id){

    //     } getMyPlaces.find(getMyPlace => getMyPlace.id )






        useEffect(() => {
            getVenueTypes()
            getActiveTypes()
            getLocationTypes()
            getEventTypes()
            getPlaces()
            } 
            , [])

    return (
        <>
        <form className="placeForm">
            <h2 className="placeForm__title">Let's plan the night out</h2>
                <fieldset>
                    <div className="form-group-active">
                        <label htmlFor="title">active</label>
                        <select
                            id="activeTypeId" 
                            required autoFocus 
                            className="form-control" 
                            placeholder="Event" 
                            value={selection.activeTypeId} 
                            onChange={handleControlledInputChange} 
                        >
                        <option value="0"> </option>
                        {activeTypes.map((r) => ( 
                        <option key={r.id} value={r.id}>
                            {r.activeSelect}
                        </option>
                        ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group-venue">
                        <label htmlFor="title">Inside or Outside</label>
                        <select
                            id="venueTypeId" 
                            required autoFocus 
                            className="form-control" 
                            placeholder="Indoor Venue" 
                            value={selection.venueTypeId} 
                            onChange={handleControlledInputChange} 
                        >
                        <option value="0"> </option>
                        {venueTypes.map((l) => ( 
                        <option key={l.id} value={l.id}>
                            {l.venueSelect}
                        </option>
                        ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group-event">
                        <label htmlFor="title">Event</label>
                        <select
                            id="eventTypeId" 
                            required autoFocus 
                            className="form-control" 
                            placeholder="event" 
                            value={selection.eventTypeId} 
                            onChange={handleControlledInputChange} 
                        >
                        <option value="0"> </option>
                        {eventTypes.map((z) => ( 
                        <option key={z.id} value={z.id}>
                            {z.eventSelect}
                        </option>
                        ))}
                        </select>
                    </div>
                </fieldset>
                
                <fieldset>
                    <div className="form-group-location">
                        <label htmlFor="title">location</label>
                        <select
                            id="locationTypeId" 
                            required autoFocus 
                            className="form-control" 
                            placeholder="location" 
                            value={selection.locationTypeId} 
                            onChange={handleControlledInputChange} 
                        >
                        <option value="0"> </option>
                        {locationTypes.map((z) => ( 
                        <option key={z.id} value={z.id}>
                            {z.locationSelect}
                        </option>
                        ))}
                        </select>
                    </div>
                </fieldset>
            <button className="btn btn-primary" onClick={handleClickSavePlace}>
            Ready to make a date?
            </button>
        </form>
    </>
    )

}