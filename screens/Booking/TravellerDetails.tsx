import React from "react"
import {View,Text, StyleSheet, TextInput} from "react-native"
import Icon from "react-native-remix-icon"
import { Color } from "../../typography/Styles"



const TravelDetails=()=>{
    return(
        <View>
            <View style={styles.titleRow}>
                <Icon name="ri-admin-line" size={20} color="#DE1522"/>
                <Text style={styles.mainTitle}>Enter Traveller Details</Text>  
            </View>
            <View style={styles.viewBorder}>
                <Text style={styles.title}>Traveller Information</Text>
                <Text style={styles.label}>ADULT</Text>
                <View>
                    <TextInput placeholder="title"/>
                </View>
            </View>
            <View style={styles.viewBorder}>
                <Text style={styles.AddGstTitle}>Add your GST Details (Optional)</Text>
                <View style={styles.textRow}>
                    <Text style={{fontSize:10,flex:0.9,color:Color.darkBlack}}>Claim credit of GST charges. Your taxes may get updated post submitting your GST details.</Text>
                    <Text style={styles.addButton}>Add</Text>
                </View>
                <View style={styles.gstFormView}>
                    <View style={{flex:0.6}}>
                        <Text style={styles.gstLabels}>GST Number:</Text>
                        <TextInput placeholder="" style={styles.gstInputStyle}/>
                    </View> 
                    <View>
                        <Text style={styles.gstLabels}>Company Name:</Text>
                        <TextInput placeholder="" style={styles.companyInputStyle}/>
                    </View>     
                </View>
                <View style={{paddingHorizontal:5}}>
                    <Text style={styles.gstLabels}>Email id:</Text>
                    <TextInput placeholder="" style={styles.InputStyle}/>
                    <Text style={styles.gstLabels}>Mobile Number:</Text>
                    <TextInput placeholder="" style={styles.InputStyle}/>
                    <Text style={styles.gstLabels}>Address:</Text>
                    <TextInput placeholder="" style={styles.InputStyle}/>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    titleRow:{
        flexDirection:"row",
        margin:10,
        marginHorizontal:25,   
    },
    mainTitle:{
        fontSize:20,
        fontFamily:"RobotoCondensed-Bold",
        marginStart:5,
        textAlign:"left",
        color:Color.red
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
        shadowOffset: { width:0, height:2 }, shadowOpacity:0.25, shadowRadius:3.84, elevation:10,
    },
    title:{
        fontFamily:"RobotoCondensed-Bold",
        fontSize:15,
        color:Color.darkBlack
    },
    label:{
        color:Color.darkBlack,
        fontFamily:"QuattrocentoSans-Bold",
        fontSize:12,
        paddingTop:13
    },
    AddGstTitle:{
        color:Color.darkBlack,
        fontFamily:"QuattrocentoSans-Bold",
        fontSize:12,
        paddingTop:5
    },
    textRow:{
        flexDirection:"row",
        paddingVertical:10,
        borderBottomWidth:2,
        borderBottomColor:Color.darkGray
    },
    addButton:{
        // flex:1
        backgroundColor:Color.red,
        color:Color.white,
        paddingStart:8,
        paddingEnd:8,
        paddingVertical:2,
        // textAlign:"center",
        borderRadius:5,
        marginStart:20
    },
    gstFormView:{
        flexDirection:"row",
        paddingHorizontal:5,
        marginVertical:8
    },
    gstInputStyle:{
        borderWidth:1,
        width:"90%",
        padding:0,
        paddingStart:5,
        borderColor:"#D5D8DE",
        backgroundColor:"#F1F1F1",
        borderRadius:4
    },
    companyInputStyle:{
        borderWidth:1,
        width:"235%",
        padding:0,
        paddingStart:5,
        borderColor:"#D5D8DE",
        backgroundColor:"#F1F1F1",
        borderRadius:4,
    },
    gstLabels:{
        color:Color.darkBlack,
        fontFamily:"QuattrocentoSans-Bold",
        fontSize:10,
        paddingBottom:3
    },
    InputStyle:{
        borderWidth:1,
        width:"100%",
        padding:0,
        paddingStart:5,
        borderColor:"#D5D8DE",
        backgroundColor:"#F1F1F1",
        borderRadius:4,
        marginBottom:8
    },
    addressInputStyle:{
        borderWidth:1,
        width:"100%",
        padding:0,
        paddingStart:5,
        borderColor:"#D5D8DE",
        backgroundColor:"#F1F1F1",
        borderRadius:4,
    }


})

export default TravelDetails