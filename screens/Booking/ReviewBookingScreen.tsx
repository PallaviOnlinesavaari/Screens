import React from "react"
import {ScrollView, View} from "react-native"
import TravelInsurance from "./TravelInsurance"
import PromoCode from "./PromoCode"
import TravelDetails from "./TravellerDetails"
import ServiceRequest from "./ServiceRequest"
import FlightListInfo from "./FlightListInfo"

const ReviewBookingScreen=()=>{
    return(
        <ScrollView>
            <FlightListInfo/>
            <TravelInsurance/>
            <ServiceRequest/>
            <TravelDetails/>
            <PromoCode/>
        </ScrollView>
    )
}

export default ReviewBookingScreen
// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// const CustomDropdown = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const options = ['Option 1', 'Option 2', 'Option 3'];

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const selectOption = (option:any) => {
//     setSelectedOption(option);
//     toggleDropdown();
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
//         <Text style={styles.buttonText}>{selectedOption || 'Select Option'}</Text>
//       </TouchableOpacity>

//       {dropdownVisible && (
//         <View style={styles.dropdown}>
//           {options.map((option, index) => (
//             <TouchableOpacity key={index} onPress={() => selectOption(option)} style={styles.option}>
//               <Text>{option}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//     minWidth: 150,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   dropdown: {
//     position: 'absolute',
//     top: 60, // Adjust this value as needed to position the dropdown below the button
//     width: 150, // Adjust this value as needed
//     backgroundColor: 'white',
//     borderRadius: 5,
//     elevation: 3,
//   },
//   option: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
// });

// export default CustomDropdown;