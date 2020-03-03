import React, {Component} from "react";
import {View, Text, StyleSheet, Dimensions, TextInput, ScrollView, TouchableOpacity} from "react-native";
import MapView, {Marker} from "react-native-maps";

import {coordinates, places, markers} from "../constants";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default class Map extends Component {

    constructor() {
        super();

        this.state = {
            textActive: false,
            region: coordinates["College Ave"],
            searchField: ""
        }
        this.textChanged = this.textChanged.bind(this);
    }

    textChanged(text) {
        this.setState({
            textActive: true,
            searchField: text
        });
    }

    touchedPlace(element) {
        var data = coordinates[element];
        
        this.setState({
            textActive: false,
            region: data,
            searchField: element

        })
    }

    renderPlaces() {
        return(
            <React.Fragment>
                {places.filter(place => place.toLowerCase().includes(this.state.searchField.toLowerCase())).map((element, key) => (
                <TouchableOpacity onPress = {(event) => this.touchedPlace(element) }>
                <View style = {{justifyContent: "center", width: "100%", backgroundColor: "white", borderBottomColor: "gray", height: height*0.06, borderBottomWidth: 0.6}}>
                    <Text style = {{marginLeft: width*0.015}}>{element}</Text>
                </View>
                </TouchableOpacity>
                ))}
                
            </React.Fragment>
        );
    }


    //tester
    renderMarkers() {
        return(
            <React.Fragment>
                {markers.map((marker, key) => (
                    <Marker
                    coordinate = {marker.latlng}
                    title = {marker.name}
                    />
                ))}
            </React.Fragment>
        );
    }



    render() {
        return(
            <View style = {styles.container}>
                <MapView style = {styles.map} region = {this.state.region}>
                    {this.renderMarkers()}
                </MapView>
                <View style = {styles.search}>
                <TextInput onChangeText = {(text) => this.textChanged(text)}style = {styles.textBox} value = {this.state.searchField}></TextInput>
        {this.state.textActive ? <ScrollView showsVerticalScrollIndicator = {false} style = {styles.scroll}>{this.renderPlaces()}</ScrollView> : null}
                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
        width: width,
        height: height
    },
    search: {
        position: "absolute",
        alignItems: "center",
        top: height*0.05
    },
    textBox: {
        width: width * 0.7,
        height: 30,
        borderColor: "gray",
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: width*0.015
    },
    scroll: {
        height: 40,
        width: "100%",
        height: height*0.2,
        backgroundColor: "white"
    }
  });