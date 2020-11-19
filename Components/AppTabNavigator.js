import DonateScreen from '../Screens/DonateScreen';
import RequestScreen from '../Screens/RequestScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppStackNavigator} from './AppStackNavigator';
import {Image} from 'react-native';
import {React} from 'react';
 const AppTabNavigator = createBottomTabNavigator({
    Donate:{screen:AppStackNavigator, 
    navigationOptions:{
        
        tabBarLabel:"Donate "}
    },
    Request:{screen:RequestScreen, 
    navigationOptions:{
        
        tabBarLabel:"Receive"}
    },
})
export default AppTabNavigator