import React from "react"
import {Image,View} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePageTab from "../screens/tabs/HomePage";
import BookingTab from "../screens/tabs/Booking";
import EcashTab from "../screens/tabs/Ecash";
import ProfileTab from "../screens/tabs/Profile";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from "react-native-remix-icon"
import { Color } from "../typography/Styles";

const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
const tabBarStyle = {
  height: 60,
  paddingBottom: 5,
  paddingTop: 5,
  backgroundColor:"#DE1522",
}
    return (
        <Tab.Navigator
            // screenOptions={({ route }) => ({
            //     headerShown: false,
            //     tabBarIcon: ({ color, focused }) => {
            //         let iconName;

            //         if (route.name === 'HOME') {
            //             iconName = focused ? require('../../assets/home-active.png') : require('../../assets/home-inactive.png');
            //         } else if (route.name === 'BOOKING') {
            //             iconName = focused ? require('../../assets/order-active.png') : require('../../assets/order-inactive.png');
            //         }
            //         else if (route.name === 'ECASH') {
            //             iconName = focused ? require('../../assets/bookingTable-active.png') : require('../../assets/bookingTable-inactive.png');
            //         }
            //         else if (route.name === 'PROFILE') {
            //             iconName = focused ? require('../../assets/bookingTable-active.png') : require('../../assets/bookingTable-inactive.png');
            //         }


            //         return <Image source={iconName} style={{ height: 24, width: 24 }} />;
            //     },
            //     tabBarStyle: {
            //         borderTopLeftRadius: 20,
            //         borderTopRightRadius: 20,
            //     },
            //     tabBarLabelStyle: {
            //         fontSize: 10,
            //         color: MCColor.heading,
            //         fontWeight: '700',
            //         fontFamily: "Nunito"
            //     },
            // })}
      //      screenOptions={{headerShown:false}}
/*options={{tabBarIcon:({color,size})=>(
               // <FontAwesome name="home" color={color} size={size}/>
               <MaterialCommunityIcons
                name={'home'}
                size={25}
                color={'red'}
              />
            )}}
            */
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: tabBarStyle,
                tabBarInactiveTintColor:"#AEB3BC",
                tabBarActiveTintColor:"#FFFFFF",
                tabBarLabelStyle:{
                  color:Color.white
                },
                // tabBarInactiveLabel:{
                //   color:"#AEB3BC",
                // },
                tabBarIcon: ({ focused,color }) => {
                  let iconName
                  let size = 25
        
                  if (route.name === 'HOME') {
                    iconName = focused ? 'home' : 'home'
                    return  (
                        <>
                          <View>
                            <Icon
                              name="ri-home-4-fill"
                              size={size}
                              color="#FFFFFF"
                            />
                          </View>
                        </>
                      )
                  } else if (route.name === 'BOOKING') {
                    iconName = focused ? 'clipboard' : 'clipboard-outline'
                    return (
                      <MaterialCommunityIcons
                        name={iconName}
                        size={size}
                        color={color}
                      />
                    )
                  } else if (route.name === 'ECASH') {
                   // iconName = focused ? 'map' : 'map-outline'
                   iconName = focused ? 'receipt' : 'receipt'
                    return (
                        <>
                          <View>
                            <MaterialCommunityIcons
                              name={iconName}
                              size={size}
                              color={color}
                            />
                          </View>
                        </>
                      )
                  } else if (route.name === 'PROFILE') {
                    iconName = focused ? 'receipt' : 'receipt'
                    return (
                      <>
                        <View>
                          <MaterialCommunityIcons
                            name={iconName}
                            size={size}
                            color={color}
                          />
                        </View>
                      </>
                    )
                  }
                },
              })}
        >
            <Tab.Screen name='HOME' component={HomePageTab}/>
            <Tab.Screen name='BOOKING' component={BookingTab}/>
            <Tab.Screen name='ECASH' component={EcashTab} />
            <Tab.Screen name='PROFILE' component={ProfileTab} />

        </Tab.Navigator>
    );
};

export default BottomTabs;