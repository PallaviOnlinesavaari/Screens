import React, { useState, useCallback } from "react";
import { View, Text,Modal, TouchableHighlight, StyleSheet } from "react-native";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker"
import { Color } from "../../typography/Styles";



const DateSelection=()=> {

  const [open,setOpen]=useState(false)
  const [date,setDate]=useState("2024/02/08")


  const today=new Date

  // const startDate = getFormatedDate(today.setDate(today.getDate() + 1), "YYYY/MM/DD");
   

  const handleOnPress=()=>{
    setOpen(!open)
  }

  const handleChange=(propDate:any)=>{
    console.log(propDate)
    setDate(propDate)
  }

  return(
    <View>
        <TouchableHighlight onPress={handleOnPress}>
      <Text>Open</Text>
    </TouchableHighlight>
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
      <DatePicker
        mode="calendar"
        minimumDate={date}
        selected={date}
        onDateChange={handleChange}
      />
      <TouchableHighlight onPress={handleOnPress}>
      <Text>Close</Text>
    </TouchableHighlight>
    </View>
    </View>

    </Modal>
    </View>
  )
}

const styles=StyleSheet.create({
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
      height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5

  }
})

export default DateSelection