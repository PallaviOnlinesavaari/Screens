import React from "react"
import {View,Text,Image, StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native"
import { Color } from "../../typography/Styles"
import { useNavigation } from '@react-navigation/native';
import ReviewBookingScreen from "../Booking/ReviewBookingScreen";


const FlightDetails=()=>{
    const navigation = useNavigation({ReviewBookingScreen});

    return(
        <View>
            <Text style={styles.titleStyle}>Flight Details</Text>
            <View style={styles.summaryView}>
                <Text style={styles.summaryTitle}>Fare Summary</Text>
                <View>
                    <View style={styles.fareRow}>
                        <Text style={{ flex:1.3,color:Color.white,fontSize:15,fontFamily:"QuattrocentoSans-Bold",}}>Fare Summery</Text>
                        <Text style={{ flex:1,color:Color.white,fontSize:15,fontFamily:"QuattrocentoSans-Bold",}}>Base Fare</Text>
                        <Text style={{ flex:1,color:Color.white,fontSize:15,fontFamily:"QuattrocentoSans-Bold",}}>Fees & Taxes</Text>
                    </View> 
                    <View style={styles.adultRow}>
                        <Text style={{paddingStart:20,flex:1.6,color:Color.white,fontSize:15,fontFamily:"QuattrocentoSans-Bold",}}>ADULT</Text>
                        <Text style={{ flex:1.5,color:Color.white,fontSize:15,fontFamily:"QuattrocentoSans-Bold",}}>₹ 3442</Text>
                        <Text style={{ flex:1,color:Color.white,fontSize:15,fontFamily:"QuattrocentoSans-Bold",}}>₹ 672.7</Text>
                    </View> 
                </View>
                <View style={styles.adultRow}>
                    <Text style={{flex:3,color:Color.white,fontSize:20,fontFamily:"QuattrocentoSans-Bold",}}>You Pay</Text>
                    <Text style={{flex:1,color:Color.white,fontSize:20,fontFamily:"QuattrocentoSans-Bold",}}>₹ 4114.7</Text>
                </View>
                <Text style={styles.noteStyle}>
                    Note: Total fare displayed above has been rounded off and may show a slight difference from catual farw.
                </Text>
                <TouchableOpacity style={styles.bookNowButton} onPress={()=>navigation.navigate(ReviewBookingScreen)}>
                <Text style={{textAlign:"center",fontSize:20,fontFamily:"QuattrocentoSans-Bold",color:Color.darkBlack}}>
                    Book Now
                </Text>
                </TouchableOpacity>
              
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    titleStyle:{
        fontFamily:"QuattrocentoSans-Bold",
        fontSize:16,
        color:Color.white,
        backgroundColor:Color.red,
        padding:5,
        paddingStart:13,
        margin:5,
        marginHorizontal:10,
        borderRadius:5
    },
    summaryView:{
        backgroundColor:Color.red,
        padding:10,
        margin:10,
        marginTop:5
      },
      summaryTitle:{
        color:Color.white,
        fontSize:20,
        fontFamily:"RobotoCondensed-Bold",
        textAlign:"center",
        borderBottomWidth:3,
        borderBottomColor:Color.white,
        paddingBottom:10
      },
      fareRow:{
        flexDirection:"row",
        marginTop:10,
        marginLeft:8,
      },
      adultRow:{
        flexDirection:"row",
        // marginTop:10,
        // marginLeft:8,
        marginTop:10,
        borderBottomWidth:2,
        borderBottomColor:Color.white,
        paddingBottom:10,
        paddingHorizontal:10
      },
    noteStyle:{
        marginStart:5,
        marginTop:10,
        color:Color.white,
        fontSize:14,
        fontFamily:"QuattrocentoSans-Bold",
    },
    // buttonView:{

    // },
    bookNowButton:{
        backgroundColor:Color.white,
        alignSelf:"center",
        alignContent:"center",
        width:"80%",
        height:"15%",
        textAlign:"center",
        borderRadius:10,
        paddingTop:5,
        margin:10
    }
})

export default FlightDetails