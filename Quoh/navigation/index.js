import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Map from "../screens/Map";
import Events from "../screens/Events";
import Places from "../screens/Places";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator()

function App() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name = "Map" component = {Map}/>
                <Tab.Screen name = "Places" component = {Places}/>
                <Tab.Screen name = "Events" component = {Events}/>
                <Tab.Screen name = "Profile" component = {Profile}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;