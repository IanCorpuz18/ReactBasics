import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listItem = props => (
 <TouchableOpacity onPress={props.onItemPressed}>
   <View style={styles.listItem}>
   <Image source={props.placeImage} style={styles.placeImage}/>
   <Text>Place:</Text><Text style={styles.TextDesign}>{props.placeName}</Text><Text>   Date:</Text><Text style={styles.TextDesign}> {props.placeDate}</Text>
   </View>
 </TouchableOpacity>
);

const styles = StyleSheet.create({
 listItem: {
   width: "100%",
   marginBottom: 5,
   padding: 10,
   backgroundColor: "#eee",
   flexDirection:"row",
   alignItems:"center",

 },
 placeImage:{
marginRight:8,
height:30,
width:30
 },
 TextDesign:{
   fontWeight:"bold",
   fontSize:20
 }
});

export default listItem;