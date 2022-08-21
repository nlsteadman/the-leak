import React, { useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
    
  const initialMarkers = [
      {
          position: {
              lat: 45.5272874,
              lng: -122.6929796
          },
          label: { color: "white", text: "William Temple House" },
          draggable: true
      },
      {
          position: {
              lat: 45.5815238,
              lng: -122.7233135
          },
          label: { color: "white", text: "Holy Cross Catholic Church" },
          draggable: false
      },
      {
          position: {
              lat: 45.579072,
              lng: -122.708069
          },
          label: { color: "white", text: "Columbia Park Summer Free Food Market" },
          draggable: true
      },
  ];
    
    const [activeInfoWindow, setActiveInfoWindow] = useState("");
    const [markers, setMarkers] = useState(initialMarkers);

    const containerStyle = {
        width: "60%",
        height: "400px",
    }

    const center = {
        lat: 45.5152,
        lng: -122.6784,
    }

    const mapClicked = (event) => { 
        console.log(event.latLng.lat(), event.latLng.lng()) 
    }

    const markerClicked = (marker, index) => {  
        setActiveInfoWindow(index)
        console.log(marker, index) 
    }

    const markerDragEnd = (event, index) => { 
        console.log(event.latLng.lat())
        console.log(event.latLng.lng())
    }

    const onLoad = marker => {
      console.log('marker: ', marker)
    }

    return (
        <LoadScript googleMapsApiKey='AIzaSyDtor2v40-EgIX2Pg-dzcLkH_D7WjUDSTA'>
          <GoogleMap 
            mapContainerStyle={containerStyle} 
            center={center} 
            zoom={12}
            onClick={mapClicked}
            id="map-container"
          >
            {/* {markers.map((marker, index) => (
              <Marker
                  key={index} 
                  position={marker.position}
                  label={marker.label}
                  draggable={marker.draggable}
                  onLoad={ onLoad }
                  onDragEnd={event => markerDragEnd(event, index)}
                  onClick={event => markerClicked(marker, index)} 
              >
                  {
                      (activeInfoWindow === index)
                      &&
                      <InfoWindow position={marker.position}>
                          <b>{marker.position.lat}, {marker.position.lng}</b>
                      </InfoWindow>
                  }  
              </Marker>
            ))} */}
            <Marker position={{ lat: 45.5815238, lng: -122.7233135 }} />
          </GoogleMap>
        </LoadScript>
    )
};

export default Map;