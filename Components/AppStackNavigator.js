import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import DonateScreen from '../Screens/DonateScreen';
import ReceiverDetailScreen from '../Screens/ReceiverDetailScreen';
export const AppStackNavigator= createStackNavigator({
    DonateList:{screen:DonateScreen,navigationOptions:{headerShown:false}},
    ReceiverDetails:{screen:ReceiverDetailScreen,navigationOptions:{headerShown:false}},
},
{
    initialRoute:"BookDonateList",
})