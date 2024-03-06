import React,{useState,useMemo} from "react"
import {View,Text, TextInput, StyleSheet, TouchableOpacity} from "react-native"
import Icon from "react-native-remix-icon"
import { Color } from "../../typography/Styles"

const PromoCode=()=>{
    const [selectedId, setSelectedId] = useState<string | undefined>();
    const data = [
        {
        //   label: 'data 1'
         },
         {
        //   label: 'data 2'
         }
        ];
    return(
        <View>
            <Text style={styles.mainTitle}>Promo Code</Text>
            <View style={styles.viewBorder}>
                <Text style={styles.title}>Select a Promo Code</Text>
                <View style={{flexDirection:"row"}}>
                    <TextInput
                        placeholder="YOUR PROMO CODE"
                        style={styles.inputStyle}
                    />
                    <TouchableOpacity style={styles.appliedButtonView}>
                        <Text style={styles.appliedTextStyle}>Applied</Text>
                        <Icon name="ri-check-line" color="#0BCD6B" size={20} style={{marginTop:8}}/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row",paddingEnd:11}}>
                    <Icon name="ri-checkbox-circle-fill" size={30} color="#0BCD6B"/>
                    <Text style={{color:Color.lightGreen,fontSize:15,fontFamily:"QuattrocentoSans-Bold",}}>
                        Congrats! You have availed a discount of Rs.0,TnC apply</Text>
                </View>
              
                   <View>
                        <View style={{flexDirection:"row",margin:10}}>
                            <Text style={styles.radioButtonLabel}>GEOW</Text>
                            <Text style={styles.saveText}>Save ₹ 50</Text>
                        </View>
                        <Text style={styles.offersDescription}>Flat 13% off on using CITI Bank Credit & debit cards.</Text>
                        <Text style={styles.termsConditionsText}>Terms & Conditions</Text>
                    </View>  
                    <View>
                        <View style={{flexDirection:"row",margin:10}}>
                            <Text style={styles.radioButtonLabel}>FEAN</Text>
                            <Text style={styles.saveText}>Save ₹ 1000</Text>
                        </View>
                        <Text style={styles.offersDescription}>Flat 13% off on using CITI Bank Credit & debit cards.</Text>
                        <Text style={styles.termsConditionsText}>Terms & Conditions</Text>
                    </View>                
                    {/* </View> */}
                    {/* <Text>GEOW</Text> */}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    mainTitle:{
        fontSize:20,
        fontFamily:"RobotoCondensed-Bold",
        color:Color.darkBlack,
        marginHorizontal:30
    },
    title:{
        fontSize:20,
        fontFamily:"QuattrocentoSans-Bold",
        color:Color.darkBlack,
    },
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
    inputStyle:{
        color:"#AEB3BC",
        fontSize:16,
        fontFamily:"QuattrocentoSans-Bold",
        borderWidth:1,
        borderColor:"#D9D9D9",
        paddingStart:20,
        paddingEnd:60,
        height:"60%",
        marginTop:15
    },
    appliedTextStyle:{
        color:Color.lightGreen,
        fontSize:18,
        fontFamily:"QuattrocentoSans-Bold",
        paddingTop:8,
        paddingEnd:3
        // paddingVertical:25
    },
    appliedButtonView:{
        flexDirection:"row",
        borderWidth:1,
        borderColor:"#D9D9D9",
        // paddingVertical:1,
        // paddingHorizontal:3,
        paddingStart:8,
        paddingEnd:5,
        backgroundColor:"#F1F1F1",
        height:"60%",
        marginVertical:15
    },
    radioButtonLabel:{
        flex:0.2,
        color:Color.lightGreen,
        borderWidth:1,
        borderStyle:"dotted",
        borderColor:Color.lightGreen,
        fontSize:13,
        fontFamily:"RobotoCondensed-Bold",
        padding:5,
        textAlign:"center",
        marginEnd:20
    },
    saveText:{
        color:"#DD9F0D",
        fontSize:14,
        fontFamily:"RobotoCondensed-Bold",
        marginTop:5
    },
    offersDescription:{
        color:Color.darkBlack,
        fontSize:9,
        marginHorizontal:10,
        fontFamily:"QuattrocentoSans-Bold",
    },
    termsConditionsText:{
        color:"#007BFF",
        fontSize:10,
        textAlign:"right",
        marginHorizontal:80,
        fontFamily:"QuattrocentoSans-Bold",
    }

})

export default PromoCode