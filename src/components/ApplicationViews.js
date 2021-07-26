import React from "react"
import { Route } from "react-router-dom"
import { PlaceProvider } from "./place/PlaceProvider"
import { PlaceList } from "./place/PlaceList"
import { PlaceForm } from "./place/PlaceForm"


export const ApplicationViews = () => {
    return (
        <>
            <PlaceProvider>
                <Route exact path="/">
                    <PlaceList />
                </Route>

                <Route exact path="/places/create">
                    <PlaceForm />
                </Route>

                <Route path="/places/edit/:placesId(\d+)">
                    <PlaceForm />
                </Route>
            </PlaceProvider>
        
        </>
    )
}
