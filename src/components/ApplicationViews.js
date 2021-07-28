import React from "react"
import { Route } from "react-router-dom"
import { PlaceProvider } from "./place/PlaceProvider"
import { PlaceList } from "./place/PlaceList"
import { PlaceForm } from "./place/PlaceForm"
import { VenueProvider } from "./VenueType/VenueProvider"
// import { userPlaceProvider} from "./userPlace/userPlaceProvider"
// import { userPlaceList } from "./userPlace/userPlaceList"
// import { userPlaceForm } from "./userPlace/userPlaceForm"

export const ApplicationViews = () => {
    return (
        <>
            <PlaceProvider>
                {/* <VenueProvider> */}
                    <Route exact path="/">
                        <PlaceForm />
                    </Route>

                    <Route exact path="/places/create">
                        <PlaceForm />
                    </Route>

                    <Route path="/places/edit/:placesId(\d+)">
                        <PlaceForm />
                    </Route>
                {/* </VenueProvider> */}
            </PlaceProvider>
        
            {/* <userPlaceProvider>
                <Route exact path="/userPlaces">
                    <userPlaceList />
                </Route>

                <Route exact path="/userPlaces/create">
                    <userPlaceForm />
                </Route>

                <Route path="/userPlaces/edit/:placesId(\d+)">
                    <userPlaceForm />
                </Route>
            </userPlaceProvider> */}
        </>
    )
}
