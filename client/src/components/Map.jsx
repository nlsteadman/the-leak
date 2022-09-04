import React, { useState, useEffect } from "react";
import { GoogleMap, InfoWindow, LoadScript, MarkerF } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";

const Map = ({ mapLocation }) => {
  const navigate = useNavigate();

    
  const initialMarkers = [
    {
      name: "William Temple House",
      position: {
        lat: 45.5272874,
        lng: -122.6929796
      },
    },
    {
      name: "Holy Cross Catholic Church",
      position: {
        lat: 45.5815238,
        lng: -122.7233135
      },
    },
    {
      name: "Columbia Park Summer Free Food Market",
      position: {
        lat: 45.579072,
        lng: -122.708069
      },
    },
    {
      name: "Lift Urban / Legacy Good Samaritan Free Food Market",
      position: {
        lat: 45.5314418,
        lng: -122.698346248638
      },
    },
    // {
    //   position: {
    //     lat: 45.5314418,
    //     lng: -122.698346248638
    //   },
    //   label: { color: "red", text: "Lift Urban / Legacy Good Samaritan Free Food Market" },
    // },
    {
      name: "Hereford House Food Pantry",
      position: {
        lat: 45.5826905,
        lng: -122.72167515
      },
    },
    {
      name: "Hand Up Project - People's Pantry",
      position: {
        lat: 45.553656,
        lng: -122.675855312727
      },
    },
    {
      name: "NE Portland Health Center",
      position: {
        lat: 45.5498649,
        lng: -122.661821
      },
    },
    {
      name: "Beaverton Health Center",
      position: {
        lat: 45.48585875,
        lng: -122.80245205
      },
    },
    {
      name: "Hillman East Portland Center of Portland, OR",
      position: {
        lat: 45.5045205,
        lng: -122.512898926115
      },
    },
    {
      name: "Rosewood Family Health Center",
      position: {
        lat: 45.4976882,
        lng: -122.5713911
      },
    },
    {
      name: "Parkrose Neighborhood Health Access",
      position: {
        lat: 45.5518394250013,
        lng: -122.54172377178
      },
    },
    {
      name: "Old Town Recovery Center",
      position: {
        lat: 45.5236118,
        lng: -122.6777175
      },
    },
    {
      name: "North Portland Health Center",
      position: {
        lat: 45.5924178,
        lng: -122.7572509
      },
    },
    {
      name: "Mercy And Wisdom Healing Center",
      position: {
        lat: 45.4978057,
        lng: -122.5866393
      },
    },
    {
      name: "Cares NW Center",
      position: {
        lat: 45.5430199,
        lng: -122.6674261
      },
    },
    {
      name: "North By Northeast Community Health Center",
      position: {
        lat: 45.5590008,
        lng: -122.658118908626
      },
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

    // useEffect(() => {
    //   if (activeInfoWindow) {
    //     displayValue = (
    //       <InfoWindow 
    //         onLoad={onLoad}
    //       >
    //         <p>{activeInfoWindow.name}</p>
    //       </InfoWindow>
    //     )
    //   }
    // }, [activeInfoWindow])
    
    const handleActiveMarker = (marker) => {
      if (marker === activeInfoWindow) {
        return;
      }
      return (
        setActiveInfoWindow(marker)
        )
    }

    const displayValue = (marker) => {
      console.log(activeInfoWindow)
      return (
        <InfoWindow 
            onLoad={onLoad}
          >
            <p>{marker.name}</p>
          </InfoWindow>
        )
    }

    // const mapId = () => {
    //   if (initialMarkers.label) {
    //     if (initialMarkers.label.text.toString() === mapLocation.name) {
    //       return mapLocation.id
    //     }
    //   }
    // }

    const onLoad = infoWindow => {
      // debugger
      console.log('infoWindow: ', infoWindow)
    }

    

    return (
        <LoadScript googleMapsApiKey={'AIzaSyDtor2v40-EgIX2Pg-dzcLkH_D7WjUDSTA'}>
          <GoogleMap 
            mapContainerStyle={containerStyle}
            center={center} 
            zoom={11}
            id="map-container"
          >
            {markers.map((marker, index) => (
              <MarkerF
                key={index} 
                position={marker.position}
                onMouseOver={() => handleActiveMarker(marker)}
              >
                {
                  (activeInfoWindow === marker) ? (
                  <InfoWindow 
                    onLoad={onLoad}
                    >
                      <div>{marker.name}</div>
                  </InfoWindow>
                  ) : null
                }  
              </MarkerF>
            ))}
          </GoogleMap>
        </LoadScript>
    )
};

export default Map;