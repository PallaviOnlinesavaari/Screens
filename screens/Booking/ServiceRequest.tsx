import React from "react"
import {View,Text, StyleSheet,Image, TouchableOpacity} from "react-native"
import Icon from "react-native-remix-icon"
import { Color } from "../../typography/Styles"

const ServiceRequest=()=>{
    return(
        <View>
            <View style={styles.mainTitleRow}>
                <Icon name="ri-add-circle-line" size={20} color="#DE1522"/>
                <Text style={styles.mainTitle}>Service Requests</Text>
                <Text style={{marginVertical:5,fontFamily:"RobotoCondensed-Regular",fontSize:12}}>(optional)</Text>
            </View> 
        <View style={styles.viewBorder}> 
            <View style={{flexDirection:"row"}}>
                <Text>Meal</Text>
                <Text>Baggage</Text>
                <Text>Seat</Text>
            </View>
            <View style={styles.onwardNavbar}>
                <Text>ONWARD: DEL-JAI</Text>
                <Text>ONWARD: JAI-BOM</Text>
            </View>
            <View style={styles.foodSelectView}>
                <Image source={require("../../assets/images/Salad.png")} style={styles.image} />
                <Text style={styles.foodName}>FTCB</Text>
                <Text style={styles.foodName}>SEASONAL FRESH FRUIT</Text>
                <Text style={styles.foodName}> PLATTER</Text>
                <Text style={styles.amount}>₹ 350</Text>
                <TouchableOpacity>
                    <Text style={styles.selectButton}>Select</Text>
                </TouchableOpacity>
            </View>   
            <View style={styles.foodSelectView}>
                <Image source={require("../../assets/images/Salad.png")} style={styles.image} />
                <Text style={styles.foodName}>RPCB</Text>
                <Text style={styles.foodName}>HERB ROAST VEGETABLE</Text>
                <Text style={styles.foodName}>ROLL</Text>
                <Text style={styles.amount}>₹ 350</Text>
                <TouchableOpacity>
                    <Text style={styles.selectButton}>Select</Text>
                </TouchableOpacity>
            </View>    
            <View style={styles.foodSelectView}>
                <Image source={require("../../assets/images/Salad.png")} style={styles.image} />
                <Text style={styles.foodName}>JMCB</Text>
                <Text style={styles.foodName}>CHICKEN JUNGLEE</Text>
            </View>   
        </View>    
        </View>
    )
}

const styles=StyleSheet.create({
    mainTitle:{
        fontFamily:"RobotoCondensed-Regular",
        color:Color.red,
        fontSize:20,
        marginStart:5,
        marginEnd:5
    },
    mainTitleRow:{
        flexDirection:"row",
        marginStart:25,
    },
    viewBorder:{
        backgroundColor:Color.white,
        marginHorizontal:20,
        marginVertical:8,
        padding:18,
        borderWidth:1,
        borderRadius:10,
        borderColor:Color.white,
        shadowColor:"#000",
        shadowOffset: { width:0, height:2}, shadowOpacity:0.25, shadowRadius:3.84, elevation:10,
    },
    onwardNavbar:{
        flexDirection:"row"
    },
    foodSelectView:{
        borderWidth:1,
        marginHorizontal:28,
        marginBottom:-5,
        padding:10,
        paddingVertical:15,
        paddingBottom:-10,
        borderColor:"#707070",
        marginVertical:18,
    },
    image:{
        width:60,
        height:60,
        alignSelf:"center",
    },
    foodName:{
        color:Color.darkBlack,
        fontFamily:"RobotoCondensed-Bold",
        fontSize:16,
        alignSelf:"center",
        paddingTop:2
    },
    amount:{
        fontSize:13,
        fontFamily:"QuattrocentoSans-Bold",
        color:Color.darkBlack,
        alignSelf:"center"
    },
    selectButton:{
        color:Color.white,
        backgroundColor:Color.red,
        alignSelf:"center",
        padding:8,
        paddingStart:15,
        paddingEnd:15,
        fontSize:16,
        fontFamily:"QuattrocentoSans-Bold",
        marginTop:3,
        marginBottom:15
    }
    


})

export default ServiceRequest