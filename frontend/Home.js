import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text, TextInput, Modal, Portal, PaperProvider, Dialog } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView , {Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';
import DiaMap from './DiaMap';


const baseurl = "https://ea30-2606-fa00-8a0-700-70c5-7794-4a-7bcf.ngrok.io/";
let userLat,userLong = 0;


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function getDistanceBetweenCoordinates(lat1, lon1, lat2, lon2) {
  // The radius of the Earth in kilometers
  const earthRadius = 6371; // in kilometers

  // Convert latitude and longitude from degrees to radians
  const lat1Rad = (Math.PI * lat1) / 180;
  const lon1Rad = (Math.PI * lon1) / 180;
  const lat2Rad = (Math.PI * lat2) / 180;
  const lon2Rad = (Math.PI * lon2) / 180;

  // Haversine formula
  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  const a =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Distance in kilometers
  const distance = earthRadius * c;

  return distance;
}


const MyCard = (props) => {
  const [dialogVisible, setDialogVisible] = React.useState(props.visible)
  // const seeDetails = (props) => {<CardDialog cardDialogVisible={true} cardData={props.cardData}></CardDialog>}
  let distance= 0;
  // console.log("uLat" + userLat);
  // console.log(userLong);
  // console.log(props.cardData.latitude);
  // console.log(props.cardData.longitude);
 if(props.userLoExist){
  distance = getDistanceBetweenCoordinates(userLat, userLong, props.cardData.latitude, props.cardData.longitude)
 }
 const [refresh, setRefresh] = useState(false);
 const [occup, setOccup] = useState(props.cardData.occupied_seats);
 
  return (
    
    <Card style={{ flex: 2, width: '100%'}}>
      <Card.Content>
        <Text variant="bodyMedium">Location: {props.cardData.address}</Text>
        {
          props.userLoExist ? (
            <Text variant="bodyMedium">Distance: {distance}</Text>
          ) :     (
            <></>
          )
        }
        {
          refresh ? (

            <Text variant="bodyMedium">Seats Left: {occup}/{props.cardData.available_seats}</Text>
          ) : (
            <Text variant="bodyMedium">Seats Left: {props.cardData.occupied_seats}/{props.cardData.available_seats}</Text>
          )
        }
        
        {

        }
        {
          dialogVisible ? (
            <>

        <Text variant="bodyMedium">Name: {props.cardData.name}</Text>
        <Text variant="bodyMedium">Phone: {props.cardData.phone}</Text>
        <Text variant="bodyMedium">Email: {props.cardData.email}</Text>
        <Text variant="bodyMedium">Start Time: {props.cardData.time}</Text>
        <Text variant="bodyMedium">Car Type: {props.cardData.car_description}</Text>
        <DiaMap longitude={props.cardData.longitude} latitude={props.cardData.latitude}></DiaMap>
        <Button onPress={() => {
          console.log(props.cardData._id);
          if (occup<props.cardData.available_seats){
            axios.patch(baseurl+"add/"+ props.cardData._id)
          .then(response => console.log('sent'));
          setRefresh(true);
          setOccup(occup+1);
          }
      }}
        >Join Car Ride</Button>
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
    <ScrollView style={{ backgroundColor: 'black', height: '100%', flexDirection: 'column', flex: 2}}>
        {/* <Text>{"" + JSON.stringify(props.cardData[0])}</Text> */}
        {props.cardData.map((v, i) => <MyCard key={i} userLoExist={props.userLoExist} cardData={props.cardData[i]} visible={props.visible}></MyCard>)}
    </ScrollView>
  );
  



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



export default function Home() {
  const [cardData, setCardData] = React.useState([
    // {
    //   address: "USTC",
    //   distance: "2",
    //   time: "2:00",
    //   seats: 2,
    //   latitude: 37.78825,
    //   longitude: -122.4324,
    // },
    // {
    //   address: "AAA",
    //   distance: "4",
    //   time: "6:00",
    //   seats: 2,
    //   latitude: 37.78825,
    //   longitude: -122.4324,
    // },
    // {
    //   address: "USTC",
    //   distance: "2",
    //   time: "2:00",
    //   seats: 2,
    // },
    // {
    //   address: "AAA",
    //   distance: "4",
    //   time: "6:00",
    //   seats: 2,
    // }, {
    //   address: "USTC",
    //   distance: "2",
    //   time: "2:00",
    //   seats: 2,
    // },
    // {
    //   address: "AAA",
    //   distance: "4",
    //   time: "6:00",
    //   seats: 2,
    // }, {
    //   address: "USTC",
    //   distance: "2",
    //   time: "2:00",
    //   seats: 2,
    // },
    // {
    //   address: "AAA",
    //   distance: "4",
    //   time: "6:00",
    //   seats: 2,
    // }
  ])
  const [cardDialogVisible, setCardDialogVisible] = React.useState(false);
   React.useEffect(() => {
     axios.get(baseurl).then(function (response){
      console.log(':)');
      console.log(':)');console.log(':)');
      
          console.log(Array.from(response.data));
          setCardData(Array.from(response.data));
        })

  },[]);
  const [userLocation,setUserLocation] = React.useState('');
  const [userLoExist, setUserLoExist] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
      <Text style={styles.whiteText} variant="titleSmall">Location:</Text>
      <TextInput style={styles.input} onChangeText={setUserLocation} multiline={false}></TextInput>
      </View>
      <Button style={styles.button} mode="contained" onPress={() => {
        setUserLoExist(true);
        var loc = userLocation.replaceAll(" ", "%20");
        loc = loc.replaceAll(",", "%2C");
        console.log(222);
        console.log(loc);
        console.log(userLocation);
        axios.get(baseurl+"location/"+loc).then(function (response){
          console.log(response.data);
          userLat = response.data.latitude;
          userLong = response.data.longitude;
          console.log(userLat);
          console.log(loc);
          console.log(userLong);
        })}}>
    Search
  </Button>
  <View style={styles.cardContainer}>
  <CardComponent userLoExist={userLoExist} visible={false} cardData={cardData}/>
  </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: 200,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
  },
  cardContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'left',
    flex: 1.5,
  },
  whiteText: {
    marginRight: 10,
    color: 'white', // Set text color to white
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'gray',
    marginTop: 30,
    marginBottom: 40,
    marginLeft: 125,
    marginRight: 125,
  },
  dialog: {
    flex: 3,
    flexDirection: 'column',
    width: 330, height: 350,
    alignSelf: 'stretch', height: 500, position: 'absolute' ,zIndex:999,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute'
  },
});

