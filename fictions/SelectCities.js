import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableHighlight,TouchableOpacity,SafeAreaView,StyleSheet,Modal, ScrollView } from 'react-native';
import { Color } from '../typography/Styles';



const SelectCities= () => {

  const[data,setData]=useState([])
  const [open,setOpen]=useState(false)
  const handleOnPress=()=>{
    setOpen(!open)
  }



  const getData=async()=>{
    const url="https://onlinesavaari.website/savaari_api/flight_code_list/"
    let result= await fetch(url)
    result= await result.json();
    setData(result)
  }

  useEffect(()=>{
    getData()
    },[])
  return(
    <View>
    {/* <TouchableHighlight onPress={handleOnPress}>
    <Text>Open</Text>
  </TouchableHighlight> */}
          {/* <Modal 
            animationType="slide"
            transparent={true}
            visible={open}
            > */}
        <ScrollView>
    <Text>Select Cities</Text>
    {
      data.length?
      data.map((item)=><View>
      <View style={{flexDirection:"row"}}>
      <Text style={{fontSize:15}}>({item.name})</Text>
      <Text style={{fontSize:15}}>{item.code}</Text>
      </View>
      <Text style={{fontSize:15}}>{item.citycode}</Text>


      </View>)
      
      :null
    }
    </ScrollView>
   
    {/* <TouchableHighlight onPress={handleOnPress}>
      <Text>Close</Text>
    </TouchableHighlight> */}
            {/* </Modal> */}
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
    width:"100%",
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
export default SelectCities;