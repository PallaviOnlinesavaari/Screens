import React,{useState} from "react"
import {Text,View,Image, StyleSheet} from "react-native"
import BottomTabs from "../../navigation/BottomTabs"
import { Color } from "../../typography/Styles"
import TabSelectionInput,{Tab} from "../Components/TabSelectionInput"
import OnewayForm from "../Components/OnewayForm"
import RoundtripForm from "../Components/RoundtripForm"
import MultitripForm from "../Components/MultitripForm"
import OnewayformScreen from "../Components/OnewayForm"


const HomePageTab=()=>{
    const tabs:Tab[]=[{name:"One Way",value:0}, {name:"Round-Trip",value:1},{name:"Multi-Trip",value:2}];
    const [tab,setTab]=useState<Tab>(tabs[0]);
    const OneWay=()=>{
        return(
        <OnewayformScreen/>
        )
    }
    const RoundTrip=()=>{
        return(
            <RoundtripForm label1="From" label2="To" fromcityCode="DEL" tocityCode="BOM" fromCity="Delhi" toCity="Mumbai"
            currDateLabel="Departure Date" currDate="11th April 2023" returnDateLabel="Return Date" returnDate="15th April 2023" passengerLabel="Passenger" passengerInput="1"
            classLabel="Class" classInput="Economy" stopLabel="Non Stop Flights" armedLabel="Armed forces" fareLabel="Student Fare"
            citizenLabel="Senior Citizen" searchButton="Search"/>
            )
    }
    const MultiTrip=()=>{
        return(
            <MultitripForm label1="From" label2="To" fromcityCode="DEL" tocityCode="BOM" fromCity="Delhi" toCity="Mumbai"
            dateLabel="Departure Date" date="11th April 2023" returnLabel="Return" passengerLabel="Passenger" passengerInput="1"
            classLabel="Class" classInput="Economy" stopLabel="Non Stop Flights" armedLabel="Armed forces" fareLabel="Student Fare"
            citizenLabel="Senior Citizen" searchButton="Search"/>
            )
    }
    return(
        <View>
            <View style={styles.imageRow}>
                <Image source={require("../../assets/images/oneWay.png")} style={styles.image}/>
                <Image source={require("../../assets/images/roundTrip.png")} style={styles.image}/>
                <Image source={require("../../assets/images/multiCity.png")} style={styles.image}/>
            </View>
        <TabSelectionInput onChange={setTab} defaultValue={tab} tabs={tabs} bottomSpace={true} />
        {
            tab.value===0?OneWay():RoundTrip()
            
        }

     </View>
    )
}

const styles=StyleSheet.create({
    imageRow:{
        flexDirection:"row",
        alignContent: "center",
        alignItems: "center", 
        justifyContent: "space-around",
        marginTop:20,
        margin:15
    },
    image:{
        width:60,
        height:60,
    },
    // tabNavigation:{
    //     flexDirection:"row",
    //     alignContent: "center",
    //     alignItems: "center", 
    //     // justifyContent: "space-around",
    //     marginTop:20,
    //     borderWidth:1,
    //     borderColor:Color.white,
    //     backgroundColor:Color.white,
    //     borderRadius:10,
    //     margin:10
    // },
    // tabRow:{

    // },
    // onewayTab:{
    //     // margin:10
    //     flex:1,
    //    textAlign:"center",
    //    margin:10
    // },
    // roundTab:{
    //     flex:1,
    //     textAlign:"center"

    // },
    // multiTab:{
    //     flex:1,
    //     textAlign:"center"

    // }

})

export default HomePageTab