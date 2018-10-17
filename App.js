import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import { connect } from "react-redux";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "./src/store/actions/index";
class App extends Component {
 state = {
   places: [],
   selectedPlace: null
 };

 placeAddedHandler = (placeName, placeDate) => {
  this.props.onAddPlace(placeName, placeDate);
};
placeDeletedHandler = () => {
  this.props.onDeletePlace();
};
 
modalClosedHandler = () => {
  this.props.onDeselectPlace();
};
placeSelectedHandler = key => {
this.props.onSelectPlace(key);
};

 render() {
  let wow = {
    uri: 'https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'
  };
   return (
     
     <View style={styles.container}>
       <Image source={wow} style={{width: 193, height: 110}}/>
     <PlaceDetail selectedPlace={this.props.selectedPlace}
      onItemDeleted ={this.placeDeletedHandler}
      onModalClosed={this.modalClosedHandler}/>
       <PlaceInput onPlaceAdded={this.placeAddedHandler} />
       <PlaceList
         places={this.props.places}
         onItemSelected={this.placeSelectedHandler}
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
const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name, date) => dispatch(addPlace(name, date)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
