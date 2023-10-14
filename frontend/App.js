import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import axios from 'axios';
import { Avatar, Button, Card, Text, TextInput, Modal, Portal, PaperProvider, Dialog } from 'react-native-paper';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const baseurl = "";
let numberOfCards = 2;

const Input = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label=""
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyCard = (props) => {
  return (
    <Card style={{ flex: 2, width: '150%' }}>
      <Card.Content>
        <Text variant="bodyMedium">Location: {props.cardData.location}</Text>
        <Text variant="bodyMedium">Distance: {props.cardData.distance}</Text>
        <Text variant="bodyMedium">Start Time: {props.cardData.time}</Text>
        <Text variant="bodyMedium">Seats Left: {props.cardData.seats}</Text>
        <Button onPress={props.seeDetails}>See Details</Button>
      </Card.Content>
      <Card.Actions>
      </Card.Actions>

    </Card>
    
  );
};

const CardComponent = (props) => (
    <ScrollView style={{ backgroundColor: 'black', height: '99%', flex: 1, flexDirection: 'column'}}>
        {/* <Text>{"" + JSON.stringify(props.cardData[0])}</Text> */}
        {props.cardData.map((v, i) => <MyCard key={i} cardData={props.cardData[i]}></MyCard>)}
    </ScrollView>
  );
  

  const CardDialog = (props) => {
  
    const showDialog = () => setVisible(true);
  
    const hideDialog = () => setVisible(false);
    if(!props.visible)
      return <></>
    return (
      <PaperProvider>
        <View>
          <Button onPress={showDialog}>See Details</Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} style={{alignSelf: "center", height: 500}}>
              <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
                <Text variant="bodyMedium">This is simple dialog</Text>
                <Text variant="bodyMedium">This is simple dialog</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </PaperProvider>
    );
  }
export default function App() {

  const [cardDialogVisible, setCardDialogVisible] = React.useState(false);

  const [cardData, setCardData] = React.useState([
    {
      location: "USTC",
      distance: "2",
      time: "2:00",
      seats: 2,
    },
    {
      location: "AAA",
      distance: "4",
      time: "6:00",
      seats: 2,
    }
  ])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
      <Text style={styles.whiteText} variant="titleSmall">Location:</Text>
      <Input style={styles.input}></Input>

      <Text style={styles.whiteText} variant="titleSmall">Time:</Text>
      <Input style={styles.input}></Input>
      </View>
      <Button style={styles.button} mode="contained" onPress={() => console.log(' Search Pressed')}>
    Search
  </Button>
  <View style={styles.cardContainer}>
    <CardDialog visible={false}></CardDialog>
  <CardComponent cardData={cardData}/>
  </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
  },
  cardContainer: {
    backgroundColor: 'white',
    flex: 3,
    flexDirection: 'row',
    alignItems: 'left',
  },
  whiteText: {
    marginRight: 10,
    color: 'white', // Set text color to white
  },
  button: {
    backgroundColor: 'grey',
  },
});
