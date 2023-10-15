import React from 'react';
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, View } from 'react-native';

export default function DiaMap(props) {
    const [lat, setLat] = React.useState(43.7830);
    const [lon, setLon] = React.useState(-79.1874);

    React.useEffect(() => {
        setLat(props.latitude);
        setLon(props.longitude);
     },[]);
  return (
    <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: props.latitude,
        longitude: props.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}
    >
      <Marker
        coordinate={{ latitude: props.latitude, longitude: props.longitude }}
        title="Pick Up Spot"
      />
    </MapView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 350,
  },
  map: {
    flex:1,
  },
});