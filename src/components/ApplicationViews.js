import React from "react"
import { Route } from "react-router-dom"
import { PlacesProvider } from "./places/PlacesProvider"
import { PlacesList } from "./places/PlacesList"
import { PlacesForm } from "./places/PlacesForm"
// import { SearchFriend } from "./friend/SearchFriend"
import { Detail } from ""


export const ApplicationViews = () => {
    return (
        <>
            <PlacesProvider>
            <Route exact path="/">
                <PlacesList />
            </Route>

            <Route exact path="/places/create">
                <PlacesForm />
            </Route>

            <Route path="/places/edit/:placesId(\d+)">
                <PlacesForm />
            </Route>
            </PlacesProvider>
        
        </>
    )
}
