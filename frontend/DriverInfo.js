import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import * as React from 'react';
import { PaperProvider, Text, TextInput, Button} from 'react-native-paper'; 
//import Input from "./text_input";
import BdImage from './BgdImage';
import { NavigationContainer } from '@react-navigation/native';
//import Navbar from './Navbar';

const InputText = () => {
  const [text, ChangingText] = React.useState('');
  const [number, ChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        value={text}
        onChangeText={ChangingText}
      />
      <TextInput
        onChangeText={ChangeNumber}
        value={number}
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};



export default function DriverInfo() {
  const baseurl = "https://043a-2607-fea8-5b40-21f-480a-6930-864e-ff44.ngrok.io";
  const [name,setName] = React.useState('');
  const [car, setCarType] = React.useState('');
  const [license, setLicensePlate] = React.useState('');
  const [seats, setAvailableSeats] = React.useState('');
  const [Location, setLocation] = React.useState('');
  const [time, setTime] = React.useState('');
  const [contact, setContactNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <View style={styles.main}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}></ScrollView>
      <BdImage/>
      <View style={styles.iconButton}> 
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.firstText} > Name :               </Text> 
        <TextInput onChangeText={setName} style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.BaseText} > Car Type :             </Text> 
        <TextInput onChangeText={setCarType} style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.BaseText}> License Plate :      </Text>
        <TextInput onChangeText={setLicensePlate} style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.BaseText}> Available Seats :   </Text>
        <TextInput onChangeText={setAvailableSeats} style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.BaseText}> Location :              </Text>
        <TextInput onChangeText={setLocation} style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.BaseText}> Time :                     </Text>
        <TextInput onChangeText={setTime} style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}> 
        <Text variant="bodyMedium" style = {styles.BaseText}> Contact Number :  </Text>
        <TextInput onChangeText={setContactNumber} style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.BaseText}> Email :                    </Text>
        <TextInput onChangeText={setEmail} style={styles.input} multiline={false}/>
      </View>
      <Button mode='contained-tonal' style = {styles.button}  onPress={()=> {
         fetch(baseurl, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client: license, 
            name: name,
            address: Location,
            email: email,
            phone: contact,
            car_description: car,
            available_seats: seats,
            time: time,
          }),
        });
        
      }
      }> 
      <Text style={styles.buttonText}>Submit
      </Text> 
      </Button>
      <StatusBar style="auto" />

      {/* <Navbar/>  */}
    </View>
  );

}

  


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconButton:{
    flex: 0.5,
    alignItems:'flex-start',
  },
  group:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstText:{
    color: 'gray',
    lineHeight: 25,
    textAlign: 'center',
    marginLeft: 45, 
    marginRight: 15,
  },
  BaseText: {
    color: 'gray',
    lineHeight: 25,
    textAlign:'center',
    marginLeft: 50,
  },
  input:{
    padding: 1,
    borderWidth: 1,
    height: 20,
    width: 150,
    padding: 2,
    backgroundColor: '#dcdcdc',
  },
  ScrollViewStyle: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 30,
    marginBottom: 50,
    marginLeft: 125,
    marginRight: 125,
  },
  buttonText:{
    color: 'white',
  },
});