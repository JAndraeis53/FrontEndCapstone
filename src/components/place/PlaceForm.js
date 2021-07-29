import React, { useContext, createContext, useEffect, useState } from "react" 
import { useHistory } from "react-router"
import { PlaceContext } from "./PlaceProvider"
import { EventTypeContext } from "../ProviderGroup/EventTypeProvider"
import { VenueTypeContext } from "../ProviderGroup/VenueTypeProvider"
import "./Place.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import { useParams } from "react-router-dom"
// import { VenueContext } from "./VenueProvider"

export const PlaceForm = () => {
    const { addPlace } = useContext(PlaceContext)
    const { eventTypes, getEventTypes} = useContext(EventTypeContext)
    const { venueTypes, getVenueTypes } = useContext(VenueTypeContext)
    // const { addVenues, updateVenue, getVenueTypes, getVenueById } = useContext(VenueContext)

    const [place, setPlaces] = useState({
        name: "",
        address: "",
        description: "",
        ActiveTypeId: 0,
        VenueTypeId: 0,
        EventTypeId: 0,
        LocationTypeId: 0
    });

    const history = useHistory()

    useEffect(() => {
        getVenueTypes().then(getEventTypes)
    }, [])


    // const [isLoading, setIsLoading] = useState(true)
    // const { placeId } = useParams()
    // const history = useHistory(); 
    
    const handleControlledInputChange = (event) => {
        const newPlace = { ...place } 
        let selectedVal = event.target.value 

        // if (event.target.id.includes("Id")) {
        //     selectedVal = parseInt(selectedVal)
        // }
            newPlace[event.target.id] = selectedVal
            setPlaces(newPlace)
    }

        
    const handleClickSavePlace = (event) => {
        event.preventDefault() 

        const VenueTypeId = parseInt(place.VenueTypeId)

            // if (place.name === "" || place.date === "") {
            //     window.alert("Please fill in all fields")
            
            // } else {
            //     setIsLoading(true);
                
            // } if  (placeId){
            //     updatePlace({
            //         id: place.id, 
            //         name: place.name,
            //         address: place.address,
            //         description: place.description,
            //         EnergyType: place.ActiveTypeId,
            //         VenueType: place.VenueTypeId,
            //         EventType: place.EventTypeId,
            //         LocationType: place.LocationTypeId
                    
            //     })
            //     .then(() => history.push("/places"))
            // } else {
            //         addPlaces({
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
            const newPlace = {
                name: place.name,
                address: place.address,
                description: place.description,
                ActiveTypeId: 0,
                VenueTypeId: 0,
                EventTypeId: 0,
                LocationTypeId: 0
                
            }
            addPlace(newPlace)
                .then(() => history.push("/"))

            }
            
    //         useEffect(() => {
    //             getPlaces().then(() => {
    //                 if (placeId) {
    //                     getPlaceById(placeId)
    //                     .then( place => {
    //                         setPlaces(place)
    //                         setIsLoading(false)
    //                     })
    //                 } else {
    //                     setIsLoading(false)
    //                 }
    //             })
    //         }, [])

    //     return(
    //     <form className="taskForm"> 
    //         <h2 className="taskForm__Title">Let's plan a night out</h2>
    //         <fieldset>
    //             <div className="form-group">
    //                 <label htmlFor="name">First Question: How's the weather? </label>
    //                 <input type="radio" 
    //                 value= "Indoor"
    //                 id="Indoor" 
    //                 required autoFocus className="form-control" 
    //                 placeholder="Venue Type" 
    //                 // value={VenueType.VenueSelect} 
    //                 onChange={handleControlledInputChange} />
    //             </div>
    //         </fieldset>
    //         <button className="btn btn-primary" 
    //         disabled={isLoading} onClick={handleClickSavePlace}>
    //             Submit
    //         </button>
    //     </form>
    // )

    return (
        <>
        <form className="placeForm">
            <h2 className="placeForm__title">Let's plan the night out</h2>
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




                
        <fieldset>
            <div className="form-group-venue">
                <label htmlFor="title">Inside or Outside</label>
                <select
                    type="venueTypeId" 
                    id="venue--indoor" 
                    required autoFocus 
                    className="form-control" 
                    placeholder="Indoor Venue" 
                    value={place.VenueTypeId} 
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
                    type="eventTypeId" 
                    id="event--indoor" 
                    required autoFocus 
                    className="form-control" 
                    placeholder="Indoor Event" 
                    value={place.EventTypeId} 
                    onChange={handleControlledInputChange} 
                >
                <option value="0"> </option>
                {eventTypes.map((c) => ( 
                <option key={c.id} value={c.id}>
                    {c.eventSelect}
                </option>
                ))}
                </select>
            </div>
        </fieldset>
        {/* <fieldset>
            <div className="form-group">
            <label htmlFor="url">Article url:</label>
            <input type="text" id="url" required autoFocus className="form-control" placeholder="Article url" value={article.url} onChange={handleControlledInputChange} />
            </div>
        </fieldset>
        <fieldset>
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
// 