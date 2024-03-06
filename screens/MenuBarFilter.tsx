import React,{useState} from "react"
import {View,Text, StyleSheet, SafeAreaView} from "react-native"
import { TextInput } from "react-native-paper"
import { Color } from "../typography/Styles"
import Icon from "react-native-remix-icon"
import CheckBox from '@react-native-community/checkbox';
// import RangeSlider from 'react-native-range-slider'

const MenuBarFilter=()=>{
    const [data,setData]=useState("")
    const [isSelected,setSelection]=useState<boolean>(false)

const Header=()=>{
    return(
        <View style={styles.headerView}>
            <Icon name="ri-arrow-left-s-line" size="25" color="#000000"/>
            <Text style={styles.headerTitle}>MORE FILTER</Text>
        </View>
    )
}

return(
    <SafeAreaView style={{backgroundColor:Color.white}}>
        <Header/>
    <View style={styles.mainView}>
        <View style={{flexDirection:"row",}}>
            <Text style={styles.label}>Stops:</Text>
            <TextInput
                underlineColorAndroid="transparent"
                style={styles.inputField}
                value={data}
                onChangeText={setData}
            />
             <TextInput
                underlineColorAndroid="transparent"
                style={styles.inputField}
                value={data}
                onChangeText={setData}
            />
             <TextInput
                style={styles.inputField}
                value={data}
                onChangeText={setData}
            />
        </View>
        <View>
            <Text style={styles.label}>Price:</Text>
            <View style={{flexDirection:"row",marginTop:10}}>
                <Text style={{fontFamily:"QuattrocentoSans-Bold",fontSize:13,color:Color.darkBlack,}}>Upto:</Text>
                <Text style={{fontFamily:"QuattrocentoSans-Bold",fontSize:13,marginLeft:3,color:Color.darkBlack,}}>₹4215.7- ₹71944.7</Text>
            </View>
        </View>
        <View style={{marginTop:50}}>
        <Text style={styles.label}>Depart Time:</Text>
            <View style={{flexDirection:"row",marginTop:8}}>
                <View style={styles.timeBox}>
                <Icon name="ri-moon-cloudy-line" size="25" color="#BFBFBF"/>
                <Text>00-06</Text>
                </View>
                <View style={styles.timeBox}>
                <Icon name="ri-sun-line" size="25" color="#BFBFBF"/>
                <Text>06-12</Text>
                </View>
                <View style={styles.timeBox}>
                <Icon name="ri-contrast-2-line" size="25" color="#BFBFBF"/>
                <Text>12-18</Text>
                </View>
                <View style={styles.timeBox}>
                <Icon name="ri-contrast-2-line" size="25" color="#BFBFBF"/>
                <Text>18-00</Text>
                </View>
            </View>
        </View>
        <View style={{marginTop:45}}>
            <Text style={styles.label}>Airlines :</Text>
            <View style={{flexDirection:"row",marginTop:8}}>
                <CheckBox disabled={false} value={isSelected} onValueChange={setSelection} />
                <Text style={styles.airLinesName}>Akasa Air</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <CheckBox disabled={false} value={isSelected} onValueChange={setSelection} />
                <Text style={styles.airLinesName}>Go First</Text>
            </View>
            <View style={{flexDirection:"row",}}>
                <CheckBox disabled={false} value={isSelected} onValueChange={setSelection} />
                <Text style={styles.airLinesName}>Vistara</Text>
            </View>
            <View style={{flexDirection:"row",}}>
                <CheckBox disabled={false} value={isSelected} onValueChange={setSelection} />
                <Text style={styles.airLinesName}>Air India</Text>
            </View>
            <View style={{flexDirection:"row",}}>
                <CheckBox disabled={false} value={isSelected} onValueChange={setSelection} />
                <Text style={styles.airLinesName}>SpiceJet</Text>
            </View>
            <View style={{flexDirection:"row",}}>
                <CheckBox disabled={false} value={isSelected} onValueChange={setSelection} />
                <Text style={styles.airLinesName}>IndiGo</Text>
            </View>
            <View style={{flexDirection:"row",}}>
                <CheckBox disabled={false} value={isSelected} onValueChange={setSelection} />
                <Text style={styles.airLinesName}>AirAsia India</Text>
            </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <Text style={styles.buttonCancel}>Cancel</Text>
                <Text style={styles.buttonApply}>Apply Filter</Text>
            </View>
        </View>
        </SafeAreaView>
)
}

const styles=StyleSheet.create({
    headerView:{
        flexDirection:"row",
        borderBottomColor:Color.darkBlack,
        margin:10,
        marginLeft:15,
        paddingBottom:10,
        borderBottomWidth:1
    },
    headerTitle:{
        fontFamily:"RobotoCondensed-Bold",
        color:Color.darkBlack,
        fontSize:18,
      
    },
    mainView:{
        marginLeft:35,
        margin:25
    },
    label:{
        fontFamily:"QuattrocentoSans-Bold",
        color:Color.darkBlack,
        marginRight:18,
        marginTop:5,
        fontSize:14
    },
    inputField:{
        backgroundColor:'white',
        fontFamily:"RobotoCondensed-Medium",
        color:"#999595",
        fontSize:14,
        width:28,
        height:28,
        // justifyContent:"center",
        // alignSelf:"center",
        marginBottom:15,
        borderRadius:10, shadowColor:"#000",
        shadowOffset: { width:0, height:2 }, shadowOpacity:0.25, shadowRadius:3.84, elevation:10,
        borderColor:Color.darkBlack,
        marginLeft:5
    },
    timeBox:{
        backgroundColor:'white',
        fontFamily:"RobotoCondensed-Medium",
        color:"#999595",
        fontSize:14,
        width:"21%",
        height:"85%",
        borderWidth:1,
        alignItems:"center",
        paddingTop:5,
        margin:5,
        borderRadius:5, shadowColor:"#000",
        shadowOffset: { width:0, height:2 }, shadowOpacity:0.25, shadowRadius:3.84, elevation:10,
        // borderColor:Color.darkBlack,
        borderColor:"#BFBFBF",
        // color:
    },
    airLinesName:{
        fontFamily:"QuattrocentoSans-Bold",
        color:Color.darkBlack,
        marginTop:6,
        fontSize:14
    },
    buttonApply:{
        alignSelf:"center",
        backgroundColor:Color.red,
        color:Color.white,
        padding:12,
        fontFamily:"QuattrocentoSans-Bold",
        fontSize:15,
        paddingHorizontal:30,
        borderRadius:5,
        marginTop:20
    },
    buttonCancel:{
        alignSelf:"center",
        backgroundColor:Color.white,
        color:Color.darkBlack,
        padding:12,
        fontFamily:"QuattrocentoSans-Bold",
        fontSize:15,
        paddingHorizontal:40,
        marginTop:20,
        borderWidth:1,
        borderColor:Color.darkBlack,
    }


   
})

export default MenuBarFilter