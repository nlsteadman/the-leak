import React, { useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, MarkerF } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";

const Map = ({ mapLocation }) => {
  const navigate = useNavigate();
    
  const initialMarkers = [
    {
      position: {
        lat: 45.5272874,
        lng: -122.6929796
      },
      label: { color: "red", text: "William Temple House" },
  },
  {
      position: {
        lat: 45.5815238,
        lng: -122.7233135
      },
      label: { color: "red", text: "Holy Cross Catholic Church" },
  },
  {
      position: {
        lat: 45.579072,
        lng: -122.708069
      },
      label: { color: "red", text: "Columbia Park Summer Free Food Market" },
    },
    {
      position: {
        lat: 45.5314418,
        lng: -122.698346248638
      },
      label: { color: "red", text: "Lift Urban / Legacy Good Samaritan Free Food Market" },
    },
    {
      position: {
        lat: 45.5314418,
        lng: -122.698346248638
      },
      label: { color: "red", text: "Lift Urban / Legacy Good Samaritan Free Food Market" },
    },
    {
      position: {
        lat: 45.5826905,
        lng: -122.72167515
      },
      label: { color: "red", text: "Hereford House Food Pantry" },
    },
    {
      position: {
        lat: 45.553656,
        lng: -122.675855312727
      },
      label: { color: "red", text: "Hand Up Project - People's Pantry" },
    },
    {
      position: {
        lat: 45.5498649,
        lng: -122.661821
      },
      label: { color: "red", text: "NE Portland Health Center" },
    },
    {
      position: {
        lat: 45.48585875,
        lng: -122.80245205
      },
      label: { color: "red", text: "Beaverton Health Center" },
    },
    {
      position: {
        lat: 45.5045205,
        lng: -122.512898926115
      },
      label: { color: "red", text: "Hillman East Portland Center of Portland, OR" },
    },
    {
      position: {
        lat: 45.4976882,
        lng: -122.5713911
      },
      label: { color: "red", text: "Rosewood Family Health Center" },
    },
    {
      position: {
        lat: 45.5518394250013,
        lng: -122.54172377178
      },
      label: { color: "red", text: "Parkrose Neighborhood Health Access" },
    },
    {
      position: {
        lat: 45.5236118,
        lng: -122.6777175
      },
      label: { color: "red", text: "Old Town Recovery Center" },
    },
    {
      position: {
        lat: 45.5924178,
        lng: -122.7572509
      },
      label: { color: "red", text: "North Portland Health Center" },
    },
    {
      position: {
        lat: 45.4978057,
        lng: -122.5866393
      },
      label: { color: "red", text: "Mercy And Wisdom Healing Center" },
    },
    {
      position: {
        lat: 45.5430199,
        lng: -122.6674261
      },
      label: { color: "red", text: "Cares NW Center" },
    },
    {
      position: {
        lat: 45.5590008,
        lng: -122.658118908626
      },
      label: { color: "red", text: "North By Northeast Community Health Center" },
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

    const mapId = () => {
      if (initialMarkers.label) {
        if (initialMarkers.label.text.toString() === mapLocation.name) {
          return mapLocation.id
        }
      }
    }

    const markerClicked = (marker, index) => {  
        setActiveInfoWindow(index)
        navigate(`/locations/${ mapId() }`)
    }

    const markerDragEnd = (event, index) => { 
        console.log(event.latLng.lat())
        console.log(event.latLng.lng())
    }

    const onLoad = marker => {
      console.log('marker: ', marker)
    }

    return (
        <LoadScript googleMapsApiKey={'AIzaSyDtor2v40-EgIX2Pg-dzcLkH_D7WjUDSTA'}>
          <GoogleMap 
            mapContainerStyle={containerStyle} 
            center={center} 
            zoom={11}
            onClick={mapClicked}
            id="map-container"
          >
            {markers.map((marker, index) => (
              <MarkerF
                key={index} 
                position={marker.position}
                label={marker.label}
                onLoad={ onLoad }
                onDragEnd={event => markerDragEnd(event, index)}
                onClick={() => markerClicked(marker, index)} 
              >
                {
                  (activeInfoWindow === index)
                  &&
                  <InfoWindow position={marker.position}>
                      <p>{marker.label.text}</p>
                  </InfoWindow>
                }  
              </MarkerF>
            ))}
          </GoogleMap>
        </LoadScript>
    )
};

export default Map;