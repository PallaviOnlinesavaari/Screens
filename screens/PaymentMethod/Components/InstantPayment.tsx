import React from "react"
import {View,TouchableOpacity,Text,StyleSheet} from "react-native"
import { Color } from "../../../typography/Styles"

const InstantPayment=()=>{
    return(
        <View style={styles.viewBorder}>
                <View>
                    {/* <Text>Pay Instant</Text> */}
                </View>
                <TouchableOpacity>
                    <Text style={styles.payNowButton}>Pay Now</Text>
                </TouchableOpacity>
                    <Text style={styles.paymentDescription}>By clicking on Pay Now, you are agreeing to our Terms & Conditions , 
                        Privacy policy, User Agreement and Covid-19 Guidelines.</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    title:{
        color:Color.darkBlack,
        fontFamily:"RobotoCondensed-Bold",
        fontSize:20,
        marginHorizontal:20,
        marginTop:10,
    },
    concertTitle:{
        color:Color.darkBlack,
        fontFamily:"RobotoCondensed-Bold",
        fontSize:20,
        marginHorizontal:20,
        marginTop:10,
        flex:0.9
    },
    viewBorder:{
        backgroundColor:Color.white,
        marginHorizontal:10,
        marginVertical:8,
        padding:18,
        borderWidth:1,
        borderRadius:10,
        borderColor:Color.white,
        shadowColor:"#000",
        shadowOffset: { width:0, height:2}, shadowOpacity:0.25, shadowRadius:3.84, elevation:10,
    },
    editButton:{
        marginTop:8,
        borderWidth:1,
        borderColor:Color.darkBlack,
        borderRadius:5
    },
    editbuttonStyle:{
        paddingStart:8,
        paddingEnd:8,
        color:Color.darkBlack,
        fontFamily:"RobotoCondensed-Bold",
        fontSize:20,
    },
    paymentDescription:{
        color:Color.darkBlack,
        fontSize:10,
        
    },
    payNowButton:{
        backgroundColor:Color.red,
        alignSelf:"center",
        color:Color.white,
        fontFamily:"QuattrocentoSans-Bold",
        fontSize:20,
        padding:8,
        paddingHorizontal:30,
        borderRadius:10
    }
})

export default InstantPayment