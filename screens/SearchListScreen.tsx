import React,{useState} from "react"
import {View,Text, TouchableHighlight, StyleSheet,FlatList,SafeAreaView,StatusBar, TouchableOpacity} from "react-native"
import Icon from "react-native-remix-icon"
import { Color } from "../typography/Styles"
import { Dropdown } from 'react-native-element-dropdown';
import FlightListComponent from "../fictions/FlightListComponent";
import MenuBarFilter from "./MenuBarFilter";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';// import {NavigationContainer} from '@react-navigation/native';
interface listProps{
    id:string,
    // logo:object,
    flightName:string,
    flightCode:string,
    cost:string,
    button:string,
    pickupTime:string,
    dropTime:string,
    pickupCity:string,
    dropCity:string,
    pickupCode:string,
    dropCode:string,
    timeDistance:string,
    stops:string,
    flightDetails:string

}


const SearchListScreen=()=>{

// const navigation=useNavigation()
// const[onClick,setOnClick]=useState(false)
            
    const Header=()=>{
        
        const [value, setValue] = useState("");
    const data = [
            { label: 'Low to High', value: '1' },
            { label: 'High to Low', value: '2' },]
        return(
           
            <View style={styles.viewRow}>
        <TouchableOpacity style={{flex:1}}>
            <Icon name="ri-menu-line" size="30" color="#000000"/>
        </TouchableOpacity>
        <View style={{flexDirection:"row"}}>
        <Text style={styles.text}>Sort by: </Text>
         <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        iconColor="#FFFFFF"
        fontFamily="Quattrocento Bold"
        data={data}
        maxHeight={100}
        labelField="label"
        valueField="value"
        placeholder="Price"
        value={value}
        onChange={item => {
        setValue(item.value);
        }}/>
        </View>
      </View>
        )
    
    }

    const listData:listProps[]=[
        {id:"1", flightName:"AirAsia India",flightCode:"15-743",cost:"$ 4114.7",button:"View Fares",
        pickupTime:"05:00",dropTime:"18:50",pickupCity:"Delhi",dropCity:"Mumbai",pickupCode:"(DEL)",dropCode:"(BOM)",
        timeDistance:"13h 50m",stops:"1 stop",flightDetails:"Flight Details"},
        {id:"2",flightName:"AirAsia India",flightCode:"15-743",cost:"$ 4114.7",button:"View Fares",
        pickupTime:"05:00",dropTime:"18:50",pickupCity:"Delhi",dropCity:"Mumbai",pickupCode:"(DEL)",dropCode:"(BOM)",
        timeDistance:"13h 50m",stops:"1 stop",flightDetails:"Flight Details"},
        {id:"3",flightName:"AirAsia India",flightCode:"15-743",cost:"$ 4114.7",button:"View Fares",
        pickupTime:"05:00",dropTime:"18:50",pickupCity:"Delhi",dropCity:"Mumbai",pickupCode:"(DEL)",dropCode:"(BOM)",
        timeDistance:"13h 50m",stops:"1 stop",flightDetails:"Flight Details"},
        {id:"4",flightName:"AirAsia India",flightCode:"15-743",cost:"$ 4114.7",button:"View Fares",
        pickupTime:"05:00",dropTime:"18:50",pickupCity:"Delhi",dropCity:"Mumbai",pickupCode:"(DEL)",dropCode:"(BOM)",
        timeDistance:"13h 50m",stops:"1 stop",flightDetails:"Flight Details"},
        {id:"5",flightName:"AirAsia India",flightCode:"15-743",cost:"$ 4114.7",button:"View Fares",
        pickupTime:"05:00",dropTime:"18:50",pickupCity:"Delhi",dropCity:"Mumbai",pickupCode:"(DEL)",dropCode:"(BOM)",
        timeDistance:"13h 50m",stops:"1 stop",flightDetails:"Flight Details"},
        {id:"6",flightName:"AirAsia India",flightCode:"15-743",cost:"$ 4114.7",button:"View Fares",
        pickupTime:"05:00",dropTime:"18:50",pickupCity:"Delhi",dropCity:"Mumbai",pickupCode:"(DEL)",dropCode:"(BOM)",
        timeDistance:"13h 50m",stops:"1 stop",flightDetails:"Flight Details"},
    ]

   
    
    const FlightList=()=>{
      
        
       
        return(
        <SafeAreaView>
            <View style={styles.View}>
                  <FlatList
                data={listData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <FlightListComponent key ={item.id}  flightName={item.flightName}  flightCode={item.flightCode} cost={item.cost} button={item. button}  pickupTime={item. pickupTime}
                dropTime={item. dropTime} pickupCity={item. pickupCity} dropCity={item. dropCity} pickupCode={item. pickupCode}dropCode={item. dropCode}timeDistance={item. timeDistance} stops={item. stops}flightDetails={item. flightDetails}/>
                )}
                />
            </View>
            
        </SafeAreaView>
        )
    }

    // const FlightDetails=()=>{
    //     return(
    //         <View>
    //             <View style={styles.summaryView}>
    //                 <Text style={styles.summaryTitle}>Fare Summary</Text>
    //                 <View>
    //                     <View style={styles.fareRow}>
    //                         <Text style={{ flex:1.6,color:Color.white,fontSize:15,fontFamily:"QuattrocentoSans-Bold",}}>Fare Summery</Text>
    //                         <Text style={{ flex:1.3,color:Color.white,fontSize:15,fontFamily:"QuattrocentoSans-Bold",}}>Base Fare</Text>
    //                         <Text style={{ flex:1,color:Color.white,fontSize:15,fontFamily:"QuattrocentoSans-Bold",}}>Fees & Taxes</Text>
    //                     </View> 
    //                     <View style={styles.adultRow}>
    //                         <Text style={{paddingStart:20,flex:1.8,color:Color.white,fontSize:15,fontFamily:"QuattrocentoSans-Bold",}}>ADULT</Text>
    //                         <Text style={{ flex:1.7,color:Color.white,fontSize:15,fontFamily:"QuattrocentoSans-Bold",}}>₹ 3442</Text>
    //                         <Text style={{ flex:1,color:Color.white,fontSize:15,fontFamily:"QuattrocentoSans-Bold",}}>₹ 672.7</Text>
    //                     </View> 
    //                 </View>
    //                 <View style={styles.adultRow}>
    //                     <Text style={{flex:4,color:Color.white,fontSize:20,fontFamily:"QuattrocentoSans-Bold",}}>You Pay</Text>
    //                     <Text style={{flex:1,color:Color.white,fontSize:20,fontFamily:"QuattrocentoSans-Bold",}}>₹ 4114.7</Text>
    //                 </View>
    //                 <Text style={styles.noteStyle}>
    //                     Note: Total fare displayed above has been rounded off and may show a slight difference from catual farw.
    //                 </Text>
    //                 <Text style={styles.bookNowButton}>
    //                     Book Now
    //                 </Text>
    //             </View>
    //         </View>
    //     )
    // }

   
              
      
       
    return(
        <View style={{backgroundColor:Color.white}}>
            <Header/>
            <FlightList/>
            {/* <FlightDetails/> */}
        </View>
       
    )}
const styles=StyleSheet.create({
    viewRow:{
        flexDirection:"row",
        margin:18,
    },
    text:{ 
        color:Color.darkBlack,
        fontSize:10,
        paddingVertical:8,
        fontFamily:"Quattrocento Bold"
    },
    dropdown: {
        paddingVertical:3,             
        backgroundColor:Color.red,
        padding:8,
        height:25,
        borderRadius:5,
        width:105,
        marginTop:3,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
        fontSize:13,
        color:Color.white,
        fontFamily:"Quattrocento Bold"

    },
    selectedTextStyle: {
        fontSize: 12,
        color:Color.white
    },
    iconStyle: {
      width: 25,
      height: 20,
      color:Color.white
    },
    View:{
        flexDirection:"row",
        padding:8,
    },
    View1:{
        flexDirection:"row",
    },
    Text:{
        fontSize:13,
        fontWeight:"700",
        color:"#344955",
        paddingLeft:4
    },
    excelIcon:{
        marginLeft:295,
        backgroundColor:"#D2D2D2",
        padding:20,
        borderRadius:10
    },
    pdfIcon:{
        marginLeft:5,
        backgroundColor:"#D2D2D2",
        padding:20,
        borderRadius:10
    },
    View2:{
        flexDirection:"row",
        padding:13,
        borderBottomWidth:1,
        borderBottomColor:"#DCDCDC",
    },
    Name:{
        flex:1,
        fontSize:15,
        paddingLeft:5,
        paddingBottom:13,
        color:"#000"
    },
    Amount:{
        fontSize:15,
        paddingRight:10,
        color:"#FFA500",
        fontWeight:"700"
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    title: {
        fontSize: 32,
      },
    summaryView:{
        backgroundColor:Color.red,
        padding:18
      },
      summaryTitle:{
        color:Color.white,
        fontSize:20,
        fontFamily:"RobotoCondensed-Bold",
        textAlign:"center",
        borderBottomWidth:3,
        borderBottomColor:Color.white,
        paddingBottom:10
      },
      fareRow:{
        flexDirection:"row",
        marginTop:10,
        marginLeft:8,
      },
      adultRow:{
        flexDirection:"row",
        // marginTop:10,
        // marginLeft:8,
        marginTop:10,
        borderBottomWidth:2,
        borderBottomColor:Color.white,
        paddingBottom:10
      },
    noteStyle:{
        marginStart:5,
        marginTop:10,
        color:Color.white,
        fontSize:14,
        fontFamily:"QuattrocentoSans-Bold",
    },
    // buttonView:{

    // },
    bookNowButton:{
        backgroundColor:Color.white,
        color:Color.black,
        alignSelf:"center",
        alignContent:"center",
        width:"80%",
        height:"15%",
        textAlign:"center",
        fontSize:20,
        borderRadius:10,
        paddingTop:5,
        fontFamily:"QuattrocentoSans-Bold",
        margin:10
    }



}
)

export default SearchListScreen




