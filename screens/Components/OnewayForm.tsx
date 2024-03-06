import React,{useState} from "react"
import {View,Text, StyleSheet, TouchableHighlight,Modal} from "react-native"
import { Color } from "../../typography/Styles"
import DateSelection from "./DatePicker"
import { SafeAreaView } from "react-native-safe-area-context"
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker"

// import DatePicker from 'react-native-date-picker'

interface SearchformProps{
    label1:string,
    label2:string,
    fromcityCode:string,
    tocityCode:string,
    fromCity:string,
    toCity:string,
    dateLabel:string,
    date:string,
    returnLabel:string,
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

const OnewayformScreen=()=>{
  
    return(
        <SafeAreaView>
        <OnewayForm label1="From" label2="To" fromcityCode="DEL" tocityCode="BOM" fromCity="Delhi" toCity="Mumbai"
        dateLabel="Departure Date" date="11th April 2023" returnLabel="Return" passengerLabel="Passenger" passengerInput="1"
        classLabel="Class" classInput="Economy" stopLabel="Non Stop Flights" armedLabel="Armed forces" fareLabel="Student Fare"
        citizenLabel="Senior Citizen" searchButton="Search"/>
         
        </SafeAreaView>
    )
}


const OnewayForm=(props:SearchformProps)=>{

    const [open,setOpen]=useState(false)
    
    const handleOnPress=()=>{
        setOpen(!open)
      }
      const [passenger,setPassenger]=useState(false)
    
      const handleOnPassenger=()=>{
          setPassenger(!passenger)
        }
      const [Calender,setCalender]=useState(false)
      const [date,setDate]=useState("2024/02/08")
    
    
      const today=new Date
    
      // const startDate = getFormatedDate(today.setDate(today.getDate() + 1), "YYYY/MM/DD");
       
    
      const handleOnCalander=()=>{
        setCalender(!Calender)
      }
    
      const handleChange=(propDate:any)=>{
        console.log(propDate)
        setDate(propDate)
      }
    
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
                        <View>
                            <Text style={styles.dateLabel}>{props.dateLabel}</Text>
                            <TouchableHighlight onPress={handleOnCalander}>

                            <Text style={styles.dateInput}>{props.date}</Text>
                            </TouchableHighlight>

                        </View>

                        <Text style={styles.returnLabel}>{props.returnLabel}</Text>
                </View>
            </View>
            <View  style={styles.viewBorder}>
                <View style={styles.cityRow}>
                    <Text style={styles.passengerLabel}>{props.passengerLabel}</Text>
                    <Text style={styles.classLabel}>{props.classLabel}</Text>
                </View>
                <View style={styles.cityRow}>
                    <TouchableHighlight onPress={handleOnPassenger}>
                        <Text style={styles.passengerInput}>{props.passengerInput}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={handleOnPress}>
                        <Text style={styles.classInput}>{props.classInput}</Text>
                    </TouchableHighlight>
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
           <Modal 
            animationType="slide"
            transparent={true}
            visible={open}
            >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>  
            <View>
            <Text>Select Class</Text>
            <Text>Economy</Text>
            <Text>Premium Economy</Text>
            <Text>Business</Text>
            </View>
            <TouchableHighlight onPress={handleOnPress}>
            <Text>Close</Text>
            </TouchableHighlight>
            </View>
            </View>
            </Modal>

       
 
    <View>
        {/* <TouchableHighlight onPress={handleOnCalander}>
      <Text>Open</Text>
    </TouchableHighlight> */}
    <Modal
      animationType="slide"
      transparent={true}
      visible={Calender}
      
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
      <DatePicker
        mode="calendar"
        minimumDate={date}
        selected={date}
        onDateChange={handleChange}
      />
      <TouchableHighlight onPress={handleOnCalander}>
      <Text>Close</Text>
    </TouchableHighlight>
    </View>
    </View>

    </Modal>
    </View>
        <Modal 
            animationType="slide"
            transparent={true}
            visible={passenger}
            >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>  
            <View>
            <Text>Traveller(s)</Text>
            <View style={{flexDirection:"row"}}>
            <Text>Adult</Text>
            <Text>Children</Text>
            <Text>Infant</Text>
            </View>
           
            </View>
            <TouchableHighlight onPress={handleOnPassenger}>
            <Text>Close</Text>
            </TouchableHighlight>
            </View>
            </View>
            </Modal>
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
        color:Color.darkBlack,
        fontSize:13,
        flex:1
    },
    classLabel:{
        color:Color.black,
        fontSize:13 
    },
    passengerInput:{
        color:Color.darkBlack,
        fontSize:15,
        fontWeight:"700",
        marginBottom:15,
        flex:1,
        marginStart:20
    },
    classInput:{
        color:Color.darkBlack,
        fontSize:15,
        fontWeight:"700",
        marginBottom:15,
        marginStart:"72%"
    },
    returnLabel:{
        color:Color.gray,
        fontSize:15,
        fontWeight:"400",
        paddingTop:5,
        paddingHorizontal:115
    },
    // dateColumn:{
    //     // paddingRight:130
    // },
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
    centeredView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:22
      },
      modalView:{
        margin:20,
    backgroundColor:Color.white,
    borderRadius:20,
    width:"90%",
    padding:35,
    alignItems:"center",
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    
      }


})

export default OnewayformScreen