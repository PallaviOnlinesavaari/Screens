import React from "react"
import {Image} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from "react-native-vector-icons/Ionicons"
import IntroScreen from "../screens/IntroScreen";
import BottomTabs from "./BottomTabs";
import HomePageTab from "../screens/tabs/HomePage";
import SearchListScreen from "../screens/SearchListScreen";
import Icon from "react-native-remix-icon";
import RemixIcon from "react-native-remix-icon";
import ReviewBookingScreen from "../screens/Booking/ReviewBookingScreen";
import InstantPayment from "../screens/PaymentMethod/PaymentMethodScreen";


const Stack = createNativeStackNavigator();

const AppStack=()=>{
    return(
    <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen options={{headerShown:false}} name="IntroScreen" component={IntroScreen} />  */}
         {/*}  screenOptions={{headerBackTitleVisible:false}}*/}
         
          {/* <Stack.Screen name ="home"component={HomePageTab}/> */}
        {/* <Stack.Screen name="Home" component={BottomTabs}  options={{
          headerLeft:()=><Image source={require("../assets/images/OnlineSavaari1.jpg")}/>,
          headerRight:()=><RemixIcon name="ri-notification-4-line" size="25"/>,
          headerTitle:""
        }}/> */}
        {/* <Stack.Screen name="SearchScreen"options={{headerLeft:()=><Icon name="ri-arrow-drop-left-line"
         size="40"color="#000000"/>,headerTintColor:"#363636",headerTitleAlign: "center",headerTitle:"DEL -> BOM",
         headerTitleStyle:{fontFamily:"QuattrocentoSans-Bold",fontSize:20,}}} component={SearchListScreen}  /> */}
        {/* <Stack.Screen name="Review your Booking" component={ReviewBookingScreen} /> */}
        <Stack.Screen  options={{headerLeft:()=><Icon name="ri-wallet-line" size={20} color="#DE1522"/>,headerTintColor:"#DE1522", headerTitleStyle:{fontFamily:"RobotoCondensed-Bold",fontSize:20} }}name="  Payment Method" component={InstantPayment}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppStack