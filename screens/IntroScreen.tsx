import React,{useState,useRef} from "react"
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native"
import AppIntroSlider from 'react-native-app-intro-slider';
import { Color } from "../typography/Styles";
import AppStack from "../navigation/AppStack";
interface slideProps{
    key:string,
    title:string,
    text:string,
    image:object,
    backgroundColor:string,
    button:string,

}
const slides:slideProps[]=[
    {
        key:"1",
        title:"Book a flight",
        text:"Found a flight that matches your destination and schedule? Book it Instantly.",
        image:require("../assets/images/bookFlight.png"),
        backgroundColor:"#59b2ab",
        button:"Next"
    },
    {
        key:"2",
        title:"Find a hotel room",
        text:" Select the day, Book your room. We give you the best price.",
        image:require("../assets/images/hotelRoom.png"),
        backgroundColor:"#59b2ab",
        button:"Next"
    },
    {
        key:"3",
        title:"Enjoy your Trip",
        text:"Easy discovering new places and share these between your friends and travel together.",
        image:require("../assets/images/enjoyTrip.png"),
        backgroundColor:"#59b2ab",
        button:"Get Started"
    },
]
   

const IntroScreen:React.FC = ()=>{
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const[showHome,setShowHome]=useState(false)

 

    const renderItem = ({ item }: { item: slideProps }) => (
        <View style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      );

      const Done=()=>{
        setShowHome(true)
      }

      const DoneButton=()=>{
        return(
          <Text style={styles.doneButtonStyle}>GET STARTED</Text>
        )
      }

      const SkipButton=()=>{
        return(
          <Text style={styles.skipButtonStyle}>Skip</Text>
        )
      }
      
      const NextButton=()=>{
        return(
            <Text style={styles.nextButtonStyle}>NEXT</Text>
        )
      }
      
  

   
    return(
      <View style={{ flex: 1,backgroundColor:Color.white }}>
        {showHome?(
          <AppStack/>
        ):<AppIntroSlider
          renderItem={renderItem}
          data={slides}
          onDone={Done}
          renderDoneButton={DoneButton}
          renderSkipButton={SkipButton}
          renderNextButton={NextButton}
          dotStyle={{backgroundColor:"#D9D9D9",marginBottom:250,width:8,height:8}}
          activeDotStyle={{backgroundColor:"#999595",marginBottom:250}}
          doneLabel="Done"
          showSkipButton
          onSlideChange={(index) => setCurrentIndex(index)}
        />}
        </View>          
    )}
  
const styles = StyleSheet.create({
    slide: {
      flex: 0.8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Color.white,
    },
    title: {
      fontSize: 23,
      fontWeight: 'bold',
      marginBottom: 8,
      marginTop:23,
      color:Color.darkBlack,
      fontFamily:"RobotoCondensed-Regular"
    },
    text: {
      fontSize: 14,
      textAlign: 'center',
      color: '#737070',
      fontFamily:"RobotoCondensed-Regular",
      margin:10,
      marginStart:15,
      marginEnd:15
    },
    image: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
      marginBottom: 24,
    },
    doneButtonStyle:{
      color:Color.white,
      fontFamily:"QuattrocentoSans-Bold",
      fontSize:14,
      marginRight:100,
      position:"relative",
      bottom:28,
      alignContent:"center",
      backgroundColor:Color.red,
      padding:8,
      paddingStart:15,
      paddingEnd:15,
      borderRadius:8
    },
    nextButtonStyle:{
      color:Color.white,
      fontFamily:"QuattrocentoSans-Bold",
      fontSize:14,
      // marginRight:110,
      // position:"relative",
      // alignItems:"center",
      // alignSelf:"center",
      // alignContent:"center",
      // bottom:28,
      backgroundColor:Color.red,
      padding:8,
      paddingStart:35,
      paddingEnd:35,
      borderRadius:8,
    
    },
    skipButtonStyle:{color:Color.darkBlack,
      fontFamily:"RobotoCondensed-Regular",
      fontSize:15,
      margin:20,
      marginLeft:152
    }
  });

export default IntroScreen
