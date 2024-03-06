import React from "react"
import {View,Text, StyleSheet,Image} from "react-native"
import Icon from "react-native-remix-icon"
import { Color } from "../../typography/Styles"


const FlightListInfo=()=>{
    return(
        <View style={styles.viewBorder}>
            <View style={styles.checkBaggageView}>
                <Text style={styles.checkBaggage}>Checking Baggage:</Text>
                <Icon name="ri-briefcase-line" size={15} color="#000000"/>
                <Text style={styles.checkBaggage}>15 Kg (01 Piece only)   </Text>
                <Image source={require("../../assets/images/Cutlery.jpg")}/>
                <Text style={styles.checkBaggage}> Paid Meal</Text>
            </View>
            <View style={styles.importantNoteView}>
                <View style={{flexDirection:"row"}}>
                    <Icon name="ri-file-info-line" size={15}/>
                    <Text style={styles.title}> Important Note</Text>
                </View>
                <Text style={styles.points}>- The Fare Rules for your flight selection have  changed.Please review them before proceeding.</Text>
                <View style={{flexDirection:"row"}}>
                    <Icon name="ri-file-info-line" size={15}/>
                    <Text style={styles.title}> Compulsory Guidelines for Passangers</Text>
                </View>
                <Text style={styles.points}>- You need to certify your health status through Aarogya Setu app preactivate on your mobile or self-declaration from.</Text>
                <Text style={styles.points}>- Face Mask is Mandatory both at the airport & in flight.</Text>
                <Text style={styles.points}>- Failure to comply with Covid-19 protocols and the directions of ground staff and/or crew may  attract penal action against the concerned  individuals</Text>
                <Text style={styles.points}>- Only passengers  with confirmed web check-in will be allowed to enter 2 hours prior to the flight departure.</Text>
                <Text style={styles.points}>- Only one check-in bag and cabin bag will be allowed per customer with a baggage tag affixed on the bag.</Text>
                <Text style={styles.points}>- View all mandatory travel guidelines issued by Govt. of India here click here</Text>

            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    viewBorder:{
        backgroundColor:Color.white,
        marginHorizontal:20,
        marginVertical:8,
        padding:12,
        borderWidth:1,
        borderRadius:10,
        borderColor:Color.white,
        shadowColor:"#000",
        shadowOffset: { width:0, height:2 }, shadowOpacity:0.25, shadowRadius:3.84, elevation:10,
    },
    checkBaggageView:{
        flexDirection:"row",
        backgroundColor:"#F1F1F1",
        borderRadius:20,
        padding:10,
        paddingEnd:2
    },
    checkBaggage:{
        fontSize:12,
        fontFamily:"QuattrocentoSans-Bold",
        color:Color.darkBlack
    },
    importantNoteView:{
        backgroundColor:"#FFFDD4",
        marginVertical:15,
        padding:10,
        paddingVertical:25
    },
    title:{
        fontSize:14,
        fontFamily:"QuattrocentoSans-Bold",
        color:Color.darkBlack
    },
    points:{
        fontSize:13,
        fontFamily:"QuattrocentoSans-Regular",
        color:Color.darkBlack,
        paddingHorizontal:10,
        paddingVertical:5
    }
})

export default FlightListInfo