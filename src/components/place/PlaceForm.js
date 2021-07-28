import React, { useContext, createContext, useEffect, useState } from "react" 
import { useHistory } from "react-router"
import { PlaceContext } from "./PlaceProvider"
import "./Place.css"
// import { useParams } from "react-router-dom"
// import { VenueContext } from "./VenueProvider"

export const PlaceForm = () => {
    const { addPlace } = useContext(PlaceContext)
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
        <h2 className="articleForm__title">places</h2>
        <fieldset>
            <div className="form-group">
            <label htmlFor="title">Article Title:</label>
            <input type="text" id="title" required autoFocus className="form-control" placeholder="Article title" value={article.title} onChange={handleControlledInputChange} />
            </div>
        </fieldset>
        <fieldset>
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
        </fieldset>
        <button className="btn btn-primary" onClick={handleClickSavePlace}>
            Save Article
            </button>
        </form>
    </>
    )

}
// 