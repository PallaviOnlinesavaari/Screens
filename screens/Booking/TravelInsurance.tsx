import React, { useState } from "react"
import {View,Text, StyleSheet} from "react-native"
import Icon from "react-native-remix-icon"
import { Color } from "../../typography/Styles"
import CheckBox from '@react-native-community/checkbox';

const TravelInsurance=()=>{
    const[isSelected,setSelection]=useState<boolean>(false)
    return(
        <View>
           <View style={styles.viewRow}>
                <Icon name="ri-umbrella-line" size={20} color="#DE1522"/>
                <Text style={styles.title}>Travel Insurance</Text>  
                <Text style={styles.title2}>(Recommended)</Text>  
           </View>
           <View style={styles.viewBorder}>
                <View style={{flexDirection:"row",}}>
                    <CheckBox disabled={false} value={isSelected} onValueChange={setSelection} style={{}}/>
                    <Text style={styles.checkBoxText}>Add travel insurance to protect my trip (Rs.135 per traveller including of 18% GST)</Text>
                </View>  
                <Text style={{paddingStart:6,paddingVertical:8,fontSize:14,fontFamily:"QuattrocentoSans-Bold"}}>Benefits of Travel Assistance with Insurance Domestic Roadside</Text> 
                <View> 
                    <View style={styles.iconRow}>
                        <Icon name="ri-medicine-bottle-fill" size={30} color="#000000" style={styles.iconStyle}/>
                        <Icon name="ri-plane-line" size={30} color="#000000" style={styles.iconStyle}/>
                        <Icon name="ri-hotel-fill" size={30} color="#000000"style={styles.iconStyle}/>
                    </View> 
                    <View style={{flexDirection:"row",}}>
                        <View style={{flex:2}}>
                            <Text>Emergency Medical Expenses (including Covid 19)</Text>
                            <Text>Upto RS.50000</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text>Upto RS.10500</Text>
                            <Text>Upto RS.50000</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text>Loss of Hotel Deposit</Text>
                            <Text>Upto RS.50000</Text>
                        </View>
                    </View>
                    <View style={styles.iconRow}>
                        <Icon name="ri-medicine-bottle-fill" size={30} color="#000000" style={styles.iconStyle}/>
                        <Icon name="ri-plane-line" size={30} color="#000000" style={styles.iconStyle}/>
                        <Icon name="ri-hotel-fill" size={30} color="#000000"style={styles.iconStyle}/>
                    </View> 
                    <View style={{flexDirection:"row",marginBottom:25}}>
                        <View style={{flex:2}}>
                            <Text>Emergency Medical Expenses (including Covid 19)</Text>
                            <Text>Upto RS.50000</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text>Upto RS.10500</Text>
                            <Text>Upto RS.50000</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text>Loss of Hotel Deposit</Text>
                            <Text>Upto RS.50000</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Icon name="ri-information-line" size={20} color="#000000"/>
                    <Text> Important Note</Text>
                </View>  
                <Text style={{marginTop:10}}>- Please ensure that the names of the passengers on the travel documents is the same as on their government issued identity proof.</Text>
                <Text style={{marginTop:10}}>- Note: Travel Insurance is applicable only for Indian citizens below the age of 70 years. Terms & Conditions</Text>   
           </View>
        </View>
    )
}

export default TravelInsurance

const styles=StyleSheet.create({
    viewRow:{
        flexDirection:"row",
        margin:10,
        marginHorizontal:35,
        
    },
    title:{
        fontSize:20,
        fontFamily:"RobotoCondensed-Bold",
        color:Color.red,
        marginStart:5,
        textAlign:"left"
    },
    title2:{
        fontSize:15,
        fontFamily:"RobotoCondensed-Bold",
        color:Color.darkBlack,
        marginStart:5,
        marginVertical:3,
        flex:1,
        textAlign:"left"
    },
    viewBorder:{
        backgroundColor:Color.white,
        marginBottom:30,
        marginHorizontal:20,
        padding:18,
        // height:"40%",
        marginTop:1,
        paddingTop:10,
        borderWidth:1,
        borderRadius:10,
        borderColor:Color.white,
        shadowColor:"#000",
        shadowOffset: { width:0, height:2 }, shadowOpacity:0.25, shadowRadius:3.84, elevation:10
    },
    checkBoxText:{
        fontSize:15,
        flex:1,
        fontFamily:"RobotoCondensed-Bold",
    },
    iconRow:{
        flexDirection:"row",
        alignContent: "center",
        alignItems: "center", 
        justifyContent: "space-between",
        marginTop:20,
        margin:15
    },
    iconStyle:{
        backgroundColor:"#D9D9D9",
        borderRadius:20,
        paddingBottom:40,
        paddingLeft:30,
        // flex:2
    },
    textRow:{
        flexDirection:"row",
       
        // alignItems: "center", 
        // marginTop:20,
        // margin:15 
    }

})