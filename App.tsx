import React,{Component} from "react"
import {View,Text, SafeAreaView} from "react-native"
import SplashScreen from "react-native-splash-screen";
import IntroScreen from "./screens/IntroScreen";
import AppStack from "./navigation/AppStack";
import { StatusBar } from 'react-native';
import BottomTabs from "./navigation/BottomTabs";
import MyDatePicker from "./datepicker";
import LoginForm from "./screens/Auth/LoginScreen";
import SignupForm from "./screens/Auth/SignupScreen";
import DateSelection from "./screens/Components/DatePicker";
// import { registerTranslation,enGB } from 'react-native-paper-dates'
import selectCities from "./fictions/SelectCities";
import SelectCities from "./fictions/SelectCities";
import  SearchListScreen from "./screens/SearchListScreen";
import DropdownComponent from "./screens/SearchListScreen";
import MenuBarFilter from "./screens/MenuBarFilter";
import Product from "./screens/SearchListScreen";
import FlightList from "./fictions/FlightListComponent";
import HomePageTab from "./screens/tabs/HomePage";
import ViewFaresButton from "./screens/Components/ViewFaresButton";
import TravelDetails from "./screens/Booking/TravellerDetails";
import DropdownScreen from "./screens/Booking/ReviewBookingScreen";
import CustomDropdown from "./screens/Booking/ReviewBookingScreen";
import PromoCode from "./screens/Booking/PromoCode";
import ReviewBookingScreen from "./screens/Booking/ReviewBookingScreen";
// import { Dropdown } from "./screens/SearchListScreen";

// registerTranslation('en-GB', enGB)

class App extends Component {

    componentDidMount() {
        SplashScreen.hide();
        StatusBar.setHidden(true);
    }

    render(){
      return(
        // <View>
          // <IntroScreen/>
          // {/* <AppRouter/> */}
        // </View>
       
        // <AppStack/>
          <AppStack/>
        // <TravelDetails/>
        // <ReviewBookingScreen/>
        // <PromoCode/>
        // <SignupForm/>
        // <LoginForm/>
        // <HomePageTab/>
        // <DateSelection/>
          // <SelectCities/>
          // <DropdownComponent/>
          // <SearchListScreen/>
          // <SearchListScreen/>
          // <MenuBarFilter/>
          // <ViewFaresButton/>
      )
    }
}
 
export default App

