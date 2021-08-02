import React from "react"
import { Route } from "react-router-dom"
import { PlaceProvider } from "./place/PlaceProvider"
import { PlaceList } from "./place/PlaceList"
import { PlaceForm } from "./place/PlaceForm"
import { UserPlaceProvider} from "./UserPlace/UserPlaceProvider"
import { UserPlaceList } from "./UserPlace/UserPlaceList"
import { UserPlaceDetail } from "./UserPlace/UserPlaceDetail"
import { VenueTypeProvider } from "./ProviderGroup/VenueTypeProvider"
import { EventTypeProvider } from "./ProviderGroup/EventTypeProvider"
import { LocationTypeProvider } from "./ProviderGroup/LocationTypeProvider"
import { ActiveTypeProvider } from "./ProviderGroup/ActiveTypeProvider"
import { PlaceDetail } from "./place/PlaceDetail"


export const ApplicationViews = () => {
    return (
        <>
            <PlaceProvider>
                <UserPlaceProvider>
                <ActiveTypeProvider>
                <LocationTypeProvider>
                <EventTypeProvider>
                <VenueTypeProvider>
                    <Route exact path="/">
                        <PlaceForm />
                    </Route>

                    <Route exact path="/places/create">
                        <PlaceForm />
                    </Route>

                    <Route path="/places/edit/:placesId(\d+)">
                        <PlaceForm />
                    </Route>

                    <Route exact path="/places/detail/:placeId(\d+)">
                        <PlaceDetail />
                    </Route>

                </VenueTypeProvider>
                </EventTypeProvider>
                </LocationTypeProvider>
                </ActiveTypeProvider>
                </UserPlaceProvider>
            </PlaceProvider>
        
            <UserPlaceProvider>
                <PlaceProvider>
                    <Route exact path="/UserPlaces">
                        <UserPlaceList />
                    </Route>

                    <Route exact path="/UserPlaces/detail/:UserPlaceId(\d+)">
                        <UserPlaceDetail />
                    </Route>
                    <Route exact path="/UserPlaces/create">
                        <UserPlaceList />
                    </Route>

                    <Route path="/UserPlaces/edit/:placesId(\d+)">
                        <UserPlaceList />
                    </Route>
                </PlaceProvider>
            </UserPlaceProvider>
        </>
    )
}
