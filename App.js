import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from "./src/assets/pic.jpg";
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
export default class App extends Component {
 state = {
   places: [],
   selectedPlace: null
 };

 placeAddedHandler = (placeName, placeDate) => {
   this.setState(prevState => {
     return {
       places: prevState.places.concat({
         key : Math.random(), 
         name : placeName,
         date: placeDate,

        image: placeImage
        })
     };
   });
 };
placeDeletedHandler = () => {
  this.setState(prevState => {
    return {
      places: prevState.places.filter(place => {
        return place.key !== prevState.selectedPlace.key;
      }),
      selectedPlace:null
    };
  });

};
 
modalClosedHandler = () => {
this.setState({
  selectedPlace: null
})

}

 placeSeletedHandler = key => {
   this.setState(prevState => {
     return {
       selectedPlace: prevState.places.find(place => {
         return place.key === key;

       })
     };
   });

 };

 render() {
  let wow = {
    uri: 'https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'
  };
   return (
     
     <View style={styles.container}>
       <Image source={wow} style={{width: 193, height: 110}}/>
     <PlaceDetail selectedPlace={this.state.selectedPlace}
      onItemDeleted ={this.placeDeletedHandler}
      onModalClosed={this.modalClosedHandler}/>
       <PlaceInput onPlaceAdded={this.placeAddedHandler} />
       <PlaceList
         places={this.state.places}
         onItemSeleted={this.placeSeletedHandler}
       />
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   padding: 26,
   backgroundColor: "#fff",
   alignItems: "center",
   justifyContent: "flex-start"
 }
});