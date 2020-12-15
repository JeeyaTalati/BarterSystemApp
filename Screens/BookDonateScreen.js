import React,{Component} from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert, Modal, ScrollView, KeyboardAvoidingView, FlatList} from 'react-native';
import db from '../config';
import {ListItem} from 'react-native-elements';
import firebase, { database } from 'firebase';
import MyHeader from '../Components/MyHeader';
export default class DonateScreen extends Component{
constructor(){
    super();
    this.state={
        requestedList:[],
        
    }
    this.requestRef=null;
}
getRequestedList=()=>{
    this.requestRef=database.collection("requested")
    .onSnapshot((snapshot)=>{
        var requestedList=snapshot.docs.map(document=>document.data());
        this.setState({requestedList:requestedList});
    })
}
componentDidMount(){
    this.getRequestedList()
}
componentWillUnmount(){
    this.requestRef=null;
}
keyExtractor=(item,index)=>{
    index.toString()
}
renderItem=({item,i})=>{
return(
    <ListItem key={i} title={item.name} subTitle={item.reason}titleStyle={{color:"black",fontWeight:'bold'}} rightElement={<TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("ReceiverDetail",{"details": item})}}><Text style={{color:"white"}}>VIEW</Text></TouchableOpacity>} bottomDivider>
       
    </ListItem>
)
}
render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="DONATE" navigation={this.props.navigation}>
           
          </MyHeader>
          <View style={{flex:1}}>
             {
                 this.state.requestedList.length===0?(
                     <View style={styles.subContainer}>
                         <Text style={{fontSize:20}}>
                          LIST OF ALL REQUESTED THINGS
                         </Text>
                         
                     </View>

                 ):
                 (
                     <FlatList keyExtractor={this.keyExtractor} data={this.state.requestedList} renderItem={this.renderItem}>

                     </FlatList>
                 )
             }
          </View>
        </View>
    )
}
}
const styles= StyleSheet.create({
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        }},
        subContainer:{
            flex:1,
            fontSize:20,
            justifyContent:'center',
            alignItems:'center',
        }

})