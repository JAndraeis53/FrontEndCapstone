import React, { useContext, useEffect, useState } from "react" 
import { useHistory } from "react-router"
import { PlaceContext } from "./PlaceProvider"
import "./Place.css"
import { useParams } from "react-router-dom"

export const PlaceForm = () => {
    const { addPlaces, updatePlace, getPlaces, getPlaceById} = useContext(PlaceContext)
    
    const [place, setPlaces] = useState({
        name: "",
        address: "",
    });

    const [isLoading, setIsLoading] = useState(true)
    const { placeId } = useParams()
    const history = useHistory(); 
    
    const handleControlledInputChange = (event) => {
        const newPlace = { ...place } 
        let selectedVal = event.target.value 

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
            newPlace[event.target.id] = selectedVal
            setPlaces(newPlace)
    }

        
    const handleClickSavePlace = (event) => {
        event.preventDefault() 
            if (place.name === "" || place.date === "") {
                window.alert("Please fill in all fields")
            
            } else {
                setIsLoading(true);
                
            } if  (placeId){
                updatePlace({
                    id: place.id, 
                    name: place.name,
                    address: place.address,
                    description: place.description,
                    EnergyType: place.ActiveTypeId,
                    VenueType: place.VenueTypeId,
                    EventType: place.EventTypeId,
                    LocationType: place.LocationTypeId
                    
                })
                .then(() => history.push("/places"))
            } else {
                    addPlaces({
                        id: place.id, 
                        name: place.name,
                        address: place.address,
                        description: place.description,
                        EnergyType: place.ActiveTypeId,
                        VenueType: place.VenueTypeId,
                        EventType: place.EventTypeId,
                        LocationType: place.LocationTypeId
                    })
                    .then(() => history.push("/places"))
                }

            }
            
            useEffect(() => {
                getPlaces().then(() => {
                    if (placeId) {
                        getPlaceById(placeId)
                        .then( place => {
                            setPlaces(place)
                            setIsLoading(false)
                        })
                    } else {
                        setIsLoading(false)
                    }
                })
            }, [])

        return(
        <form className="taskForm"> 
            <h2 className="taskForm__Title">Let's plan a night out</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">First Question </label>
                    <input type="text" 
                    id="ActiveType" 
                    required autoFocus className="form-control" 
                    placeholder="Active Type" 
                    value={place.ActiveTypeId} 
                    onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary" 
            disabled={isLoading} onClick={handleClickSavePlace}>
                Submit
            </button>
        </form>
    )

}

