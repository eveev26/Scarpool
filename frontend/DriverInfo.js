import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import * as React from 'react';
import { PaperProvider, Text, TextInput, Button} from 'react-native-paper'; 
//import Input from "./text_input";
import BdImage from './BgdImage';

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

export default function App() {
  return (
    <View style={styles.main}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}></ScrollView>
      <BdImage/>
      <View style={styles.iconButton}> 
        <Button icon={require('./left-arrow.png')} onPress={()=> console.log('Pressed')}>
        </Button> 
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.firstText} > Name :               </Text> 
        <TextInput style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.BaseText} > Car Type :             </Text> 
        <TextInput style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.BaseText}> License Plate :      </Text>
        <TextInput style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.BaseText}> Available Seats :   </Text>
        <TextInput style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.BaseText}> Location :              </Text>
        <TextInput style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.BaseText}> Time :                     </Text>
        <TextInput style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}> 
        <Text variant="bodyMedium" style = {styles.BaseText}> Contact Number :  </Text>
        <TextInput style={styles.input} multiline={false}/>
      </View>
      <View style={styles.group}>
        <Text variant="bodyMedium" style = {styles.BaseText}> Email :                    </Text>
        <TextInput style={styles.input} multiline={false}/>
      </View>
      <Button mode='contained-tonal' style = {styles.button} onPress={()=> console.log('Pressed')}> 
      <Text style={styles.buttonText}>Submit
      </Text> 
      </Button>
      <StatusBar style="auto" />
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
