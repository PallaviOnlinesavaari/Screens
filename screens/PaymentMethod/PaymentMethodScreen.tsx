import React from "react"
import {View,Text, StyleSheet, TouchableOpacity} from "react-native"
import { Color } from "../../typography/Styles"

const InstantPayment=()=>{
    const PaymentDetails=()=>{
        return(
            <View>
               <Text style={styles.title}>Payment Details</Text>
               <View style={styles.viewBorder}>
                    
               </View>
            </View>

        )
    }
    const BookingSummary=()=>{
        return(
            <View>
            <Text style={styles.title}>Booking Summary</Text>
            <View style={styles.viewBorder}>
                 
            </View>
         </View>
        )
    }
    const ContactDetails=()=>{
        return(
            <View>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.concertTitle}>Contact Details</Text>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editbuttonStyle}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewBorder}>
                 
            </View>
         </View>
        )
    }
    // const PayNowCart=()=>{
    //     return(
    //         <View style={styles.viewBorder}>
    //             <View></View>
    //             <TouchableOpacity>
    //                 <Text style={styles.payNowButton}>Pay Now</Text>
    //             </TouchableOpacity>
    //                 <Text style={styles.paymentDescription}>By clicking on Pay Now, you are agreeing to our Terms & Conditions , 
    //                     Privacy policy, User Agreement and Covid-19 Guidelines.</Text>
    //         </View>
    //     )
    // }
    return(
        <View>
            <PaymentDetails/>
            <BookingSummary/>
            <ContactDetails/>
            <InstantPayment/>
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