import React from "react"
import {View,Text, FlatList, StyleSheet} from "react-native"
import { Color } from "../../typography/Styles"

interface FaresProps{
    faresTitle:string,
    amount:string,
    booknowButton:string,
    checkbagLabel:string,
    handbagLabel:string,
    seatselectLabel:string,
    datechangeLabel :string,
    cancelLabel:string,
    mealLabel:string,
    checkbagDescription:string,
    handbagDescription:string,
    seatselectDescription:string,
    datechangeDescription:string,
    cancelDescription:string,
    mealDescription:string,

}

interface listProps{
    id:string,
    faresTitle:string,
    amount:string,
    booknowButton:string,
    checkbagLabel:string,
    handbagLabel:string,
    seatselectLabel:string,
    datechangeLabel :string,
    cancelLabel:string,
    mealLabel:string,
    checkbagDescription:string,
    handbagDescription:string,
    seatselectDescription:string,
    datechangeDescription:string,
    cancelDescription:string,
    mealDescription:string,

}




const ViewFaresButton=()=>{

    const ListData:listProps[]=[
        {id:"1", faresTitle:"PUBLISHED",amount:"₹ 4114.7",booknowButton:"Book Now",checkbagLabel:"Checked Bag",
        checkbagDescription:"15 Kg (01 Piece only)",handbagLabel:"Hand Bag",handbagDescription:"7 Kg",seatselectLabel:"Seat Selection",seatselectDescription:"Chargeable",datechangeLabel:"Date Change",datechangeDescription:"Chargeable",
       cancelLabel:"Cancellation",cancelDescription:"Refundable",mealLabel:"Meal",mealDescription:"Free Meal"},
        {id:"2",faresTitle:"PREMIUM_FLEX",amount:"₹ 5164.7",booknowButton:"Book Now",checkbagLabel:"Checked Bag",
        checkbagDescription:"15 Kg (01 Piece only)",handbagLabel:"Hand Bag",handbagDescription:"7 Kg",seatselectLabel:"Seat Selection",seatselectDescription:"Chargeable",datechangeLabel:"Date Change",datechangeDescription:"Chargeable",
       cancelLabel:"Cancellation",cancelDescription:"Refundable",mealLabel:"Meal",mealDescription:"Free Meal"}
    ]

    const FaresList=(props:FaresProps)=>{
        return(
        <View style={styles.viewBorder}>
            <View style={styles.viewRow}>
                <Text style={styles.fareTitleStyle}>{props.faresTitle}</Text>
                <Text style={styles.amountStyle}>{props.amount}</Text>
                <Text style={styles.buttonStyle}>{props.booknowButton}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.whitebackgroundList}>{props.checkbagLabel}</Text>
                <Text  style={styles.whitebackgroundList}>{props.checkbagDescription}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Text  style={styles.greybackgroundList}>{props.handbagLabel}</Text>
                <Text  style={styles.greybackgroundList}>{props.handbagDescription}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Text  style={styles.whitebackgroundList}>{props.seatselectLabel}</Text>
                <Text style={styles.whitebackgroundList}>{props.seatselectDescription}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Text  style={styles.greybackgroundList}>{props.datechangeLabel}</Text>
                <Text  style={styles.greybackgroundList}>{props.datechangeDescription}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.whitebackgroundList}>{props.cancelLabel}</Text>
                <Text style={styles.whitebackgroundList}>{props.cancelDescription}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.greybackgroundList}>{props.mealLabel}</Text>
                <Text style={styles.greybackgroundList}>{props.mealDescription}</Text>
            </View>
        </View>
        )
        }  
    return(
       <View>
            <Text style={styles.titleStyle}>View Fares</Text>
            <FlatList
                 data={ListData}
                 keyExtractor={(item) => item.id}
                 renderItem={({ item }) => (
                 <FaresList key={item.id} faresTitle={item.faresTitle} amount={item.amount} booknowButton={item.booknowButton} checkbagLabel={item.checkbagLabel} checkbagDescription={item.checkbagDescription} handbagLabel={item.handbagLabel} handbagDescription={item.handbagDescription} seatselectLabel={item.seatselectLabel} seatselectDescription={item.seatselectDescription} datechangeLabel={item.datechangeLabel} 
                 datechangeDescription={item.datechangeDescription} cancelLabel={item.cancelLabel}cancelDescription={item.cancelDescription}mealLabel={item.mealLabel}mealDescription={item.mealDescription}/>
                 )}/>
             <Text style={styles.faresDescription}>Available on additional charge. - Included in Fare - Not Included - Middle seat will be vacant.</Text>
             <Text style={styles.faresDescription}>Disclaimer: Benefits shown are as per details shared by the Airline.</Text>
             <Text style={styles.benifitsList}>* Full refund of Airline cancellation charges up to ₹ 5,000 (per passanger per sector) on cancellation</Text>
             <Text style={styles.benifitsList}>* OFFER FARE & SERIES FARE ARE SUBJECT TO AVAILABILITY BOOKING CONFIRMATION MAY TAKE UPTO 30 MINUTES.</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    viewBorder:{
        backgroundColor:Color.white,
        // marginBottom:30,
        // marginTop:,
        marginBottom:20,
        marginHorizontal:10,
        padding:10,
        // height:"40%",
        borderWidth:1,
        borderRadius:10,
        borderColor:Color.white,
        shadowColor:"#000",
        shadowOffset: { width:0, height:2 }, shadowOpacity:0.25, shadowRadius:3.84, elevation:10,
    },
    viewRow:{
        flexDirection:"row",
        borderBottomWidth:2,
        borderBottomColor:"#BFBFBF",
        padding:8
    },
    titleStyle:{
        fontFamily:"QuattrocentoSans-Bold",
        fontSize:16,
        color:Color.white,
        backgroundColor:Color.red,
        padding:5,
        paddingStart:20,
        margin:10,
        borderRadius:5
    },
    fareTitleStyle:{
       flex:1,
       fontFamily:"RobotoCondensed-Bold",
       fontSize:18,
       color:Color.darkBlack,

    },
    amountStyle:{
        flex:0.4,
        fontSize:15,
        fontFamily:"QuattrocentoSans-Bold",
        color:Color.darkBlack,
    },
    buttonStyle:{
        flex:0.4,
        fontSize:14,
        fontFamily:"QuattrocentoSans-Bold",
        color:Color.white,
        backgroundColor:Color.red,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        textAlign:"center",
    },
    whitebackgroundList:{
        flex:0.5,
        backgroundColor:Color.white,
        padding:3,
        color:Color.darkBlack,
        fontFamily:"Quattrocento-Sans",
        fontSize:16,
    },
    greybackgroundList:{
        flex:0.5,
        backgroundColor:"#E6E8E7",
        padding:3,
        color:Color.darkBlack,
        fontFamily:"Quattrocento-Sans",
        fontSize:16,
    },
    faresDescription:{
        fontFamily:"QuattrocentoSans-Bold",
        fontSize:13,
        color:Color.darkBlack,
        margin:10
    },
    benifitsList:{
        fontFamily:"Quattrocento Sans",
        fontSize:13,
        color:Color.darkBlack,
        marginHorizontal:10,
        marginTop:5
    }
})


    

export default ViewFaresButton