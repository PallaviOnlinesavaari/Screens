import React,{useState} from "react"
import {View,Text, StyleSheet, TouchableHighlight} from "react-native"
import { Color } from "../../typography/Styles"
// import DatePicker from 'react-native-date-picker'

interface SearchformProps{
    label1:string,
    label2:string,
    fromcityCode:string,
    tocityCode:string,
    fromCity:string,
    toCity:string,
    currDateLabel:string,
    currDate:string,
    returnDateLabel:string,
    returnDate:string,
    // returnLabel:string,
    passengerLabel:string,
    passengerInput:string,
    classLabel:string,
    classInput:string,
    stopLabel:string,
    armedLabel:string,
    fareLabel:string,
    citizenLabel:string,
    searchButton:string,
}

const RoundtripForm=(props:SearchformProps)=>{
    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)
  
    // const [date, setDate] = useState('09-10-2020');
    return(
        <View style={styles.borderForm}>
            <View style={styles.viewBorder}>
                <View style={styles.cityRow}>
                    <Text style={styles.label1}>{props.label1}</Text>
                    <Text style={styles.label2}>{props.label2}</Text>
                </View>
                <View style={styles.cityRow}>
                    <Text style={styles.cityCode}>{props.fromcityCode}</Text>
                    <Text style={styles.cityCode1}>{props.tocityCode}</Text>
                </View>
                <View style={styles.cityRow}>
                    <Text style={styles.fromCity}>{props.fromCity}</Text>
                    <Text style={styles.toCity}>{props.toCity}</Text>
                </View>
            </View>
            <View  style={styles.viewBorder}>
                <View style={styles.cityRow}>
                    <TouchableHighlight>
                        <View style={{marginEnd:70}}>
                            <Text style={styles.dateLabel}>{props.currDateLabel}</Text>
                            <Text style={styles.dateInput}>{props.currDate}</Text>
                        </View>
                    </TouchableHighlight>
                     <TouchableHighlight >
                        <View>
                            <Text style={styles.dateLabel}>{props.returnDateLabel}</Text>
                            <Text style={styles.dateInput}>{props.returnDate}</Text>
                        </View>
                    </TouchableHighlight>

                       
                </View>
            </View>
            <View  style={styles.viewBorder}>
                <View style={styles.cityRow}>
                    <Text style={styles.passengerLabel}>{props.passengerLabel}</Text>
                    <Text style={styles.classLabel}>{props.classLabel}</Text>
                </View>
                <View style={styles.cityRow}>
                    <Text style={styles.passengerInput}>{props.passengerInput}</Text>
                    <Text style={styles.classInput}>{props.classInput}</Text>
                </View>
            </View>
            <View>
                <View style={styles.cityRow}>
                    <Text style={styles.stopLabel}>{props.stopLabel}</Text>
                    <Text style={styles.armedLabel}>{props.armedLabel}</Text>
                </View>
                <View style={styles.cityRow}>
                    <Text style={styles.fareLabel}>{props.fareLabel}</Text>
                    <Text style={styles.citizenLabel}>{props.citizenLabel}</Text>
                </View> 
           </View>
           <View style={styles.buttonView}>
                <Text style={styles.button}>{props.searchButton}</Text>
           </View>
        </View>

    )
}
const styles=StyleSheet.create({
    borderForm:{
        backgroundColor:Color.white,
        borderWidth:1,
        borderColor:Color.white,
        margin:15,
        marginTop:3,
        borderRadius:8,
        shadowColor:"#000",
        shadowOffset: { width:0, height:2 }, shadowOpacity:0.25, shadowRadius:3.84, elevation:10
    },
    viewBorder:{
        borderBottomWidth:2,
        borderBottomColor:Color.darkGray,
        marginStart:25,
        marginEnd:25,
        marginTop:18
    },
    cityRow:{
        flexDirection:"row"
    },
    label1:{
        flex:1,
        fontSize:12,
        color:Color.gray
    },
    label2:{
        fontSize:12,
        color:Color.gray
    },
    cityCode:{
        flex:1,
        fontSize:14,
        fontWeight:"700",
        color:Color.black
    },
    cityCode1:{
        fontSize:14,
        fontWeight:"700",
        color:Color.black
    },
    fromCity:{
        flex:1,
        fontSize:13,
        color:Color.primaryGray,
        marginBottom:20
    },
    toCity:{
        fontSize:13,
        color:Color.primaryGray
    },
    buttonView:{
        backgroundColor:Color.red,
        height:35,
        width:110,
        borderRadius:5,
        justifyContent:"center",
        alignSelf:"center",
        margin:10
    },
    button:{
        color:Color.white,
        fontWeight:"700",
        fontSize:15,
        textAlign:"center"
    },
    passengerLabel:{
        flex:1,
        color:Color.black,
        fontWeight:"400",
        fontSize:15,
    },
    classLabel:{
        color:Color.black,
        fontSize:13 
    },
    passengerInput:{
        flex:1,
        color:Color.black,
        fontWeight:"700",
        fontSize:17,
        paddingHorizontal:30
    },
    classInput:{
        color:Color.black,
        fontSize:16,
        fontWeight:"700",
        marginBottom:13
    },
    returnLabel:{
        color:Color.gray,
        fontSize:15,
        fontWeight:"400",
        paddingTop:5,
        paddingHorizontal:115
    },
    dateColumn:{
        // paddingRight:130
    },
    dateLabel:{
        color:Color.lightGray,
        fontSize:12
    },
    dateInput:{
        color:Color.darkBlack,
        fontSize:15,
        fontWeight:"700",
        marginBottom:15
    },
    stopLabel:{
        flex:1,
        marginStart:35,
        marginEnd:25,
        marginTop:18,
        fontSize:12,
        marginBottom:10,
        color:Color.black
    },
    armedLabel:{
        marginStart:35,
        marginEnd:40,
        marginTop:18,
        fontSize:12,
        color:Color.black

    },
    fareLabel:{
        flex:1,
        marginStart:35,
        marginEnd:25,
        fontSize:12,
        color:Color.black

        // marginTop:18
    },
    citizenLabel:{
        marginStart:35,
        marginEnd:40,
        fontSize:12,
        color:Color.black

        // marginTop:18
    },


})

export default RoundtripForm