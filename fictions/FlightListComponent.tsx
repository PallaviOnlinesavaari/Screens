import React, { useState } from "react"
import {View,Text,Image, StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native"
import { Color } from "../typography/Styles"
import Icon from "react-native-remix-icon"
import FlightDetails from "../screens/Components/FlightDetails"
import ViewFaresButton from "../screens/Components/ViewFaresButton"

interface FlightListProps{
    // logo:object,
    flightName:string,
    flightCode:string,
    cost:string,
    button:string,
    pickupTime:string,
    dropTime:string,
    pickupCity:string,
    dropCity:string,
    pickupCode:string,
    dropCode:string,
    timeDistance:string,
    stops:string,
    flightDetails:string
}


    const FlightListComponent=(props:FlightListProps)=>{
        const[flightDetails,setFlightdetails]=useState(false)
        const toogleDropdown=()=>{
           setFlightdetails(!flightDetails)
        }
        const[viewFares,setViewfares]=useState(false)
        const toogleDropdownButton=()=>{
            setViewfares(!viewFares)
        }
        return(
            <View>
            <View style={styles.viewBorder}>
                <View style={styles.viewRow}>
                    <View style={styles.flightNameCode}>
                        <Text style={styles.flightName}>{props.flightName}</Text>
                        <Text style={styles.flightCode}>{props.flightCode}</Text>
                    </View>
                    <Text style={styles.flightCost}>{props.cost}</Text>
                    <TouchableOpacity  onPress={toogleDropdownButton}>
                        <Text style={styles.viewFare}>{props.button}</Text>
                    </TouchableOpacity>
                </View>
              
                <View  style={{flexDirection:"row"}}>
                        <View style={{flex:0.2}}>
                            <Text style={styles.pickupDropTime}>{props.pickupTime}</Text>
                            <Text style={styles.pickupCity}>{props.pickupCity}</Text>
                            <Text style={styles.pickupCode}>{props.pickupCode}</Text>
                        </View>
                        <View style={{flex:0.2,marginTop:20}}>
                            <Icon name="ri-flight-takeoff-line" size="20" color="#000000"/>
                        </View>
                        <View  style={{flex:0.3,}}>
                            <Text style={styles.pickupDropTime}>{props.dropTime}</Text>
                            <Text style={styles.dropCity}>{props.dropCity}</Text>
                            <Text style={styles.DropCode}>{props.dropCode}</Text>
                        </View>
                   
                    <View style={{flex:0.3,paddingTop:25,}}>
                        <Text style={styles.timeDistance}>{props.timeDistance}</Text>
                        <Text style={styles.stops}>{props.stops}</Text>
                    </View>
                       
                </View>
                
                <TouchableOpacity style={styles.flightOnclick} onPress={toogleDropdown}>
                    <Text style={styles.flightDetails}>{props.flightDetails}</Text>
                </TouchableOpacity>
               
            </View>
            {flightDetails&&(<View>
                <FlightDetails/>
            </View>)}
            {viewFares&&(<View>
                <ViewFaresButton/>
            </View>)}
            
            </View>
        )
    }
     
     
    


   






const styles=StyleSheet.create({
    viewBorder:{
        backgroundColor:Color.white,
        // marginBottom:30,
        marginTop:20,
        marginHorizontal:10,
        padding:10,
        // height:"40%",
        borderWidth:1,
        borderRadius:10,
        borderColor:Color.white,
        shadowColor:"#000",
        shadowOffset: { width:0, height:2 }, shadowOpacity:0.25, shadowRadius:3.84, elevation:10
    },
    viewRow:{
        flexDirection:"row",
    },
    flightNameCode:{
        flex:1,
    },
    flightName:{
        fontFamily:"QuattrocentoSans-Bold",
        fontSize:13,
        color:Color.darkBlack,
        marginBottom:-3
    },
    flightCode:{
        fontFamily:"QuattrocentoSans-Bold",
        fontSize:10,
        color:Color.darkBlack
    },
    flightCost:{
        marginEnd:7,
        color:Color.darkBlack,
        fontFamily:"QuattrocentoSans-Bold",
        fontSize:14
    },
    viewFare:{
        backgroundColor:Color.red,
        color:Color.white,
        padding:3,
        paddingEnd:5,
        paddingStart:5,
        borderRadius:5
    },
    pickupDropTime:{
        paddingTop:5,
        flex:0.5,
        fontSize:13,
        color:Color.darkBlack,
        fontFamily:"QuattrocentoSans-Bold",

    },
    pickupCity:{
        // paddingTop:1,
        flex:0.4,
        fontSize:13,
        color:Color.darkBlack,
        fontFamily:"QuattrocentoSans-Bold", 
        paddingBottom:-10,
        // borderRightWidth:1
    },
    dropCity:{
        flex:0.4,
        fontSize:13,
        // paddingEnd:,
        color:Color.darkBlack,
        fontFamily:"QuattrocentoSans-Bold", 
        borderRightWidth:2,borderRightColor:Color.darkGray,marginRight:10
    },
    timeDistance:{
        // flex:0.3,
        // paddingTop:10,
        fontSize:13,
        fontFamily:"QuattrocentoSans-Bold", 
        color:Color.darkBlack,
        paddingBottom:-10
    },
    stops:{
        // paddingStart:
        fontSize:11,
        paddingStart:10,
        fontFamily:"QuattrocentoSans-Bold", 
        color:Color.lightGray, 
    },
    pickupCode:{
        fontSize:11,
        fontFamily:"QuattrocentoSans-Bold", 
        color:Color.lightGray, 
        // borderRightWidth:2,borderRightColor:Color.darkGray,marginRight:10
    },
    DropCode:{
        fontSize:11,
        fontFamily:"QuattrocentoSans-Bold", 
        color:Color.lightGray, 
        borderRightWidth:2,borderRightColor:Color.darkGray,marginRight:10
    },
    flightOnclick:{
        borderTopWidth:2,
        borderTopColor:Color.darkGray,
        marginTop:10
    },
    flightDetails:{
        fontSize:12,
        fontFamily:"QuattrocentoSans-Bold", 
        color:"#2B5D90",
        paddingTop:10,
    },
    

})

export default FlightListComponent

