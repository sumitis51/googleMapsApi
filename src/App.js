import React,{useState} from 'react';
import { GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';

export const MapContainer=(props)=> {
  const [showingInfoWindow,setShowingInfoWindow]=useState(false) 
  const [activeMarker,setActiveMarker]=useState({})   
   const [selectedPlace,setSelectedPlace]=useState({}) 


   const onMarkerClick = (props, marker, e) =>{
    setSelectedPlace(props)
    setActiveMarker(marker)
    setShowingInfoWindow(true)
  }

const  onClose = props => {
   if (showingInfoWindow) {
    setShowingInfoWindow(false)
    setActiveMarker(null)
   }
 };

    return (
      <CurrentLocation
        google={props.google}
          initialCenter= {{
            lat:28.644800,
            lng:77.216721
          }}
          zoom={15}
          centerAroundCurrentLocation={false}
          visible={true}
      >
         <Marker
          onClick={onMarkerClick}
          name={'cars24'}
        />
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={onClose}
        >
          <div>
            <h4>{selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </CurrentLocation>
    );
  }


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFRLfm2hUnt3Qh63L1C6dheSyJL_kcsKk'
})(MapContainer);