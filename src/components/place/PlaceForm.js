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
    const { addPlace, getPlace, getPlaceById } = useContext(PlaceContext)
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

    const [place, setPlace] = useState({
        name: "",
        address: "",
        description: "",
        ActiveTypeId: 0,
        VenueTypeId: 0,
        EventTypeId: 0,
        LocationTypeId: 0
    });

    const [isLoading, setIsLoading] = useState(true)
    const { taskId } = useParams
    const history = useHistory()

    
    const handleControlledInputChange = (event) => {
        const newSelection = { ...selection } 
        let selectedVal = event.target.value 
            newSelection[event.target.id] = selectedVal
            setSelection(newSelection)
            console.log(selection)
    }





    const handleClickSavePlace = (event) => {
        event.preventDefault() 

            if (selection.activeTypeId === "" || selection.venueTypeId === "" || selection.locationTypeId === "" || selection.eventTypeId === "") {
                window.alert("Please fill in all fields")
            
            } else {
                setIsLoading(true);
                
            } if (selection.Id){
                getPlace({
                    id: place.id, 
                    ActiveType: selection.activeTypeId,
                    VenueType: selection.venueTypeId,
                    EventType: selection.eventTypeId,
                    LocationType: selection.locationTypeId
                    
                })
                .then(() => history.push("/UserPlaces"))
            }}

        useEffect(() => {
            getVenueTypes()
            getActiveTypes()
            getLocationTypes()
            getEventTypes()
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

                {/* <fieldset>
                <div className="form-group-venue"> 
                <label htmlFor="title">Inside or Outside</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioVenue" 
                        id="inlineRadioVenueIndoor" value="optionVenueIndoor"/>
                        <label class="form-check-label" for="inlineRadioVenueIndoor">Indoor</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioVenue" id="inlineRadioVenueOutdoor" value="optionVenueOutdoor"/>
                        <label class="form-check-label" for="inlineRadioVenueOutdoor">Outdoor</label>
                    </div>
                </div>
                </fieldset>
                <fieldset>
                <div className="form-group-active"> 
                <label htmlFor="title">active type</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioActive" 
                        id="inlineRadioActiveActive" value="optionActiveActive"/>
                        <label class="form-check-label" for="inlineRadioActiveActive">Active</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioActive" id="inlineRadioActiveCalm" value="optionActiveCalm"/>
                        <label class="form-check-label" for="inlineRadioActiveCalm">Calm</label>
                    </div>
                </div>
                </fieldset>
                <fieldset>
                <div className="form-group-event"> 
                <label htmlFor="title">event</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioEvent" 
                        id="inlineRadioEventFood" value="optionEventFood"/>
                        <label class="form-check-label" for="inlineRadioEventFood">Food</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioEvent" id="inlineRadioEventPerformance" value="optionEventPerformance"/>
                        <label class="form-check-label" for="inlineRadioEventPerformance">Performance</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioEvent" id="inlineRadioEventArt" value="optionEventArt"/>
                        <label class="form-check-label" for="inlineRadioEventArt">Art</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioEvent" id="inlineRadioEventDrinks" 
                        value="optionEventDrinks"/>
                        <label class="form-check-label" for="inlineRadioEventDrinks">Drinks</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioEvent" id="inlineRadioEventSports" 
                        value="optionEventSports"/>
                        <label class="form-check-label" for="inlineRadioEventSports">Sports</label>
                    </div>
                </div>
                </fieldset>
                <fieldset>
                <div className="form-group-location"> 
                <label htmlFor="title">Location</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioLocation" 
                        id="inlineRadioLocationDowntown" value="optionLocationDowntown"/>
                        <label class="form-check-label" for="inlineRadioLocationDowntown">Downtown</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioLocation" id="inlineRadioLocationWestEnd" value="optionLocationWestEnd"/>
                        <label class="form-check-label" for="inlineRadioLocationWestEnd">West End</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioLocation" id="inlineRadioLocationEastNashville" value="optionLocationEastNashville"/>
                        <label class="form-check-label" for="inlineRadioLocationEastNashville">East Nashville</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioLocation" id="inlineRadioLocationGulch" 
                        value="optionLocationGulch"/>
                        <label class="form-check-label" for="inlineRadioLocationGulch">Gulch</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioLocation" id="inlineRadioLocationNorthNashville" 
                        value="optionLocationNorthNashville"/>
                        <label class="form-check-label" for="inlineRadioLocationNorthNashville">NorthNashville</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioLocation" id="inlineRadioLocationMidtown" 
                        value="optionLocationMidtown"/>
                        <label class="form-check-label" for="inlineRadioLocationMidtown">Midtown</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioLocation" id="inlineRadioLocationGermantown" 
                        value="optionLocationGermantown"/>
                        <label class="form-check-label" for="inlineRadioLocationGermantown">Germantown</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioLocation" id="inlineRadioLocationCityLimits" 
                        value="optionLocationCityLimits"/>
                        <label class="form-check-label" for="inlineRadioLocationCityLimits">City Limits</label>
                    </div>
                </div>
                </fieldset> */}



        {/* <fieldset>
            <div className="form-group">
            <label htmlFor="synopsis">Article synopsis:</label>
            <input type="text" id="synopsis" required autoFocus className="form-control" placeholder="Article synopsis" value={article.synopsis} onChange={handleControlledInputChange} />
            </div>
        </fieldset> */}

            <button className="btn btn-primary" onClick={handleClickSavePlace}>
            Ready to make a date?
            </button>
        </form>
    </>
    )

}