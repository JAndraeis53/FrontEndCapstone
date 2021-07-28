import React from "react"
import { Route } from "react-router-dom"
import { PlaceProvider } from "./place/PlaceProvider"
import { PlaceList } from "./place/PlaceList"
import { PlaceForm } from "./place/PlaceForm"
import { VenueProvider } from "./VenueType/VenueProvider"
import { UserPlaceProvider} from "./UserPlace/UserPlaceProvider"
import { UserPlaceList } from "./UserPlace/UserPlaceList"
// import { UserPlaceForm } from "./UserPlace/UserPlaceForm"

export const ApplicationViews = () => {
    return (
        <>
            <PlaceProvider>
                <Route exact path="/">
                    <PlaceForm />
                </Route>

                <Route exact path="/places/create">
                    <PlaceForm />
                </Route>

                <Route path="/places/edit/:placesId(\d+)">
                    <PlaceForm />
                </Route>
            </PlaceProvider>
        
            <UserPlaceProvider>
                <Route exact path="/UserPlaces">
                    <UserPlaceList />
                </Route>

                <Route exact path="/UserPlaces/create">
                    <UserPlaceList />
                </Route>

                <Route path="/UserPlaces/edit/:placesId(\d+)">
                    <UserPlaceList />
                </Route>
            </UserPlaceProvider>
        </>
    )
}
