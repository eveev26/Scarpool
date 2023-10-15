import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text, TextInput, Modal, Portal, PaperProvider, Dialog } from 'react-native-paper';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView , {Marker, PROVIDER_GOOGLE } from 'react-native-maps';


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
  const [dialogVisible, setDialogVisible] = React.useState(props.visible)
  // const seeDetails = (props) => {<CardDialog cardDialogVisible={true} cardData={props.cardData}></CardDialog>}

  return (
    <Card style={{ flex: 2, width: '150%'}}>
      <Card.Content>
        <Text variant="bodyMedium">Location: {props.cardData.location}</Text>
        <Text variant="bodyMedium">Distance: {props.cardData.distance}</Text>
        <Text variant="bodyMedium">Start Time: {props.cardData.time}</Text>
        <Text variant="bodyMedium">Seats Left: {props.cardData.seats}</Text>
        {

        }
        {
          dialogVisible ? (
            <>

        <Text variant="bodyMedium">Location: {props.cardData.location}</Text>
        <Text variant="bodyMedium">Distance: {props.cardData.distance}</Text>
        <Text variant="bodyMedium">Start Time: {props.cardData.time}</Text>
        <Text variant="bodyMedium">Seats Left: {props.cardData.seats}</Text>
            </>
          ) : (
            <></>
          )
        }
        {
          dialogVisible ? (
            <Button visible={dialogVisible} cardData={props.cardData} onPress={() => {setDialogVisible(false)}}>Close</Button>
    
          ) :
          (

            <Button visible={!dialogVisible} cardData={props.cardData} onPress={() => {setDialogVisible(true)}}>See Details</Button>
          )
        }


        {
        /* <CardDialog visible={dialogVisible} cardData={props.cardData} setVisibleFunc={setDialogVisible}></CardDialog> */}
      </Card.Content>
      <Card.Actions>
      </Card.Actions>

    </Card>
    
  );
};

const CardComponent = (props) => (
    <ScrollView style={{ backgroundColor: 'black', height: '99%', flex: 1, flexDirection: 'column'}}>
        {/* <Text>{"" + JSON.stringify(props.cardData[0])}</Text> */}
        {props.cardData.map((v, i) => <MyCard key={i} cardData={props.cardData[i]} visible={props.visible}></MyCard>)}
    </ScrollView>
  );
  
  // const DialogMap = (props) => {
  //   return (
  //     <View style={styles.container}>
  //        <MapView
  //     style={styles.map} provider={PROVIDER_GOOGLE}
  //     initialRegion={{
  //       latitude: 37.78825, // Latitude of the initial map center
  //       longitude: -122.4324, // Longitude of the initial map center
  //       latitudeDelta: 0.0922, // Zoom level for latitude
  //       longitudeDelta: 0.0421, // Zoom level for longitude
  //     }}
  //   >
  //     <Marker
  //       coordinate={{
  //         latitude: 37.78825, // Latitude of the marker
  //         longitude: -122.4324, // Longitude of the marker
  //       }}
  //       title="Marker Title"
  //       description="Marker Description"
  //     />
  //   </MapView>
  //     </View>
  //   );
  // };

  const CardDialog = (props) => {
    return (
      <PaperProvider>
        <View>
          <Portal>
            <Dialog visible={props.visible}  style={styles.dialog}>
              <Dialog.Content>
              <Text variant="bodyMedium">Location: {props.cardData.location}</Text>
              <Text variant="bodyMedium">Distance: {props.cardData.distance}</Text>
              <Text variant="bodyMedium">Start Time: {props.cardData.time}</Text>
              <Text variant="bodyMedium">Seats Left: {props.cardData.seats}</Text>
              <Text variant="bodyMedium">Seats Occupied: {props.cardData.seats}</Text>
              <Text variant="bodyMedium">Email: {props.cardData.location}</Text>
              <Text variant="bodyMedium">Phone: {props.cardData.distance}</Text>
              <Text variant="bodyMedium">Car Description: {props.cardData.seats}</Text>
              {/* <View><DialogMap cardData={props.cardData}></DialogMap></View> */}
              </Dialog.Content>
              <Dialog.Actions>
              <Button>Join</Button>
                <Button onPress={()=>props.setVisibleFunc(false)}>Done</Button>
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
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.whiteText} variant="titleSmall">Time:</Text>
      <Input style={styles.input}></Input>
      </View>
      <Button style={styles.button} mode="contained" onPress={() => console.log(' Search Pressed')}>
    Search
  </Button>
  <View style={styles.cardContainer}>
  <CardComponent visible={false} cardData={cardData}/>
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
    flex: 0.9,
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
  dialog: {
    flex: 3,
    flexDirection: 'column',
    width: 330, height: 350,
    alignSelf: 'stretch', height: 500, position: 'absolute' ,zIndex:999,
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
